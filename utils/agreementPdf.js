"use client";

/**
 * Builds the signed client agreement as a real PDF.
 *
 * Drawn with jsPDF's text API rather than rasterising the page: a contract
 * needs selectable, searchable, copy-pasteable text that stays sharp at any
 * zoom. A screenshot-to-PDF would look identical on screen and be useless the
 * moment anyone needs to quote a clause from it.
 *
 * TYPE SYSTEM — three of the standard PDF core fonts, so nothing is embedded
 * and the file stays small:
 *   times     body copy, the preamble and clause text, and the signature mark.
 *             A serif reads as a contract; Helvetica reads as a dashboard.
 *   helvetica structural furniture — labels, section titles, table keys.
 *   courier   reference codes and money, where figures must line up and a
 *             1 must never be mistaken for an l.
 *
 * jsPDF is imported lazily by the caller so ~150KB of PDF machinery never
 * lands in the bundle of a page nobody has asked to download from yet.
 */

// A4 in points, jsPDF's default unit for this format.
const PAGE = { w: 595.28, h: 841.89 };
const M = { left: 54, right: 54, top: 54, bottom: 66 };
const CONTENT_W = PAGE.w - M.left - M.right;

const BAND_H = 104; // cover band on page one
const RUN_H = 46; // running header on continuation pages

// Palette lifted from globals.css so the document and the site agree.
const C = {
  ink: [15, 23, 42], // slate-900
  navy: [8, 13, 28], // deeper than slate-950, so the band reads as paper stock
  brand: [41, 144, 82], // --color-brand-600
  brandLight: [60, 190, 112], // --color-brand-500
  body: [71, 85, 105], // slate-600
  muted: [100, 116, 139], // slate-500
  faint: [148, 163, 184], // slate-400
  hair: [226, 232, 240], // slate-200
  hairSoft: [241, 245, 249], // slate-100
  panel: [248, 250, 252], // slate-50
  onDark: [255, 255, 255],
  onDarkMuted: [148, 163, 184],
};

const INR = (n) =>
  typeof n === "number" && Number.isFinite(n)
    ? n.toLocaleString("en-IN")
    : String(n ?? "");

// --- small drawing helpers -------------------------------------------------

function hairline(doc, y, x1 = M.left, x2 = PAGE.w - M.right, color = C.hair, w = 0.6) {
  doc.setDrawColor(...color);
  doc.setLineWidth(w);
  doc.line(x1, y, x2, y);
}

/** Tracked uppercase micro-label, the workhorse of the document's furniture. */
function microLabel(doc, text, x, y, { color = C.faint, size = 6.8, align } = {}) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size);
  doc.setTextColor(...color);
  doc.text(String(text).toUpperCase(), x, y, { charSpace: 0.9, align });
}

/**
 * Layout cursor. Every block asks it for vertical space, and it breaks the
 * page when a block will not fit — which is what keeps a 13-clause document
 * from running off the bottom of page one.
 */
function createCursor(doc, drawRunningHeader) {
  let y = M.top;
  let page = 1;

  return {
    get y() {
      return y;
    },
    get page() {
      return page;
    },
    set y(next) {
      y = next;
    },
    advance(dy) {
      y += dy;
    },
    /**
     * Break if `needed` points will not fit above the bottom margin.
     *
     * Saves and restores the caller's font state around the break. The running
     * header sets its own fonts and colours, and callers routinely measure text
     * (setFont + splitTextToSize), then ensure(), then draw — so without this a
     * block that happens to land on a page boundary renders in the header's
     * font instead of its own.
     */
    ensure(needed) {
      if (y + needed <= PAGE.h - M.bottom) return false;

      const font = doc.getFont();
      const size = doc.getFontSize();
      const color = doc.getTextColor();

      doc.addPage();
      page += 1;
      drawRunningHeader(doc);
      y = M.top + RUN_H;

      doc.setFont(font.fontName, font.fontStyle);
      doc.setFontSize(size);
      doc.setTextColor(color);
      return true;
    },
  };
}

// --- document furniture ----------------------------------------------------

function coverBand(doc, party, reference, logo) {
  doc.setFillColor(...C.navy);
  doc.rect(0, 0, PAGE.w, BAND_H, "F");

  // Emerald hairline seals the band — the one place the accent runs full bleed.
  doc.setFillColor(...C.brand);
  doc.rect(0, BAND_H - 2, PAGE.w, 2, "F");

  let textX = M.left;

  if (logo?.dataUrl) {
    const size = 34;
    const y = 30;
    // White tile behind the mark so the logo's own ground never fights the band.
    doc.setFillColor(...C.onDark);
    doc.roundedRect(M.left - 3, y - 3, size + 6, size + 6, 6, 6, "F");
    try {
      doc.addImage(logo.dataUrl, logo.format || "PNG", M.left, y, size, size);
    } catch {
      // A bad data URL must not cost the client their contract.
    }
    textX = M.left + size + 16;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(17);
  doc.setTextColor(...C.onDark);
  doc.text(party.tradingName.toUpperCase(), textX, 48, { charSpace: 2.6 });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.4);
  doc.setTextColor(...C.onDarkMuted);
  doc.text(party.legalName, textX, 62, { charSpace: 0.4 });

  // Right rail — document type and reference.
  microLabel(doc, "Client Service Agreement", PAGE.w - M.right, 44, {
    color: C.brandLight,
    size: 8,
    align: "right",
  });

  microLabel(doc, "Reference", PAGE.w - M.right, 60, { color: C.onDarkMuted, size: 6, align: "right" });

  doc.setFont("courier", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...C.onDark);
  doc.text(reference, PAGE.w - M.right, 72, { align: "right" });
}

/** Compact brand line repeated at the top of every page after the first. */
function makeRunningHeader(party, reference) {
  return (doc) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...C.ink);
    doc.text(party.tradingName.toUpperCase(), M.left, M.top + 4, { charSpace: 1.6 });

    microLabel(doc, "Client Service Agreement", M.left + 92, M.top + 4, {
      color: C.faint,
      size: 6.4,
    });

    doc.setFont("courier", "normal");
    doc.setFontSize(7.4);
    doc.setTextColor(...C.muted);
    doc.text(reference, PAGE.w - M.right, M.top + 4, { align: "right" });

    hairline(doc, M.top + 14, M.left, PAGE.w - M.right, C.hair, 0.6);
    doc.setFillColor(...C.brand);
    doc.rect(M.left, M.top + 13.7, 44, 1.6, "F");
  };
}

/** Reference / Date / Provider / Jurisdiction strip, mirroring the web page. */
function metaStrip(doc, cur, rows) {
  const h = 40;
  cur.ensure(h + 14);

  const colW = CONTENT_W / rows.length;

  doc.setDrawColor(...C.hair);
  doc.setLineWidth(0.6);
  doc.rect(M.left, cur.y, CONTENT_W, h);

  rows.forEach(([key, value], i) => {
    const x = M.left + i * colW;
    if (i > 0) {
      doc.setDrawColor(...C.hair);
      doc.line(x, cur.y, x, cur.y + h);
    }
    microLabel(doc, key, x + 10, cur.y + 15, { size: 6 });

    const mono = key === "Reference";
    doc.setFont(mono ? "courier" : "helvetica", "bold");
    doc.setFontSize(mono ? 8.2 : 8.6);
    doc.setTextColor(...C.ink);
    doc.text(doc.splitTextToSize(String(value), colW - 20)[0], x + 10, cur.y + 29);
  });

  cur.advance(h + 22);
}

/** The three figures every party turns to first, given their own panel. */
function financialPanel(doc, cur, { total, advance, balance }) {
  const h = 62;
  cur.ensure(h + 18);

  doc.setFillColor(...C.panel);
  doc.setDrawColor(...C.hair);
  doc.setLineWidth(0.6);
  doc.roundedRect(M.left, cur.y, CONTENT_W, h, 4, 4, "FD");

  // Emerald spine marks this as the summary block.
  doc.setFillColor(...C.brand);
  doc.rect(M.left, cur.y + 1, 2.4, h - 2, "F");

  const cells = [
    ["Total project value", total, false],
    ["Advance paid", advance, false],
    ["Balance due on delivery", balance, true],
  ];
  const colW = (CONTENT_W - 20) / 3;

  cells.forEach(([key, value, emphasise], i) => {
    const x = M.left + 20 + i * colW;
    if (i > 0) hairline(doc, cur.y + 14, x - 14, x - 14, C.hair); // no-op guard
    if (i > 0) {
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.6);
      doc.line(x - 14, cur.y + 14, x - 14, cur.y + h - 14);
    }

    microLabel(doc, key, x, cur.y + 24, { size: 6 });

    doc.setFont("courier", "bold");
    doc.setFontSize(emphasise ? 14 : 12);
    doc.setTextColor(...(emphasise ? C.brand : C.ink));
    doc.text(`INR ${INR(value)}`, x, cur.y + 44);
  });

  cur.advance(h + 24);
}

/**
 * @param {number} [keepWith]  extra height that must fit below the heading.
 *                             Pass the height of the block that follows so a
 *                             heading never strands itself at the foot of a
 *                             page with its content overleaf.
 */
function sectionHeading(doc, cur, n, title, keepWith = 0) {
  cur.ensure(52 + keepWith);
  cur.advance(6);

  // Filled chip carrying the section number.
  const s = 15;
  doc.setFillColor(...C.ink);
  doc.roundedRect(M.left, cur.y - 11, s, s, 2.5, 2.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.6);
  doc.setTextColor(...C.onDark);
  doc.text(n, M.left + s / 2, cur.y - 0.5, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...C.ink);
  doc.text(title.toUpperCase(), M.left + s + 11, cur.y, { charSpace: 1.3 });

  cur.advance(11);
  hairline(doc, cur.y, M.left, PAGE.w - M.right, C.hair, 0.8);
  doc.setFillColor(...C.brand);
  doc.rect(M.left, cur.y - 0.4, 30, 1.8, "F");
  cur.advance(20);
}

/** Two-column key/value row, wrapping the value when it is long. */
function field(doc, cur, key, value, { mono = false } = {}) {
  const valueText = String(value ?? "").trim() || "—";
  const keyW = 148;
  const valueW = CONTENT_W - keyW;

  doc.setFont(mono ? "courier" : "times", "bold");
  doc.setFontSize(mono ? 9.5 : 10.5);
  const lines = doc.splitTextToSize(valueText, valueW);
  const blockH = Math.max(lines.length * 13, 15);

  cur.ensure(blockH + 12);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...C.muted);
  doc.text(key, M.left, cur.y);

  doc.setFont(mono ? "courier" : "times", "bold");
  doc.setFontSize(mono ? 9.5 : 10.5);
  doc.setTextColor(...C.ink);
  doc.text(lines, M.left + keyW, cur.y);

  cur.advance(blockH + 7);
  hairline(doc, cur.y - 4, M.left, PAGE.w - M.right, C.hairSoft, 0.5);
  cur.advance(7);
}

function clause(doc, cur, n, title, body, isLast) {
  doc.setFont("times", "normal");
  doc.setFontSize(9.8);
  const lines = doc.splitTextToSize(body, CONTENT_W - 34);
  const blockH = 14 + lines.length * 12 + (isLast ? 6 : 14);

  cur.ensure(blockH);

  doc.setFont("courier", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...C.brand);
  doc.text(n, M.left, cur.y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.6);
  doc.setTextColor(...C.ink);
  doc.text(title, M.left + 34, cur.y);
  cur.advance(13);

  doc.setFont("times", "normal");
  doc.setFontSize(9.8);
  doc.setTextColor(...C.body);
  doc.text(lines, M.left + 34, cur.y);
  cur.advance(lines.length * 12 + 6);

  if (!isLast) {
    hairline(doc, cur.y, M.left + 34, PAGE.w - M.right, C.hairSoft, 0.5);
    cur.advance(8);
  }
}

/** Bordered signature box — the typed name set as a serif italic mark. */
function signatureBox(doc, x, y, w, { mark, label, name, meta }) {
  const h = 96;

  doc.setDrawColor(...C.hair);
  doc.setLineWidth(0.6);
  doc.roundedRect(x, y, w, h, 4, 4, "D");

  microLabel(doc, label, x + 14, y + 18, { size: 6 });

  doc.setFont("times", "bolditalic");
  doc.setFontSize(17);
  doc.setTextColor(...C.ink);
  doc.text(doc.splitTextToSize(mark, w - 28)[0], x + 14, y + 48);

  hairline(doc, y + 56, x + 14, x + w - 14, C.hair, 0.6);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.4);
  doc.setTextColor(...C.ink);
  doc.text(doc.splitTextToSize(name, w - 28)[0], x + 14, y + 70);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.4);
  doc.setTextColor(...C.muted);
  doc.text(doc.splitTextToSize(meta, w - 28)[0], x + 14, y + 83);

  return h;
}

function footers(doc, party, reference) {
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i += 1) {
    doc.setPage(i);
    const y = PAGE.h - 42;

    hairline(doc, y, M.left, PAGE.w - M.right, C.hair, 0.6);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.8);
    doc.setTextColor(...C.muted);
    doc.text(
      `${party.legalName}   ·   ${party.whatsapp}   ·   ${party.email}`,
      M.left,
      y + 14,
    );

    const pageLabel = `Page ${i} of ${total}`;
    doc.setFont("courier", "normal");
    doc.setFontSize(6.8);
    doc.text(pageLabel, PAGE.w - M.right, y + 14, { align: "right" });

    const pageW = doc.getTextWidth(pageLabel);
    doc.text(reference, PAGE.w - M.right - pageW - 14, y + 14, { align: "right" });

    const refW = doc.getTextWidth(reference);
    microLabel(doc, "Confidential", PAGE.w - M.right - pageW - refW - 44, y + 14, {
      size: 5.8,
      color: C.faint,
      align: "right",
    });
  }
}

/**
 * @param {object}   args
 * @param {Function} args.jsPDF   the constructor, passed in by the caller so
 *                                this module holds no static import of it
 * @param {object}   args.form    the submitted form values
 * @param {object}   args.pkg     the selected package from data/packages.js
 * @param {object}   args.party   legal party details
 * @param {Array}    args.terms   the clause list
 * @param {object}  [args.logo]   { dataUrl, format } brand mark, optional —
 *                                the header falls back to type alone without it
 * @returns {{ doc: object, filename: string, reference: string }}
 */
export function buildAgreementPdf({ jsPDF, form, pkg, party, terms, logo }) {
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  const reference = form.reference;
  const runningHeader = makeRunningHeader(party, reference);
  const cur = createCursor(doc, runningHeader);

  const signedAt = new Date();
  const longDate = signedAt.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const shortDate = signedAt.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  doc.setProperties({
    title: `Client Service Agreement — ${form.fullName}`,
    subject: `${party.tradingName} client service agreement (${reference})`,
    author: party.legalName,
    creator: party.legalName,
    keywords: `agreement, ${reference}, ${party.tradingName}`,
  });

  // ---- Cover band ---------------------------------------------------------
  coverBand(doc, party, reference, logo);
  cur.y = BAND_H + 30;

  metaStrip(doc, cur, [
    ["Reference", reference],
    ["Date", shortDate],
    ["Provider", party.tradingName],
    ["Jurisdiction", party.jurisdiction],
  ]);

  // ---- Preamble -----------------------------------------------------------
  doc.setFont("times", "normal");
  doc.setFontSize(10.2);
  doc.setTextColor(...C.body);
  const preamble = doc.splitTextToSize(
    `This agreement is made on ${longDate} between ${party.legalName} (“the Service Provider”) and ${
      form.businessName || form.fullName
    } (“the Client”), and is governed by ${party.governingLaw}. The Client has read the Service Agreement Terms set out in section 03 and accepted them electronically.`,
    CONTENT_W,
  );
  doc.text(preamble, M.left, cur.y);
  cur.advance(preamble.length * 12.6 + 16);

  // ---- Financial summary --------------------------------------------------
  financialPanel(doc, cur, {
    total: form.totalValue,
    advance: form.advancePaid,
    balance: form.balance,
  });

  // ---- 01 Client details --------------------------------------------------
  sectionHeading(doc, cur, "01", "Client Details");
  field(doc, cur, "Full name", form.fullName);
  field(doc, cur, "Business name", form.businessName);
  field(doc, cur, "Phone / WhatsApp", form.phone, { mono: true });
  field(doc, cur, "Email address", form.email);
  field(doc, cur, "Full address", form.address);

  // ---- 02 Project details -------------------------------------------------
  sectionHeading(doc, cur, "02", "Project Details");
  field(doc, cur, "Selected package", pkg ? pkg.name.trim() : form.packageId);
  if (form.customScope?.trim()) field(doc, cur, "Custom scope", form.customScope);
  field(doc, cur, "Payment reference / UTR", form.paymentRef, { mono: true });
  field(doc, cur, "Delivery timeline", form.timeline);

  // Published inclusions are the contractual scope clause 01 points at, so
  // they travel with the signed document rather than living only on the site.
  if (pkg?.features?.length) {
    cur.ensure(46);
    cur.advance(6);
    microLabel(doc, "Package inclusions", M.left, cur.y, { size: 6.4, color: C.muted });
    cur.advance(14);

    const colW = (CONTENT_W - 18) / 2;
    let col = 0;
    let rowTop = cur.y;
    let rowH = 0;

    for (const feature of pkg.features) {
      doc.setFont("times", "normal");
      doc.setFontSize(9);
      const lines = doc.splitTextToSize(feature, colW - 14);
      const h = lines.length * 11 + 3;

      if (col === 0) {
        if (cur.ensure(h + 2)) rowTop = cur.y;
        else rowTop = cur.y;
        rowH = h;
      } else {
        rowH = Math.max(rowH, h);
      }

      const x = M.left + col * (colW + 18);
      doc.setFillColor(...C.brand);
      doc.circle(x + 2.6, rowTop - 3, 1.5, "F");
      doc.setFont("times", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...C.body);
      doc.text(lines, x + 10, rowTop);

      if (col === 1) {
        cur.y = rowTop + rowH;
        col = 0;
      } else {
        col = 1;
      }
    }
    if (col === 1) cur.y = rowTop + rowH;

    if (pkg.recurringNote) {
      cur.advance(8);
      const rec = doc.splitTextToSize(pkg.recurringNote, CONTENT_W - 14);
      cur.ensure(rec.length * 11 + 6);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.4);
      doc.setTextColor(...C.ink);
      doc.text(rec, M.left, cur.y);
      cur.advance(rec.length * 11);
    }
    cur.advance(10);
  }

  // ---- 03 Terms -----------------------------------------------------------
  sectionHeading(doc, cur, "03", "Service Agreement Terms");
  terms.forEach((t, i) =>
    clause(doc, cur, t.n, t.title, t.body, i === terms.length - 1),
  );

  // ---- 04 Authorisation ---------------------------------------------------
  // Measured before the heading is drawn: heading, acknowledgement and both
  // signature boxes travel together or move to the next page together. A
  // contract whose signature block is orphaned from its heading looks broken.
  doc.setFont("times", "normal");
  doc.setFontSize(9.4);
  const ack = doc.splitTextToSize(
    "The Client confirms they have read the Service Agreement Terms above in full and agree to be bound by them. This agreement was accepted electronically; digital signatures are recognised under the Information Technology Act, 2000.",
    CONTENT_W,
  );
  const ackH = ack.length * 12 + 22;
  sectionHeading(doc, cur, "04", "Authorization", ackH + 110);

  doc.setFont("times", "normal");
  doc.setFontSize(9.4);
  doc.setTextColor(...C.body);
  doc.text(ack, M.left, cur.y);
  cur.advance(ackH);

  const boxW = (CONTENT_W - 18) / 2;
  const boxH = signatureBox(doc, M.left, cur.y, boxW, {
    label: "Client signature",
    mark: form.signature,
    name: form.businessName || form.fullName,
    meta: `Signed electronically · ${shortDate}`,
  });
  signatureBox(doc, M.left + boxW + 18, cur.y, boxW, {
    label: `For and on behalf of ${party.tradingName}`,
    mark: party.tradingName,
    name: party.legalName,
    meta: `Jurisdiction · ${party.jurisdiction}`,
  });
  cur.advance(boxH + 6);

  footers(doc, party, reference);

  const safeName = (form.fullName || "client")
    .trim()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return {
    doc,
    reference,
    filename: `wepzite-agreement-${safeName}-${reference}.pdf`,
  };
}
