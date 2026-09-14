"use client";

/**
 * Builds a Wepzite project quotation as a PDF — the document that goes to an
 * enquiry before any agreement exists.
 *
 * It is drawn with the agreement's kit (utils/agreementPdf.js): the same hero,
 * Space Grotesk, gradients and section furniture, so a client who is quoted
 * today and signs next week sees one visual system. What differs is the
 * promise. A quotation is an offer, so it carries one signature — Wepzite's —
 * and every list on it (scope, payment policy, terms) is what the sender wrote
 * for this enquiry rather than fixed contract clauses.
 *
 * Like the agreement builder, jsPDF itself is passed in by the caller, which
 * imports it lazily.
 */

import {
  C,
  CONTENT_W,
  HERO,
  M,
  PAGE,
  RIGHT,
  alpha,
  checkBadge,
  clipRoundedRect,
  createCursor,
  dotField,
  drawHero,
  drawText,
  fillGradient,
  glow,
  hairline,
  issueDates,
  layoutText,
  markTile,
  registerFonts,
  sectionHeading,
  tick,
  typeKit,
} from "./agreementPdf";

const pad2 = (n) => String(n).padStart(2, "0");

/** "2026-09-20" → a printed date, read as a calendar day so no time zone can shift it. */
function calendarDate(iso, month = "short") {
  const [y, m, d] = String(iso ?? "").split("-").map(Number);
  if (!y || !m || !d) return "—";
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    timeZone: "UTC",
    day: month === "long" ? "numeric" : "2-digit",
    month,
    year: "numeric",
  });
}

/** Steps a figure down until it fits, so a large quote never runs off its tile. */
function fitSize(T, text, weight, size, maxW, min = 12) {
  let s = size;
  while (s > min && T.width(text, weight, s) > maxW) s -= 0.5;
  return s;
}

// --- layout ----------------------------------------------------------------

/**
 * Places measured rows in a card that splits at page breaks. Each page gets
 * its own card holding as many rows as fit, so a long scope never runs off the
 * paper — and no card opens, or ends, with a lone row at a page edge.
 *
 * Rows are { h, header?, draw(y, { last }) }. Only the first card of a list
 * starts with its header row, so a continuation card gets `padTop` instead.
 */
function placeCard(doc, cur, rows, { fill, stroke, padTop = 0, padBottom = 0, gap = 28, radius = 14 } = {}) {
  let i = 0;
  while (i < rows.length) {
    const top = rows[i].header ? 0 : padTop;
    const need = Math.min(rows[i].header ? 3 : 2, rows.length - i);
    const room = PAGE.h - M.bottom - cur.y;

    let used = top + padBottom;
    let j = i;
    while (j < rows.length && used + rows[j].h <= room) {
      used += rows[j].h;
      j += 1;
    }

    if (j - i < need) {
      if (cur.y > M.top) {
        cur.ensure(PAGE.h);
        continue;
      }
      // Rows taller than a whole page: draw them anyway rather than loop.
      while (j - i < need) {
        used += rows[j].h;
        j += 1;
      }
    }

    // Leave at least two rows for the next card, never a single straggler.
    const rest = rows.length - j;
    if (rest === 1 && j - 1 - i >= need) {
      j -= 1;
      used -= rows[j].h;
    }

    const y0 = cur.y;
    if (fill || stroke) {
      if (fill) doc.setFillColor(...fill);
      if (stroke) {
        doc.setDrawColor(...stroke);
        doc.setLineWidth(0.7);
      }
      doc.roundedRect(M.left, y0, CONTENT_W, used, radius, radius, fill && stroke ? "FD" : fill ? "F" : "S");
    }

    let y = y0 + top;
    for (let k = i; k < j; k += 1) {
      rows[k].draw(y, { last: k === j - 1 });
      y += rows[k].h;
    }

    cur.y = y0 + used;
    i = j;
    if (i < rows.length) cur.ensure(PAGE.h);
  }
  cur.advance(gap);
}

/** Height of a list's first card, so its section heading can keep with it. */
function leadHeight(rows, { padTop = 0, padBottom = 0 } = {}) {
  if (!rows.length) return 0;
  const header = Boolean(rows[0].header);
  return rows
    .slice(0, header ? 3 : 2)
    .reduce((sum, row) => sum + row.h, (header ? 0 : padTop) + padBottom);
}

// --- blocks ----------------------------------------------------------------

/** MRP, offer price and delivery — the figures an enquirer reads first. */
function pricingBlock(doc, T, { mrp, offer, saving, pct, days, validLabel, pkgName }) {
  const h = 112;

  return {
    height: h,
    gap: 28,
    draw(top) {
      doc.setFillColor(...C.white);
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.7);
      doc.roundedRect(M.left, top, CONTENT_W, h, 16, 16, "FD");

      // ---- Offer tile, inset into the card so the two radii nest ----------
      const inset = 6;
      const tileW = 196;
      const tx = RIGHT - inset - tileW;
      const ty = top + inset;
      const th = h - inset * 2;
      fillGradient(
        doc,
        (d) => d.roundedRect(tx, ty, tileW, th, 11, 11, null),
        [tx, ty, tx + tileW, ty + th],
        [[0, C.forest], [1, C.brand600]],
      );
      clipRoundedRect(doc, tx, ty, tileW, th, 11, () => {
        glow(doc, tx + tileW, ty, 150, C.brand200, 0.42);
        dotField(doc, { x: tx, y: ty, w: tileW, h: th }, tx + tileW, ty + th * 0.2, 120, {
          step: 10,
          peak: 0.26,
          dot: 0.6,
        });
      });

      T.tracked(saving ? "Offer price" : "Project investment", tx + 18, ty + 21, {
        size: 5.6,
        cs: 1,
        color: C.brand100,
      });
      const price = T.rupee(offer);
      const priceSize = fitSize(T, price, "bold", 26, tileW - 36);
      T.set("bold", priceSize, C.white);
      doc.text(price, tx + 16.5, ty + 55, { charSpace: -0.5 });

      if (saving) {
        const chip = pct
          ? `You save ${T.rupee(saving)}  ·  ${pct}% off`
          : `You save ${T.rupee(saving)}`;
        const chipW = Math.min(T.width(chip, "medium", 7.2) + 18, tileW - 36);
        const cy = ty + 68;
        doc.setFillColor(...C.white);
        alpha(doc, 0.16);
        doc.roundedRect(tx + 18, cy, chipW, 17, 8.5, 8.5, "F");
        alpha(doc, 1);
        T.set("medium", 7.2, C.white);
        doc.text(chip, tx + 27, cy + 11.5);
      } else {
        T.set("regular", 7.4, C.onBrandMuted);
        doc.text("One-time project cost", tx + 18, ty + 78);
      }

      // ---- Left: MRP (or package) and delivery ------------------------------
      const lx = M.left + 22;
      const areaW = tx - 22 - lx;
      const colW = areaW / 2;

      if (saving) {
        T.tracked("Regular price (MRP)", lx, top + 27, { size: 5.6, cs: 1, color: C.muted });
        const text = T.rupee(mrp);
        const size = fitSize(T, text, "bold", 19, colW - 18);
        const w = T.width(text, "bold", size) - 0.35 * (text.length - 1);
        T.set("bold", size, C.faint);
        doc.text(text, lx - 0.5, top + 53, { charSpace: -0.35 });
        const strikeY = top + 53 - size * 0.34;
        doc.setDrawColor(...C.muted);
        doc.setLineWidth(1.2);
        doc.line(lx - 2, strikeY, lx + w + 1.5, strikeY);
      } else {
        T.tracked("Package", lx, top + 27, { size: 5.6, cs: 1, color: C.muted });
        const lines = T.lines(pkgName || "Custom project", "bold", 11.5, colW - 16);
        if (lines.length > 2) lines[1] = T.fit(lines.slice(1).join(" "), "bold", 11.5, colW - 16);
        const shown = lines.slice(0, 2);
        T.set("bold", 11.5, C.ink);
        shown.forEach((line, i) => doc.text(line, lx, top + (shown.length > 1 ? 45 : 51) + i * 13.5));
      }

      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.6);
      doc.line(lx + colW, top + 18, lx + colW, top + 58);

      const dx = lx + colW + 16;
      const dayText = String(days);
      const dayW = T.width(dayText, "bold", 19);
      T.tracked("Delivery", dx, top + 27, { size: 5.6, cs: 1, color: C.muted });
      T.set("bold", 19, C.ink);
      doc.text(dayText, dx - 0.5, top + 53, { charSpace: -0.35 });
      T.set("regular", 8, C.muted);
      doc.text(Number(days) === 1 ? "working day" : "working days", dx + dayW + 3.5, top + 53);

      // ---- Foot line: validity, and the package when MRP took its column --
      hairline(doc, lx, top + 70, lx + areaW, C.hairSoft, 0.7);
      const base = top + 90;
      const validPrefix = "Valid until ";
      const validPrefixW = T.width(validPrefix, "regular", 7.6);
      const validW = validPrefixW + T.width(validLabel, "medium", 7.6);
      T.set("regular", 7.6, C.muted);
      doc.text(validPrefix, lx, base);
      T.set("medium", 7.6, C.ink);
      doc.text(validLabel, lx + validPrefixW, base);

      if (saving && pkgName) {
        const label = "Package ";
        const labelW = T.width(label, "regular", 7.6);
        const name = T.fit(pkgName, "medium", 7.6, areaW - validW - labelW - 20);
        const nameW = T.width(name, "medium", 7.6);
        T.set("medium", 7.6, C.ink);
        doc.text(name, lx + areaW - nameW, base);
        T.set("regular", 7.6, C.muted);
        doc.text(label, lx + areaW - nameW - labelW, base);
      }
    },
  };
}

/** Scope as a mint checklist — two columns unless an item needs more room. */
function scopeRows(doc, T, { items, pkgName, recurringNote }) {
  const pad = 18;
  const gap = 20;
  const leading = 11;
  const twoColW = (CONTENT_W - pad * 2 - gap) / 2;

  let cols = 2;
  let measured = items.map((text) => T.lines(text, "regular", 8.5, twoColW - 15));
  if (measured.some((lines) => lines.length > 2)) {
    cols = 1;
    measured = items.map((text) => T.lines(text, "regular", 8.5, CONTENT_W - pad * 2 - 15));
  }
  const colW = cols === 2 ? twoColW : CONTENT_W - pad * 2;

  const count = `${items.length} item${items.length === 1 ? "" : "s"}`;
  const rows = [
    {
      header: true,
      h: 50,
      draw(y) {
        const meta = T.fit(pkgName ? `${count}  ·  ${pkgName}` : count, "regular", 7.6, CONTENT_W - pad * 2 - 150);
        const metaW = T.width(meta, "regular", 7.6);
        T.set("bold", 9.6, C.ink);
        doc.text("Included in this quotation", M.left + pad, y + 25);
        T.set("regular", 7.6, C.brand700);
        doc.text(meta, RIGHT - pad - metaW, y + 25);
        hairline(doc, M.left + pad, y + 36, RIGHT - pad, C.mintLine, 0.7);
      },
    },
  ];

  for (let i = 0; i < measured.length; i += cols) {
    const group = measured.slice(i, i + cols);
    rows.push({
      h: Math.max(...group.map((lines) => lines.length)) * leading + 6.5,
      draw(y) {
        group.forEach((lines, ci) => {
          const x = M.left + pad + ci * (colW + gap);
          checkBadge(doc, x + 4, y + 5.6, 4);
          T.set("regular", 8.5, C.slate700);
          lines.forEach((line, j) => doc.text(line, x + 15, y + 8.6 + j * leading));
        });
      },
    });
  }

  if (recurringNote) {
    const noteLines = T.lines(recurringNote, "medium", 8.2, CONTENT_W - pad * 2);
    rows.push({
      h: 18 + noteLines.length * 11.5,
      draw(y) {
        hairline(doc, M.left + pad, y + 2, RIGHT - pad, C.mintLine, 0.7);
        T.set("medium", 8.2, C.brand700);
        noteLines.forEach((line, j) => doc.text(line, M.left + pad, y + 17 + j * 11.5));
      },
    });
  }

  return rows;
}

/** Payment policy as numbered rows in a white card. */
function paymentRows(doc, T, items) {
  const pad = 18;
  const textX = M.left + pad + 34;
  const textW = RIGHT - pad - textX;
  const size = 9.2;
  const leading = 13.5;

  return items.map((text, i) => {
    const lines = T.lines(text, "regular", size, textW);
    const h = 29 + (lines.length - 1) * leading;
    return {
      h,
      draw(y, { last }) {
        const base = y + 18;
        doc.setFillColor(...C.brand50);
        doc.setDrawColor(...C.mintLine);
        doc.setLineWidth(0.6);
        doc.roundedRect(M.left + pad, base - 10.2, 23, 14, 4.5, 4.5, "FD");
        T.set("bold", 7, C.brand700);
        doc.text(pad2(i + 1), M.left + pad + 11.5, base - 0.7, { align: "center" });

        T.set("regular", size, C.slate700);
        lines.forEach((line, j) => doc.text(line, textX, base + j * leading));
        if (!last) hairline(doc, textX, y + h, RIGHT - pad, C.hairSoft, 0.7);
      },
    };
  });
}

/**
 * Terms as a numbered list, ruled between items. Set ragged-right, unlike the
 * agreement's clauses: these are one- and two-line items, and justifying a
 * two-line item stretches its first line into visible rivers.
 */
function termRows(doc, T, items) {
  const numW = 30;
  const size = 9.2;
  const leading = 14;

  return items.map((text, i) => {
    const layout = layoutText(T, [{ text }], CONTENT_W - numW, size);
    const h = 26 + (layout.lines.length - 1) * leading;
    return {
      h,
      draw(y, { last }) {
        T.set("bold", 7.6, C.brand600);
        doc.text(pad2(i + 1), M.left, y + 9);
        drawText(doc, T, layout, M.left + numW, y + 9, leading, { color: C.body });
        if (!last) hairline(doc, M.left + numW, y + h - 8, RIGHT, C.hairSoft, 0.7);
      },
    };
  });
}

/**
 * The one signature a quotation carries. A drawn signature is placed as an
 * image sitting on the line; without one, the signatory's name is set as the
 * mark, the same way the agreement signs for Wepzite.
 */
function signerCard(doc, T, x, y, w, h, { signature, name, meta }) {
  doc.setFillColor(...C.white);
  doc.setDrawColor(...C.hair);
  doc.setLineWidth(0.7);
  doc.roundedRect(x, y, w, h, 14, 14, "FD");

  T.tracked("Authorised signatory", x + 16, y + 23, { size: 5.8, cs: 1.1, color: C.muted });

  const pillText = "Issued";
  const pillTextW = T.trackedWidth(pillText, { weight: "bold", size: 5.6, cs: 0.9 });
  const pw = 17 + pillTextW + 8;
  const px = x + w - 14 - pw;
  const py = y + 13.5;
  doc.setFillColor(...C.brand50);
  doc.setDrawColor(...C.mintLine);
  doc.setLineWidth(0.6);
  doc.roundedRect(px, py, pw, 14, 7, 7, "FD");
  tick(doc, px + 11, py + 7, 5.4, C.brand600);
  T.tracked(pillText, px + 17, py + 9.4, { weight: "bold", size: 5.6, cs: 0.9, color: C.brand700 });

  const lineY = y + h - 46;
  const maxW = w - 32;
  let signed = false;

  if (signature?.dataUrl) {
    try {
      const { width: iw, height: ih } = doc.getImageProperties(signature.dataUrl);
      const maxH = lineY - 6 - (y + 34);
      const scale = Math.min(maxW / iw, maxH / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      doc.addImage(signature.dataUrl, "PNG", x + 16, lineY - 5 - dh, dw, dh, "wepzite-signature");
      signed = true;
    } catch {
      // A bad image falls back to the typed mark rather than failing the PDF.
    }
  }

  if (!signed) {
    const markText = T.clean(name);
    let markSize = 21;
    while (markSize > 11 && T.width(markText, "bold", markSize) > maxW) markSize -= 0.5;
    const shown = T.fit(markText, "bold", markSize, maxW);
    T.set("bold", markSize, C.signature);
    doc.text(shown, x + 16, lineY - 12);
  }

  hairline(doc, x + 16, lineY, x + w - 16, C.hair, 0.7);

  let nameSize = 9.2;
  while (nameSize > 7.6 && T.width(T.clean(name), "bold", nameSize) > maxW) nameSize -= 0.2;
  const nameText = T.fit(name, "bold", nameSize, maxW);
  const metaText = T.fit(meta, "regular", 7.4, maxW);
  T.set("bold", nameSize, C.ink);
  doc.text(nameText, x + 16, lineY + 19);
  T.set("regular", 7.4, C.muted);
  doc.text(metaText, x + 16, lineY + 33);
}

/** Signature, next steps and the generation record, kept together as one block. */
function signOffBlock(doc, T, { party, signatory, signature, nextSteps, dates, reference, logo }) {
  const gap = 18;
  const w = (CONTENT_W - gap) / 2;
  const pad = 16;
  const keyW = 52;
  const stepLeading = 12.2;
  const steps = layoutText(T, [{ text: nextSteps || "" }], w - pad * 2, 8.4);
  const contacts = [
    ["WhatsApp", party.whatsapp],
    ["Email", party.email],
    ["Website", party.website],
  ].filter(([, value]) => value);

  const stepsEnd = 44 + (steps.lines.length - 1) * stepLeading;
  const contactsTop = stepsEnd + 26;
  const cardH = Math.max(124, contactsTop + (contacts.length - 1) * 13 + 16);
  const recordH = 50;

  return {
    height: cardH + 14 + recordH,
    gap: 0,
    draw(top) {
      signerCard(doc, T, M.left, top, w, cardH, {
        signature,
        name: signatory.name,
        meta: [signatory.title, party.tradingName].filter(Boolean).join("  ·  "),
      });

      const x = M.left + w + gap;
      doc.setFillColor(...C.brand50);
      doc.setDrawColor(...C.mintLine);
      doc.setLineWidth(0.7);
      doc.roundedRect(x, top, w, cardH, 14, 14, "FD");
      doc.setFillColor(...C.brand500);
      doc.circle(x + pad + 2.2, top + 19.6, 2.2, "F");
      T.tracked("Next steps", x + pad + 9, top + 21.8, { size: 6, cs: 1.1, color: C.brand600 });
      drawText(doc, T, steps, x + pad, top + 44, stepLeading, { color: C.slate700 });
      hairline(doc, x + pad, top + stepsEnd + 11, x + w - pad, C.mintLine, 0.6);
      contacts.forEach(([key, value], i) => {
        const base = top + contactsTop + i * 13;
        const shown = T.fit(value, "medium", 8.2, w - pad * 2 - keyW);
        T.set("regular", 7.4, C.muted);
        doc.text(key, x + pad, base);
        T.set("medium", 8.2, C.ink);
        doc.text(shown, x + pad + keyW, base);
      });

      const ry = top + cardH + 14;
      doc.setFillColor(...C.panel);
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.7);
      doc.roundedRect(M.left, ry, CONTENT_W, recordH, 12, 12, "FD");
      markTile(doc, logo, M.left + 13, ry + 13, 24, 7);

      T.set("medium", 8.4, C.ink);
      doc.text("Electronically generated quotation", M.left + 48, ry + 22);
      T.set("regular", 7.2, C.muted);
      doc.text(T.glyphs(`Issued ${dates.stamp}  ·  This is a quotation, not a tax invoice`), M.left + 48, ry + 34);

      const refW = T.width(reference, "medium", 8.8);
      T.tracked("Quotation no.", RIGHT - 16, ry + 21.5, { size: 5.6, cs: 1, color: C.faint, align: "right" });
      T.set("medium", 8.8, C.ink);
      doc.text(reference, RIGHT - 16 - refW, ry + 34);
    },
  };
}

// --- document --------------------------------------------------------------

/**
 * @param {object}   args
 * @param {Function} args.jsPDF       the constructor, passed in by the caller
 * @param {object}   args.quote       cleaned form values: reference, clientName,
 *                                    businessName, projectName, validUntil
 *                                    (YYYY-MM-DD), deliveryDays, mrp,
 *                                    offerPrice, recurringNote, scope[],
 *                                    paymentPolicy[], terms[], signatory
 * @param {object}  [args.pkg]        the selected package, if any
 * @param {object}   args.party       provider details (data/agreementTerms.js)
 * @param {string}  [args.nextSteps]  copy for the next-steps card
 * @param {object}  [args.logo]       { dataUrl, format } the white ∞ mark
 * @param {object}  [args.fonts]      { regular, medium, bold } base64 TTFs
 * @param {object}  [args.signature]  { dataUrl } a transparent PNG signature
 * @returns {{ doc: object, filename: string, reference: string }}
 */
export function buildQuotationPdf({ jsPDF, quote, pkg, party, nextSteps, logo, fonts, signature }) {
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  const T = typeKit(doc, registerFonts(doc, fonts));
  const dates = issueDates(new Date());
  const { reference } = quote;
  const pkgName = pkg ? pkg.name.trim() : "";
  const client = quote.businessName || quote.clientName;
  const validShort = calendarDate(quote.validUntil);
  const validLong = calendarDate(quote.validUntil, "long");

  const mrp = Number(quote.mrp) || 0;
  const offer = Number(quote.offerPrice) || 0;
  const saving = mrp > offer ? mrp - offer : 0;
  // Rounded down: a quotation must never claim a bigger discount than it gives.
  const pct = saving ? Math.floor((saving / mrp) * 100) : 0;
  const days = Number(quote.deliveryDays) || 0;

  doc.setProperties({
    title: `Quotation — ${quote.projectName}`,
    subject: `${party.tradingName} quotation for ${client} (${reference})`,
    author: party.legalName.trim(),
    creator: party.tradingName,
    keywords: `quotation, ${reference}, ${party.tradingName}`,
  });
  try {
    doc.setLanguage("en-IN");
    doc.viewerPreferences({ DisplayDocTitle: true });
  } catch {
    // Optional plugins; the document is complete without them.
  }

  const cur = createCursor(doc, () => {});

  // ---- Hero ---------------------------------------------------------------
  drawHero(doc, T, {
    party,
    logo,
    clientName: quote.clientName,
    clientBusinessname: quote.businessName,
    note: quote.projectName,
    title: ["Project", "Quotation"],
    eyebrow: "Price quotation  ·  Not a tax invoice",
    pill: pct ? `Offer  ·  ${pct}% off` : "Quotation",
    cells: [
      ["Quotation no.", reference, 1.3],
      ["Issued", dates.short, 1],
      ["Valid until", validShort, 1],
      ["Delivery", `${days} working day${days === 1 ? "" : "s"}`, 1.1],
    ],
  });
  cur.y = HERO.y + HERO.h + 36;

  // ---- Preamble -----------------------------------------------------------
  const lede = layoutText(
    T,
    [
      { text: "Thank you for considering " },
      { text: party.tradingName, weight: "medium", color: C.ink },
      { text: ". This quotation sets out the scope, investment and terms for " },
      { text: quote.projectName, weight: "medium", color: C.ink },
      { text: ", prepared for " },
      { text: client, weight: "medium", color: C.ink },
      { text: ". The prices below are held until " },
      { text: validLong, weight: "medium", color: C.ink },
      { text: "." },
    ],
    CONTENT_W,
    10.2,
  );
  drawText(doc, T, lede, M.left, cur.y, 15.5, { justify: true, color: C.slate700 });
  cur.advance((lede.lines.length - 1) * 15.5 + 20);

  cur.place(
    pricingBlock(doc, T, { mrp, offer, saving, pct, days, validLabel: validLong, pkgName }),
  );

  // ---- Lists --------------------------------------------------------------
  const sections = [];
  if (quote.scope.length) {
    sections.push({
      title: "Project Scope",
      rows: scopeRows(doc, T, { items: quote.scope, pkgName, recurringNote: quote.recurringNote }),
      card: { fill: C.brand50, stroke: C.mintLine, padTop: 16, padBottom: 8 },
    });
  }
  if (quote.paymentPolicy.length) {
    sections.push({
      title: "Payment Policy",
      rows: paymentRows(doc, T, quote.paymentPolicy),
      card: { fill: C.white, stroke: C.hair, padTop: 5, padBottom: 5 },
    });
  }
  if (quote.terms.length) {
    sections.push({
      title: "Terms & Conditions",
      rows: termRows(doc, T, quote.terms),
      card: { gap: 12 },
    });
  }

  const total = pad2(sections.length + 1);
  sections.forEach((section, i) => {
    sectionHeading(doc, T, cur, pad2(i + 1), total, section.title, leadHeight(section.rows, section.card));
    placeCard(doc, cur, section.rows, section.card);
  });

  // ---- Sign-off -----------------------------------------------------------
  const signOff = signOffBlock(doc, T, {
    party,
    signatory: quote.signatory,
    signature,
    nextSteps,
    dates,
    reference,
    logo,
  });
  sectionHeading(doc, T, cur, total, total, "Authorised By", signOff.height);
  cur.place(signOff);

  const safeName = (client || "client")
    .trim()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return {
    doc,
    reference,
    filename: `wepzite-quotation-${safeName || "client"}-${reference}.pdf`,
  };
}
