"use client";

/**
 * Builds the signed client agreement as a real PDF.
 *
 * Drawn with jsPDF's vector API rather than rasterising the page: a contract
 * needs selectable, searchable, copy-pasteable text that stays sharp at any
 * zoom. The hero gradient, its glow and the ∞ contours are vector too — the
 * gradient is a native PDF shading — so the cover prints as cleanly as the type.
 *
 * TYPE — Space Grotesk, the site's own face. The caller fetches the three
 * static weights from public/fonts and passes them in; jsPDF subsets each one
 * down to the glyphs actually used, so the file stays small. If any weight is
 * missing the whole document falls back to Helvetica, because one consistent
 * fallback reads better than a mix.
 *
 * jsPDF is imported lazily by the caller so ~150KB of PDF machinery never
 * lands in the bundle of a page nobody has asked to download from yet.
 */

// A4 in points, jsPDF's default unit for this format.
const PAGE = { w: 595.28, h: 841.89 };
// Top and bottom match the sides because pages carry no running header or
// footer. Re-enabling drawRunningHeader / drawFooters needs top 96, bottom 76.
const M = { left: 52, right: 52, top: 52, bottom: 56 };
const CONTENT_W = PAGE.w - M.left - M.right;
const RIGHT = PAGE.w - M.right;

// The page-one hero is inset from the paper edge so its rounded corners read
// as a card, and its 24pt inner padding lands the text on the body's margin.
const HERO = { x: 28, y: 28, w: PAGE.w - 56, h: 288, r: 22 };
const HEADING_H = 46;

// Brand values lifted from the @theme block in globals.css, so the document
// and the site agree. `forest` is the one addition: a shade deeper than
// brand-700 for the shadow end of the gradients, so white type holds contrast.
const C = {
  ink: [15, 23, 42], // slate-900
  slate700: [51, 65, 85],
  body: [71, 85, 105], // slate-600
  muted: [100, 116, 139], // slate-500
  faint: [148, 163, 184], // slate-400
  hair: [226, 232, 240], // slate-200
  hairSoft: [241, 245, 249], // slate-100
  panel: [248, 250, 252], // slate-50
  white: [255, 255, 255],
  brand50: [242, 251, 245], // --color-brand-50
  brand100: [148, 225, 178], // --color-brand-100
  brand200: [93, 203, 137], // --color-brand-200
  brand500: [60, 190, 112], // --color-brand-500
  brand600: [41, 144, 82], // --color-brand-600
  brand700: [35, 114, 67], // --color-brand-700
  mintLine: [214, 240, 224], // border for brand-50 surfaces
  forest: [18, 66, 40],
  forestDeep: [6, 34, 20],
  onBrandMuted: [200, 232, 212], // secondary copy on emerald — a real colour, not white at reduced opacity
  signature: [30, 41, 59], // slate-800, reads as ink on paper
};

const INR = (n) =>
  typeof n === "number" && Number.isFinite(n)
    ? n.toLocaleString("en-IN")
    : String(n ?? "");

// --- type ------------------------------------------------------------------

const WEIGHTS = ["Regular", "Medium", "Bold"];

/** Registers the embedded weights, or returns the Helvetica fallback set. */
function registerFonts(doc, fonts) {
  const fallback = {
    embedded: false,
    regular: ["helvetica", "normal"],
    medium: ["helvetica", "bold"],
    bold: ["helvetica", "bold"],
  };
  if (!fonts || WEIGHTS.some((w) => !fonts[w.toLowerCase()])) return fallback;

  try {
    const faces = { embedded: true };
    for (const weight of WEIGHTS) {
      const key = weight.toLowerCase();
      const file = `SpaceGrotesk-${weight}.ttf`;
      doc.addFileToVFS(file, fonts[key]);
      doc.addFont(file, `SpaceGrotesk-${weight}`, "normal");
      faces[key] = [`SpaceGrotesk-${weight}`, "normal"];
    }
    // Measure with every face once, so a corrupt file fails here — where the
    // document can still fall back — rather than halfway through a page.
    for (const weight of WEIGHTS) {
      doc.setFont(...faces[weight.toLowerCase()]);
      doc.getTextWidth("Wepzite ₹");
    }
    return faces;
  } catch {
    return fallback;
  }
}

/**
 * Every piece of type goes through this kit, so weights are named once and
 * the Helvetica fallback can swap out glyphs the core fonts cannot encode.
 */
function typeKit(doc, faces) {
  const kit = {
    set(weight, size, color) {
      doc.setFont(...faces[weight]);
      doc.setFontSize(size);
      if (color) doc.setTextColor(...color);
    },

    width(value, weight, size) {
      kit.set(weight, size);
      return doc.getTextWidth(String(value));
    },

    /** Substitutes glyphs the core fonts lack; leaves whitespace alone. */
    glyphs(value) {
      const s = String(value ?? "");
      return faces.embedded ? s : s.replace(/₹\s?/g, "INR ").replace(/↔/g, "-");
    },

    clean(value) {
      return kit.glyphs(String(value ?? "").replace(/\s+/g, " ").trim());
    },

    rupee(n) {
      return faces.embedded ? `₹${INR(n)}` : `INR ${INR(n)}`;
    },

    lines(value, weight, size, maxW) {
      kit.set(weight, size);
      return doc.splitTextToSize(kit.clean(value) || "—", maxW);
    },

    /** Truncates with an ellipsis to fit `maxW`. */
    fit(value, weight, size, maxW) {
      let s = kit.clean(value) || "—";
      if (kit.width(s, weight, size) <= maxW) return s;
      while (s.length > 1 && kit.width(`${s}…`, weight, size) > maxW) s = s.slice(0, -1);
      return `${s.trimEnd()}…`;
    },

    trackedWidth(value, { weight = "medium", size = 6.4, cs = 1 } = {}) {
      const s = String(value).toUpperCase();
      return kit.width(s, weight, size) + cs * (s.length - 1);
    },

    /**
     * Tracked uppercase micro-label, the workhorse of the document furniture.
     * Alignment is resolved here rather than by jsPDF, whose width maths does
     * not account for character spacing.
     */
    tracked(value, x, y, { weight = "medium", size = 6.4, color = C.muted, cs = 1, align = "left" } = {}) {
      const s = String(value).toUpperCase();
      const w = kit.trackedWidth(s, { weight, size, cs });
      const x0 = align === "right" ? x - w : align === "center" ? x - w / 2 : x;
      kit.set(weight, size, color);
      doc.text(s, x0, y, { charSpace: cs });
      return w;
    },
  };
  return kit;
}

/**
 * Lays out mixed-weight prose into lines. Runs are { text, weight, color };
 * a run that starts without whitespace glues onto the previous word, so a
 * medium-weight name followed by a regular-weight comma stays one word.
 */
function layoutText(T, runs, maxW, size) {
  const words = [];
  let current = null;

  for (const run of runs) {
    const weight = run.weight || "regular";
    for (const part of T.glyphs(run.text).split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        current = null;
        continue;
      }
      if (!current) {
        current = { pieces: [], w: 0 };
        words.push(current);
      }
      const w = T.width(part, weight, size);
      current.pieces.push({ text: part, weight, color: run.color, w });
      current.w += w;
    }
  }

  // Break points are chosen the way TeX chooses them, minus hyphenation: the
  // whole paragraph is solved at once for the least total badness, where a
  // line's badness grows with the cube of how far its spaces must stretch.
  // Greedy filling leaves a loose line beside a tight one; this spreads the
  // slack evenly, so every justified line has near-identical word spacing.
  const space = T.width(" ", "regular", size);
  const n = words.length;
  const best = new Array(n + 1).fill(Infinity);
  const next = new Array(n + 1).fill(n);
  best[n] = 0;

  for (let i = n - 1; i >= 0; i -= 1) {
    let w = -space;
    for (let j = i; j < n; j += 1) {
      w += space + words[j].w;
      if (w > maxW && j > i) break;
      const gaps = j - i;
      let badness;
      if (j === n - 1) badness = i > 0 && w < maxW * 0.2 ? 40 : 0; // discourage a one-word stub
      else if (w > maxW) badness = 0; // a single word wider than the line: unavoidable
      else if (gaps === 0) badness = 1e4;
      else badness = 100 * ((maxW - w) / (gaps * space)) ** 3;
      if (badness + best[j + 1] < best[i]) {
        best[i] = badness + best[j + 1];
        next[i] = j + 1;
      }
    }
  }

  const lines = [];
  for (let i = 0; i < n; i = next[i]) {
    const lineWords = words.slice(i, next[i]);
    const w = lineWords.reduce((sum, word) => sum + word.w, 0) + space * (lineWords.length - 1);
    lines.push({ words: lineWords, w });
  }

  return { lines, space, size, maxW };
}

/**
 * Draws a layout from layoutText. Justified lines are set word by word with
 * the slack shared between the gaps; the last line of a paragraph stays
 * ragged, as does any line the breaker could not save from opening rivers.
 * Ragged lines are drawn as whole runs so they copy out as clean sentences.
 */
function drawText(doc, T, layout, x, y, leading, { justify = false, color = C.body } = {}) {
  layout.lines.forEach((line, i) => {
    const baseline = y + i * leading;
    const gaps = line.words.length - 1;
    const isLast = i === layout.lines.length - 1;
    const stretch = gaps > 0 ? (layout.maxW - line.w) / gaps : 0;
    const justified = justify && !isLast && gaps > 0 && stretch < layout.space * 2;

    let cx = x;
    if (justified) {
      for (const word of line.words) {
        for (const piece of word.pieces) {
          T.set(piece.weight, layout.size, piece.color || color);
          doc.text(piece.text, cx, baseline);
          cx += piece.w;
        }
        cx += layout.space + stretch;
      }
      return;
    }

    const segments = [];
    line.words.forEach((word, wi) => {
      word.pieces.forEach((piece, pi) => {
        const prev = segments[segments.length - 1];
        const lead = wi > 0 && pi === 0 ? " " : "";
        if (prev && prev.weight === piece.weight && prev.color === piece.color) {
          prev.text += lead + piece.text;
        } else {
          if (prev) prev.text += lead;
          segments.push({ text: piece.text, weight: piece.weight, color: piece.color });
        }
      });
    });
    for (const seg of segments) {
      T.set(seg.weight, layout.size, seg.color || color);
      doc.text(seg.text, cx, baseline);
      cx += doc.getTextWidth(seg.text);
    }
  });
}

// --- graphics --------------------------------------------------------------

/** Sets fill and stroke opacity. Always call alpha(doc, 1) when done. */
function alpha(doc, fill, stroke = fill) {
  doc.setGState(new doc.GState({ opacity: fill, "stroke-opacity": stroke }));
}

function hairline(doc, x1, y, x2, color = C.hair, w = 0.6) {
  doc.setDrawColor(...color);
  doc.setLineWidth(w);
  doc.line(x1, y, x2, y);
}

/**
 * Fills a path with a native PDF shading. Shadings only exist in jsPDF's
 * "advanced" API, whose coordinates are still top-left based, so the path is
 * built inside that mode. Each fill registers its own pattern, since a
 * shading's coordinates are absolute.
 *
 * @param {Function} path   (doc) => builds the path with style null
 * @param {number[]} coords [x1, y1, x2, y2] gradient axis
 * @param {Array}    stops  [[offset, rgb], ...]
 */
function fillGradient(doc, path, coords, stops) {
  doc.advancedAPI((d) => {
    d.__wpzShading = (d.__wpzShading || 0) + 1;
    const key = `wpz-shading-${d.__wpzShading}`;
    d.addShadingPattern(
      key,
      new d.ShadingPattern(
        "axial",
        coords,
        stops.map(([offset, color]) => ({ offset, color })),
      ),
    );
    path(d);
    d.fill({ key, matrix: d.unitMatrix });
  });
}

/** Runs `draw` with everything clipped to a rounded rectangle. */
function clipRoundedRect(doc, x, y, w, h, r, draw) {
  doc.saveGraphicsState();
  doc.roundedRect(x, y, w, h, r, r, null);
  doc.clip();
  doc.discardPath();
  draw();
  alpha(doc, 1);
  doc.restoreGraphicsState();
}

/**
 * A soft radial glow built from stacked translucent discs. PDF shadings
 * cannot fade to transparent, so this is how a glow stays vector. The radii
 * follow sqrt(1 - sqrt(t)), which gives a smooth bell falloff instead of a
 * visible cone, and the per-disc alpha is solved so the centre lands on `peak`.
 */
function glow(doc, cx, cy, r, color, peak, steps = 40) {
  const a = 1 - Math.pow(1 - peak, 1 / steps);
  doc.setFillColor(...color);
  alpha(doc, a, 1);
  for (let i = 0; i < steps; i += 1) {
    doc.circle(cx, cy, r * Math.sqrt(1 - Math.sqrt(i / steps)), "F");
  }
  alpha(doc, 1);
}

/** A dot grid that fades out radially — the site's masked-grid motif. */
function dotField(doc, box, cx, cy, radius, { step = 12, peak = 0.34, dot = 0.75 } = {}) {
  const buckets = new Map();
  for (let gx = box.x + step / 2; gx < box.x + box.w; gx += step) {
    for (let gy = box.y + step / 2; gy < box.y + box.h; gy += step) {
      const d = Math.hypot(gx - cx, (gy - cy) * 1.3) / radius;
      if (d >= 1) continue;
      const o = Math.round(peak * (1 - d * d) ** 2 * 50) / 50;
      if (o < 0.02) continue;
      if (!buckets.has(o)) buckets.set(o, []);
      buckets.get(o).push([gx, gy]);
    }
  }
  doc.setFillColor(...C.white);
  for (const [o, points] of buckets) {
    alpha(doc, o, 1);
    for (const [px, py] of points) doc.circle(px, py, dot, "F");
  }
  alpha(doc, 1);
}

/**
 * Points on a lemniscate of Bernoulli, stretched vertically so its loops
 * match the proportions of the Wepzite ∞ (about 1.5 : 1).
 */
function infinityPoints(cx, cy, halfW, n = 240) {
  const stretch = 1.86;
  const points = [];
  for (let i = 0; i <= n; i += 1) {
    const t = (i / n) * Math.PI * 2;
    const s = Math.sin(t);
    const c = Math.cos(t);
    const den = 1 + s * s;
    points.push([cx + (halfW * c) / den, cy + (halfW * s * c * stretch) / den]);
  }
  return points;
}

function strokePolyline(doc, points) {
  const deltas = points.slice(1).map(([x, y], i) => [x - points[i][0], y - points[i][1]]);
  doc.lines(deltas, points[0][0], points[0][1], [1, 1], "S", false);
}

/** The large ∞ contour motif behind the hero title. */
function infinityRibbon(doc, cx, cy, halfW) {
  doc.setLineCap("round");
  doc.setLineJoin("round");
  doc.setDrawColor(...C.white);

  // One broad, faint stroke carries the logo's own weight...
  alpha(doc, 1, 0.07);
  doc.setLineWidth(halfW * 0.2);
  strokePolyline(doc, infinityPoints(cx, cy, halfW));

  // ...and fine contours either side of it give the shape depth.
  [-2, -1, 0, 1, 2].forEach((k) => {
    alpha(doc, 1, 0.3 - Math.abs(k) * 0.08);
    doc.setLineWidth(0.8);
    strokePolyline(doc, infinityPoints(cx, cy, halfW * (1 + k * 0.13)));
  });

  alpha(doc, 1);
  doc.setLineCap("butt");
  doc.setLineJoin("miter");
}

/**
 * Draws the white ∞ mark centred on (cx, cy). Without the image it strokes a
 * vector ∞ instead, so the header never loses its brand mark entirely.
 */
function drawMark(doc, logo, cx, cy, width) {
  if (logo?.dataUrl) {
    try {
      const { width: iw, height: ih } = doc.getImageProperties(logo.dataUrl);
      const h = (width * ih) / iw;
      // The alias makes every placement reuse one embedded image.
      doc.addImage(logo.dataUrl, logo.format || "PNG", cx - width / 2, cy - h / 2, width, h, "wepzite-mark");
      return;
    } catch {
      // A bad data URL must not cost the client their contract.
    }
  }
  doc.setDrawColor(...C.white);
  doc.setLineWidth(width * 0.11);
  doc.setLineCap("round");
  strokePolyline(doc, infinityPoints(cx, cy, width * 0.44, 120));
  doc.setLineCap("butt");
}

/** Emerald gradient tile carrying the mark — the small-format logo. */
function markTile(doc, logo, x, y, size, radius) {
  fillGradient(
    doc,
    (d) => d.roundedRect(x, y, size, size, radius, radius, null),
    [x, y, x + size, y + size],
    [[0, C.forest], [1, C.brand500]],
  );
  drawMark(doc, logo, x + size / 2, y + size / 2, size * 0.64);
}

function tick(doc, cx, cy, size, color) {
  doc.setDrawColor(...color);
  doc.setLineWidth(size * 0.24);
  doc.setLineCap("round");
  doc.setLineJoin("round");
  doc.lines(
    [
      [size * 0.3, size * 0.3],
      [size * 0.62, -size * 0.66],
    ],
    cx - size * 0.46,
    cy + size * 0.02,
    [1, 1],
    "S",
    false,
  );
  doc.setLineCap("butt");
  doc.setLineJoin("miter");
}

/** Filled circle with a white tick. */
function checkBadge(doc, cx, cy, r) {
  doc.setFillColor(...C.brand500);
  doc.circle(cx, cy, r, "F");
  tick(doc, cx, cy, r * 1.05, C.white);
}

// --- layout ----------------------------------------------------------------

/**
 * Layout cursor. Blocks are { height, gap, draw(top) }: `place` asks for the
 * block's drawn height only, so the trailing gap never forces a page break,
 * then advances past both.
 *
 * A break saves and restores the caller's font state: the running header sets
 * its own fonts and colours, and a caller that measured text before the break
 * must not find itself drawing in the header's font.
 */
function createCursor(doc, onNewPage) {
  let y = M.top;

  const cursor = {
    get y() {
      return y;
    },
    set y(next) {
      y = next;
    },
    advance(dy) {
      y += dy;
    },
    ensure(needed) {
      if (y + needed <= PAGE.h - M.bottom) return false;

      const font = doc.getFont();
      const size = doc.getFontSize();
      const color = doc.getTextColor();

      doc.addPage();
      onNewPage();
      y = M.top;

      doc.setFont(font.fontName, font.fontStyle);
      doc.setFontSize(size);
      doc.setTextColor(color);
      return true;
    },
    place(block, ...args) {
      cursor.ensure(block.height);
      block.draw(y, ...args);
      y += block.height + block.gap;
    },
  };
  return cursor;
}

// --- document furniture ----------------------------------------------------

/**
 * The emerald page-one hero. Its wording defaults to the agreement's; the
 * quotation passes its own title, eyebrow and pill, plus a `note` (the project
 * name) that follows the client on the "Prepared for" line.
 */
function drawHero(
  doc,
  T,
  {
    party,
    logo,
    clientName,
    clientBusinessname,
    cells,
    title = ["Client Service", "Agreement"],
    eyebrow = "Client copy  ·  Signed electronically",
    pill = "Confidential",
    note,
  },
) {
  const { x, y, w, h, r } = HERO;
  const left = M.left;

  // Ground: a diagonal shading from deep forest into brand emerald.
  fillGradient(
    doc,
    (d) => d.roundedRect(x, y, w, h, r, r, null),
    [x, y, x + w, y + h],
    [
      [0, C.forest],
      [0.5, C.brand700],
      [0.82, C.brand600],
      [1, C.brand500],
    ],
  );

  const motifX = x + w * 0.78;
  const motifY = y + h * 0.43;
  clipRoundedRect(doc, x, y, w, h, r, () => {
    glow(doc, x + w * 0.94, y + h * 0.02, 250, C.brand200, 0.5);
    glow(doc, x + w * 0.04, y + h * 1.04, 260, C.forestDeep, 0.5);
    dotField(doc, { x, y, w, h }, motifX, motifY, 215);
    infinityRibbon(doc, motifX, motifY, 112);
  });

  // ---- Brand row: frosted tile, wordmark, confidentiality pill -------------
  const tile = 38;
  const tileY = y + 24;
  doc.setFillColor(...C.white);
  doc.setDrawColor(...C.white);
  doc.setLineWidth(0.7);
  alpha(doc, 0.13, 0.32);
  doc.roundedRect(left, tileY, tile, tile, 11, 11, "FD");
  alpha(doc, 1);
  drawMark(doc, logo, left + tile / 2, tileY + tile / 2, 24);

  T.set("bold", 17, C.white);
  doc.text(party.website || party.tradingName, left + tile + 12, tileY + 17.5, { charSpace: -0.2 });
  T.set("regular", 7.4, C.onBrandMuted);
  doc.text(
    T.clean(party.slogan),
    left + tile + 12,
    tileY + 30,
  );

  const pillLabel = pill;
  const pillTextW = T.trackedWidth(pillLabel, { size: 6.2, cs: 1.2 });
  const pillH = 20;
  const pillW = 24 + pillTextW + 12;
  const pillX = RIGHT - pillW;
  const pillY = tileY + (tile - pillH) / 2;
  doc.setFillColor(...C.forestDeep);
  doc.setDrawColor(...C.white);
  doc.setLineWidth(0.6);
  alpha(doc, 0.22, 0.28);
  doc.roundedRect(pillX, pillY, pillW, pillH, pillH / 2, pillH / 2, "FD");
  alpha(doc, 1);
  doc.setFillColor(...C.brand200);
  alpha(doc, 0.35);
  doc.circle(pillX + 14.5, pillY + pillH / 2, 4, "F");
  alpha(doc, 1);
  doc.circle(pillX + 14.5, pillY + pillH / 2, 2.1, "F");
  T.tracked(pillLabel, pillX + 24, pillY + 12.5, { size: 6.2, cs: 1.2, color: C.white });

  // ---- Title block --------------------------------------------------------
  doc.setDrawColor(...C.brand100);
  doc.setLineWidth(1);
  doc.line(left, y + 95.8, left + 18, y + 95.8);
  T.tracked(eyebrow, left + 26, y + 98, {
    size: 6.6,
    cs: 1.4,
    color: C.brand100,
  });

  // Large type sits optically right of its box; -1.5pt pulls the stems onto
  // the margin the rest of the page hangs from.
  T.set("bold", 36, C.white);
  doc.text(title[0], left - 1.5, y + 141, { charSpace: -0.8 });
  T.set("bold", 36, C.brand100);
  doc.text(title[1], left - 1.5, y + 179, { charSpace: -0.8 });

  const prefix = "Prepared for ";
  const prefixW = T.width(prefix, "regular", 10);
  const room = 380 - prefixW;
  const sep = "  ·  ";
  const sepW = note ? T.width(sep, "regular", 10) : 0;
  // With a note the name keeps at least half the line; the note takes the rest.
  const nameRoom = note
    ? Math.max(room - sepW - T.width(T.clean(note), "medium", 10), room / 2)
    : room;
  const name = T.fit(clientBusinessname || clientName, "medium", 10, nameRoom);
  const nameW = T.width(name, "medium", 10);
  const noteText = note ? T.fit(note, "medium", 10, room - nameW - sepW) : "";
  T.set("regular", 10, C.onBrandMuted);
  doc.text(prefix, left, y + 205);
  T.set("medium", 10, C.white);
  doc.text(name, left + prefixW, y + 205);
  if (note) {
    T.set("regular", 10, C.onBrandMuted);
    doc.text(sep, left + prefixW + nameW, y + 205);
    T.set("medium", 10, C.white);
    doc.text(noteText, left + prefixW + nameW + sepW, y + 205);
  }

  // ---- Meta strip ---------------------------------------------------------
  const stripH = 42;
  const stripY = y + h - 20 - stripH;
  doc.setFillColor(...C.forestDeep);
  doc.setDrawColor(...C.white);
  doc.setLineWidth(0.6);
  alpha(doc, 0.24, 0.16);
  doc.roundedRect(left, stripY, CONTENT_W, stripH, 12, 12, "FD");
  alpha(doc, 1);

  const unit = CONTENT_W / cells.reduce((sum, cell) => sum + cell[2], 0);
  let cx = left;
  cells.forEach(([label, value, share], i) => {
    const cw = unit * share;
    if (i > 0) {
      doc.setDrawColor(...C.white);
      doc.setLineWidth(0.6);
      alpha(doc, 1, 0.16);
      doc.line(cx, stripY + 10, cx, stripY + stripH - 10);
      alpha(doc, 1);
    }
    T.tracked(label, cx + 14, stripY + 16.5, { size: 5.6, cs: 1, color: C.brand100 });
    const fitted = T.fit(value, "medium", 9, cw - 26);
    T.set("medium", 9, C.white);
    doc.text(fitted, cx + 14, stripY + 30.5);
    cx += cw;
  });
}

/** Compact brand line repeated at the top of every page after the first. */
function drawRunningHeader(doc, T, { party, reference, logo }) {
  // const top = 34;
  // markTile(doc, logo, M.left, top, 22, 6.5);

  // T.set("bold", 10, C.ink);
  // doc.text(party.tradingName, M.left + 31, top + 14.6);
  // const nameW = doc.getTextWidth(party.tradingName);

  // doc.setFillColor(...C.faint);
  // doc.circle(M.left + 31 + nameW + 7, top + 11.3, 1, "F");
  // T.set("regular", 8.4, C.muted);
  // doc.text("Client Service Agreement", M.left + 31 + nameW + 14, top + 14.6);

  // const refW = T.width(reference, "medium", 7.8);
  // T.set("medium", 7.8, C.slate700);
  // doc.text(reference, RIGHT - refW, top + 14.6);
  // T.tracked("Ref.", RIGHT - refW - 7, top + 14.4, { size: 5.8, color: C.faint, align: "right" });

  // hairline(doc, M.left, top + 34, RIGHT, C.hair, 0.6);
  // doc.setFillColor(...C.brand500);
  // doc.rect(M.left, top + 33.3, 36, 1.4, "F");
}

/**
 * Numbered section heading.
 *
 * @param {number} [keepWith] height of the block that follows, so a heading
 *                            never strands itself at the foot of a page with
 *                            its content overleaf.
 */
function sectionHeading(doc, T, cur, n, total, title, keepWith = 0) {
  const height = HEADING_H;
  cur.ensure(height + keepWith);
  const top = cur.y;
  const chip = 22;

  fillGradient(
    doc,
    (d) => d.roundedRect(M.left, top, chip, chip, 7, 7, null),
    [M.left, top, M.left + chip, top + chip],
    [[0, C.forest], [1, C.brand500]],
  );
  T.set("bold", 8.4, C.white);
  doc.text(n, M.left + chip / 2, top + 14.2, { align: "center" });

  T.set("bold", 14, C.ink);
  doc.text(title, M.left + chip + 11, top + 15.6, { charSpace: -0.15 });

  T.tracked(`Section ${n} of ${total}`, RIGHT, top + 14.4, {
    size: 5.8,
    cs: 1.1,
    color: C.faint,
    align: "right",
  });

  hairline(doc, M.left, top + 32, RIGHT, C.hair, 0.6);
  doc.setFillColor(...C.brand500);
  doc.rect(M.left, top + 31.3, chip, 1.4, "F");

  cur.y = top + height;
}

/** Total, advance and balance — the three figures every party turns to first. */
function commercialsBlock(doc, T, { total, advance, balance, paymentRef }) {
  const h = 106;

  return {
    height: h,
    gap: 28,
    draw(top) {
      doc.setFillColor(...C.white);
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.7);
      doc.roundedRect(M.left, top, CONTENT_W, h, 16, 16, "FD");

      // Balance tile, inset into the card so the two radii nest.
      const inset = 6;
      const tileW = 184;
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

      T.tracked("Balance due on delivery", tx + 18, ty + 21, { size: 5.6, cs: 1, color: C.brand100 });
      T.set("bold", 25, C.white);
      doc.text(T.rupee(balance), tx + 16.5, ty + 54, { charSpace: -0.5 });
      T.set("regular", 7.4, C.onBrandMuted);
      doc.text("Payable in full before final handover", tx + 18, ty + 76);

      // Two stat columns and a progress bar on the left.
      const lx = M.left + 22;
      const areaW = tx - 22 - lx;
      const colW = areaW / 2;
      [
        ["Total project value", total],
        ["Advance received", advance],
      ].forEach(([label, value], i) => {
        const x = lx + i * colW + (i ? 16 : 0);
        T.tracked(label, x, top + 26, { size: 5.6, cs: 1, color: C.muted });
        T.set("bold", 19, C.ink);
        doc.text(T.rupee(value), x - 0.5, top + 51, { charSpace: -0.35 });
      });
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.6);
      doc.line(lx + colW, top + 18, lx + colW, top + 56);

      const ratio = total > 0 ? Math.min(Math.max(advance / total, 0), 1) : 0;
      // Never round a part-payment up to "100%".
      const pct = advance < total ? Math.min(99, Math.round(ratio * 100)) : 100;
      const barY = top + 66;
      doc.setFillColor(...C.hairSoft);
      doc.roundedRect(lx, barY, areaW, 5, 2.5, 2.5, "F");
      if (ratio > 0) {
        fillGradient(
          doc,
          (d) => d.roundedRect(lx, barY, Math.max(areaW * ratio, 5), 5, 2.5, 2.5, null),
          [lx, barY, lx + areaW, barY],
          [[0, C.brand600], [1, C.brand500]],
        );
      }

      const baseline = barY + 20;
      const pctText = `${pct}% received`;
      const pctW = T.width(pctText, "medium", 7.4);
      T.set("medium", 7.4, C.ink);
      doc.text(pctText, lx, baseline);
      const ofText = "of project value";
      const ofW = T.width(ofText, "regular", 7.4);
      T.set("regular", 7.4, C.muted);
      doc.text(ofText, lx + pctW + 3, baseline);

      const refLabel = "Payment ref. ";
      const refLabelW = T.width(refLabel, "regular", 7.4);
      const ref = T.fit(paymentRef, "medium", 7.4, areaW - pctW - ofW - 20 - refLabelW);
      const refW = T.width(ref, "medium", 7.4);
      T.set("medium", 7.4, C.ink);
      doc.text(ref, lx + areaW - refW, baseline);
      T.set("regular", 7.4, C.muted);
      doc.text(refLabel, lx + areaW - refW - refLabelW, baseline);
    },
  };
}

/** Client and provider side by side, joined by an ampersand. */
function partiesBlock(doc, T, { party, form }) {
  const gap = 18;
  const w = (CONTENT_W - gap) / 2;
  const pad = 16;
  const keyW = 50;
  const valueW = w - pad * 2 - keyW;
  const rowLeading = 10.5;
  const rowGap = 7;

  const cards = [
    {
      label: "Client",
      name: form.businessName || form.fullName,
      rows: [
        ["Signatory", form.fullName],
        ["Phone", form.phone],
        ["Email", form.email],
        ["Address", form.address],
      ],
    },
    {
      label: "Service provider",
      name: party.legalName,
      rows: [
        ["Trading as", party.tradingName],
        ["WhatsApp", party.whatsapp],
        ["Email", party.email],
        ["Jurisdiction", party.jurisdiction],
      ],
    },
  ].map((card) => {
    const nameLines = T.lines(card.name, "bold", 12.5, w - pad * 2).slice(0, 2);
    const rows = card.rows.map(([k, v]) => {
      // A single unbreakable token — usually an email — steps down in size
      // before it is allowed to split mid-word.
      const value = T.clean(v);
      let size = 8.4;
      if (!value.includes(" ")) {
        while (size > 7 && T.width(value, "medium", size) > valueW) size -= 0.2;
      }
      return { k, size, lines: T.lines(value, "medium", size, valueW) };
    });
    const rowsH = rows.reduce((sum, row) => sum + row.lines.length * rowLeading + rowGap, 0);
    return { ...card, nameLines, rows, h: 38 + nameLines.length * 15 + rowsH + 14 };
  });
  const h = Math.max(...cards.map((card) => card.h));

  return {
    height: h,
    gap: 28,
    draw(top) {
      cards.forEach((card, i) => {
        const x = M.left + i * (w + gap);
        doc.setFillColor(...(i === 0 ? C.white : C.panel));
        doc.setDrawColor(...C.hair);
        doc.setLineWidth(0.7);
        doc.roundedRect(x, top, w, h, 14, 14, "FD");

        doc.setFillColor(...(i === 0 ? C.brand500 : C.faint));
        doc.circle(x + pad + 2.2, top + 19.6, 2.2, "F");
        T.tracked(card.label, x + pad + 9, top + 21.8, {
          size: 6,
          cs: 1.1,
          color: i === 0 ? C.brand600 : C.muted,
        });

        let y = top + 42;
        T.set("bold", 12.5, C.ink);
        card.nameLines.forEach((line) => {
          doc.text(line, x + pad, y, { charSpace: -0.1 });
          y += 15;
        });

        hairline(doc, x + pad, y - 5, x + w - pad, C.hair, 0.5);
        y += 11;

        card.rows.forEach((row) => {
          T.set("regular", 7.6, C.muted);
          doc.text(row.k, x + pad, y);
          T.set("medium", row.size, C.ink);
          row.lines.forEach((line, j) => doc.text(line, x + pad + keyW, y + j * rowLeading));
          y += row.lines.length * rowLeading + rowGap;
        });
      });

      const cx = M.left + w + gap / 2;
      const cy = top + 28;
      doc.setFillColor(...C.white);
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.7);
      doc.circle(cx, cy, 11.5, "FD");
      T.set("medium", 10, C.brand600);
      doc.text("&", cx, cy + 3.5, { align: "center" });
    },
  };
}

/** Key/value table ruled in the booktabs manner: heavy top and bottom, light between. */
function detailsBlock(doc, T, rows) {
  const keyW = 150;
  const valueW = CONTENT_W - keyW;
  const leading = 12.5;
  const measured = rows.map(([key, value]) => {
    const lines = T.lines(value, "medium", 9.2, valueW);
    return { key, lines, h: 26 + (lines.length - 1) * leading };
  });

  return {
    height: measured.reduce((sum, row) => sum + row.h, 0),
    gap: 22,
    draw(top) {
      hairline(doc, M.left, top, RIGHT, C.ink, 0.8);
      let y = top;
      measured.forEach((row, i) => {
        const baseline = y + 16.5;
        T.set("regular", 8, C.muted);
        doc.text(row.key, M.left, baseline);
        T.set("medium", 9.2, C.ink);
        row.lines.forEach((line, j) => doc.text(line, M.left + keyW, baseline + j * leading));
        y += row.h;
        if (i < measured.length - 1) hairline(doc, M.left, y, RIGHT, C.hair, 0.5);
      });
      hairline(doc, M.left, y, RIGHT, C.ink, 0.8);
    },
  };
}

/**
 * Published inclusions are the contractual scope clause 01 points at, so they
 * travel with the signed document rather than living only on the site.
 */
function inclusionsBlock(doc, T, pkg, pkgName) {
  const pad = 18;
  const gap = 20;
  const colW = (CONTENT_W - pad * 2 - gap) / 2;
  const leading = 11;

  const items = pkg.features.map((feature) => T.lines(feature, "regular", 8.5, colW - 15));
  const rows = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  const rowHs = rows.map((row) => Math.max(...row.map((lines) => lines.length)) * leading + 6.5);
  const itemsH = rowHs.reduce((a, b) => a + b, 0);

  const noteLines = pkg.recurringNote
    ? T.lines(pkg.recurringNote, "medium", 8.2, CONTENT_W - pad * 2)
    : [];
  const noteH = noteLines.length ? 18 + noteLines.length * 11.5 : 0;
  const h = 50 + itemsH + noteH + 8;

  return {
    height: h,
    gap: 28,
    draw(top) {
      doc.setFillColor(...C.brand50);
      doc.setDrawColor(...C.mintLine);
      doc.setLineWidth(0.7);
      doc.roundedRect(M.left, top, CONTENT_W, h, 14, 14, "FD");

      T.set("bold", 9.6, C.ink);
      doc.text("Package inclusions", M.left + pad, top + 25);
      const countText = T.fit(
        `${pkg.features.length} items  ·  ${pkgName}`,
        "regular",
        7.6,
        CONTENT_W - pad * 2 - 120,
      );
      const countW = T.width(countText, "regular", 7.6);
      T.set("regular", 7.6, C.brand700);
      doc.text(countText, RIGHT - pad - countW, top + 25);
      hairline(doc, M.left + pad, top + 36, RIGHT - pad, C.mintLine, 0.7);

      let y = top + 50;
      rows.forEach((row, ri) => {
        row.forEach((lines, ci) => {
          const x = M.left + pad + ci * (colW + gap);
          checkBadge(doc, x + 4, y + 5.6, 4);
          T.set("regular", 8.5, C.slate700);
          lines.forEach((line, j) => doc.text(line, x + 15, y + 8.6 + j * leading));
        });
        y += rowHs[ri];
      });

      if (noteLines.length) {
        hairline(doc, M.left + pad, y + 2, RIGHT - pad, C.mintLine, 0.7);
        T.set("medium", 8.2, C.brand700);
        noteLines.forEach((line, j) => doc.text(line, M.left + pad, y + 17 + j * 11.5));
      }
    },
  };
}

function clauseBlock(doc, T, term) {
  const railW = 40;
  const leading = 14;
  const layout = layoutText(T, [{ text: term.body }], CONTENT_W - railW, 9.3);
  const height = 30 + (layout.lines.length - 1) * leading;

  return {
    height,
    gap: 14,
    draw(top, isLast) {
      doc.setFillColor(...C.brand50);
      doc.setDrawColor(...C.mintLine);
      doc.setLineWidth(0.6);
      doc.roundedRect(M.left, top, 24, 14.5, 4.5, 4.5, "FD");
      T.set("bold", 7.4, C.brand700);
      doc.text(term.n, M.left + 12, top + 10, { align: "center" });

      T.set("bold", 10, C.ink);
      doc.text(T.clean(term.title), M.left + railW, top + 10.6);
      drawText(doc, T, layout, M.left + railW, top + 25.6, leading, { justify: true, color: C.body });

      if (!isLast) hairline(doc, M.left + railW, top + height + 8, RIGHT, C.hairSoft, 0.7);
    },
  };
}

function signatureCard(doc, T, x, y, w, h, { label, mark, name, meta, signed }) {
  doc.setFillColor(...C.white);
  doc.setDrawColor(...C.hair);
  doc.setLineWidth(0.7);
  doc.roundedRect(x, y, w, h, 14, 14, "FD");

  T.tracked(label, x + 16, y + 23, { size: 5.8, cs: 1.1, color: C.muted });

  if (signed) {
    const text = "E-signed";
    const tw = T.trackedWidth(text, { weight: "bold", size: 5.6, cs: 0.9 });
    const pw = 17 + tw + 8;
    const px = x + w - 14 - pw;
    const py = y + 13.5;
    doc.setFillColor(...C.brand50);
    doc.setDrawColor(...C.mintLine);
    doc.setLineWidth(0.6);
    doc.roundedRect(px, py, pw, 14, 7, 7, "FD");
    tick(doc, px + 11, py + 7, 5.4, C.brand600);
    T.tracked(text, px + 17, py + 9.4, { weight: "bold", size: 5.6, cs: 0.9, color: C.brand700 });
  }

  // A signature is never truncated. The mark steps down in size until the
  // whole typed name fits, and only a name too long even at 11pt wraps.
  const maxW = w - 32;
  const markText = T.clean(mark);
  let markSize = 21;
  // Set explicitly: otherwise whichever label was drawn last decides the face,
  // and the two cards sign in different weights.
  T.set("bold", markSize, C.signature);
  while (markSize > 11 && doc.getTextWidth(markText) > maxW) {
    markSize -= 0.5;
    doc.setFontSize(markSize);
  }
  if (doc.getTextWidth(markText) <= maxW) {
    doc.text(markText, x + 16, y + 66);
  } else {
    doc.text(doc.splitTextToSize(markText, maxW).slice(0, 2), x + 16, y + 56, { lineHeightFactor: 1.1 });
  }

  hairline(doc, x + 16, y + 78, x + w - 16, C.hair, 0.7);

  // The name shrinks before it truncates; it is printed in full in section 01.
  let nameSize = 9.2;
  while (nameSize > 7.6 && T.width(T.clean(name), "bold", nameSize) > maxW) nameSize -= 0.2;
  const nameText = T.fit(name, "bold", nameSize, maxW);
  T.set("bold", nameSize, C.ink);
  doc.text(nameText, x + 16, y + 97);
  const metaText = T.fit(meta, "regular", 7.4, w - 32);
  T.set("regular", 7.4, C.muted);
  doc.text(metaText, x + 16, y + 111);
}

/**
 * Acknowledgement, both signatures and the generation record, measured as
 * one block: a contract whose signature block is orphaned from its heading
 * looks broken.
 */
function authorizationBlock(doc, T, { form, party, dates, reference, logo }) {
  const ack = layoutText(
    T,
    [
      {
        text: "The Client confirms they have read the Service Agreement Terms above in full and agree to be bound by them. This agreement was accepted electronically; digital signatures are recognised under the Information Technology Act, 2000.",
      },
    ],
    CONTENT_W,
    9.4,
  );
  const leading = 14.5;
  const ackH = ack.lines.length * leading + 12;
  const cardH = 124;
  const recordH = 50;
  const gap = 18;

  return {
    height: ackH + cardH + 14 + recordH,
    gap: 0,
    draw(top) {
      drawText(doc, T, ack, M.left, top + 4, leading, { justify: true, color: C.body });

      const cardY = top + ackH;
      const w = (CONTENT_W - gap) / 2;
      signatureCard(doc, T, M.left, cardY, w, cardH, {
        label: "Client",
        mark: form.signature,
        name: form.businessName || form.fullName,
        meta: `Signed electronically  ·  ${dates.stamp}`,
        signed: true,
      });
      signatureCard(doc, T, M.left + w + gap, cardY, w, cardH, {
        label: `For and on behalf of ${party.tradingName}`,
        mark: party.legalName,
        name: party.tradingName,
        meta: `Jurisdiction  ·  ${party.jurisdiction}`,
      });

      const ry = cardY + cardH + 14;
      doc.setFillColor(...C.panel);
      doc.setDrawColor(...C.hair);
      doc.setLineWidth(0.7);
      doc.roundedRect(M.left, ry, CONTENT_W, recordH, 12, 12, "FD");
      markTile(doc, logo, M.left + 13, ry + 13, 24, 7);

      T.set("medium", 8.4, C.ink);
      doc.text("Electronically generated record", M.left + 48, ry + 22);
      const source = party.website ? ` via ${party.website}/agreement` : "";
      T.set("regular", 7.2, C.muted);
      doc.text(T.clean(`Generated ${dates.stamp}${source}`), M.left + 48, ry + 34);

      T.tracked("Reference", RIGHT - 16, ry + 21.5, { size: 5.6, cs: 1, color: C.faint, align: "right" });
      const refW = T.width(reference, "medium", 8.8);
      T.set("medium", 8.8, C.ink);
      doc.text(reference, RIGHT - 16 - refW, ry + 34);
    },
  };
}

function drawFooters(doc, T, { party, reference }) {
  // const total = doc.getNumberOfPages();
  // for (let i = 1; i <= total; i += 1) {
  //   doc.setPage(i);
  //   const rule = PAGE.h - 52;
  //   const base = PAGE.h - 36;

  //   hairline(doc, M.left, rule, RIGHT, C.hair, 0.6);

  //   T.set("bold", 7, C.ink);
  //   doc.text(party.tradingName, M.left, base);
  //   const brandW = doc.getTextWidth(party.tradingName);
  //   T.set("regular", 6.8, C.muted);
  //   doc.text(
  //     T.clean(`${party.legalName}  ·  ${party.whatsapp}  ·  ${party.email}`),
  //     M.left + brandW + 8,
  //     base,
  //   );

  //   const pageText = `${i} / ${total}`;
  //   const pageW = T.width(pageText, "medium", 7);
  //   T.set("medium", 7, C.ink);
  //   doc.text(pageText, RIGHT - pageW, base);
  //   const lead = `${reference}   ·   Page `;
  //   const leadW = T.width(lead, "regular", 6.8);
  //   T.set("regular", 6.8, C.muted);
  //   doc.text(lead, RIGHT - pageW - leadW, base);
  // }
}

function issueDates(at) {
  // IST throughout: the agreement is governed from Tamil Nadu, and a client
  // signing near midnight abroad must not get a different date on the page.
  const zone = { timeZone: "Asia/Kolkata" };
  return {
    long: at.toLocaleDateString("en-IN", { ...zone, day: "numeric", month: "long", year: "numeric" }),
    short: at.toLocaleDateString("en-IN", { ...zone, day: "2-digit", month: "short", year: "numeric" }),
    stamp: `${at.toLocaleString("en-IN", {
      ...zone,
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })} IST`,
  };
}

/**
 * @param {object}   args
 * @param {Function} args.jsPDF   the constructor, passed in by the caller so
 *                                this module holds no static import of it
 * @param {object}   args.form    the submitted form values
 * @param {object}   args.pkg     the selected package from data/packages.js
 * @param {object}   args.party   legal party details
 * @param {Array}    args.terms   the clause list
 * @param {object}  [args.logo]   { dataUrl, format } the white ∞ mark on a
 *                                transparent ground; a vector ∞ stands in
 *                                without it
 * @param {object}  [args.fonts]  { regular, medium, bold } Space Grotesk
 *                                TTFs as base64; Helvetica without them
 * @returns {{ doc: object, filename: string, reference: string }}
 */
export function buildAgreementPdf({ jsPDF, form, pkg, party, terms, logo, fonts }) {
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  const T = typeKit(doc, registerFonts(doc, fonts));
  const reference = form.reference;
  const dates = issueDates(new Date());
  const clientName = form.fullName;
  const clientBusinessname = form.businessName;
  const pkgName = pkg ? pkg.name.trim() : form.packageId;
  const SECTIONS = "04";

  doc.setProperties({
    title: `Client Service Agreement — ${form.fullName}`,
    subject: `${party.tradingName} client service agreement (${reference})`,
    author: party.legalName,
    creator: party.legalName,
    keywords: `agreement, ${reference}, ${party.tradingName}`,
  });
  try {
    doc.setLanguage("en-IN");
    doc.viewerPreferences({ DisplayDocTitle: true });
  } catch {
    // Optional plugins; the document is complete without them.
  }

  const cur = createCursor(doc, () => drawRunningHeader(doc, T, { party, reference, logo }));

  // ---- Hero ---------------------------------------------------------------
  drawHero(doc, T, {
    party,
    logo,
    clientName,
    clientBusinessname,
    cells: [
      ["Reference", reference, 1.2],
      ["Effective date", dates.short, 1],
      ["Package", pkgName, 1.4],
      ["Timeline", form.timeline, 1],
    ],
  });
  cur.y = HERO.y + HERO.h + 36;

  // ---- Preamble -----------------------------------------------------------
  const lede = layoutText(
    T,
    [
      { text: "This agreement is made on " },
      { text: dates.long, weight: "medium", color: C.ink },
      { text: " between " },
      { text: party.legalName, weight: "medium", color: C.ink },
      { text: " (“the Service Provider”) and " },
      { text: clientName, weight: "medium", color: C.ink },
      {
        text: ` (“the Client”), and is governed by ${party.governingLaw}. The Client has read the Service Agreement Terms set out in section 03 and accepted them electronically.`,
      },
    ],
    CONTENT_W,
    10.2,
  );
  drawText(doc, T, lede, M.left, cur.y, 15.5, { justify: true, color: C.slate700 });
  cur.advance((lede.lines.length - 1) * 15.5 + 20);

  // ---- Commercials and 01 Client details ----------------------------------
  const commercials = commercialsBlock(doc, T, {
    total: form.totalValue,
    advance: form.advancePaid,
    balance: form.balance,
    paymentRef: form.paymentRef,
  });
  const parties = partiesBlock(doc, T, { party, form });
  const placeParties = () => {
    sectionHeading(doc, T, cur, "01", SECTIONS, "Client Details", parties.height);
    cur.place(parties);
  };

  // The figures lead whenever page one can hold them and section 01 together.
  // When a long name or address makes the cards too tall for that, section 01
  // goes first and the summary moves overleaf — otherwise the cards would
  // jump to page two and leave half of page one blank.
  const room = PAGE.h - M.bottom - cur.y;
  if (commercials.height + commercials.gap + HEADING_H + parties.height <= room) {
    cur.place(commercials);
    placeParties();
  } else {
    placeParties();
    cur.place(commercials);
  }

  // ---- 02 Project details -------------------------------------------------
  const details = detailsBlock(doc, T, [
    ["Selected package", pkgName],
    ...(form.customScope?.trim() ? [["Custom scope", form.customScope]] : []),
    ["Delivery timeline", form.timeline],
    ["Payment reference / UTR", form.paymentRef],
  ]);
  sectionHeading(doc, T, cur, "02", SECTIONS, "Project Details", details.height);
  cur.place(details);

  if (pkg?.features?.length) cur.place(inclusionsBlock(doc, T, pkg, pkgName));

  // ---- 03 Terms -----------------------------------------------------------
  const clauses = terms.map((term) => clauseBlock(doc, T, term));
  sectionHeading(doc, T, cur, "03", SECTIONS, "Service Agreement Terms", clauses[0]?.height ?? 0);
  clauses.forEach((clause, i) => cur.place(clause, i === clauses.length - 1));

  // ---- 04 Authorisation ---------------------------------------------------
  const auth = authorizationBlock(doc, T, { form, party, dates, reference, logo });
  sectionHeading(doc, T, cur, "04", SECTIONS, "Authorization", auth.height);
  cur.place(auth);

  drawFooters(doc, T, { party, reference });

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

// The drawing kit, shared with utils/quotationPdf.js so the quotation and the
// agreement stay one visual system instead of two copies that drift apart.
export {
  PAGE,
  M,
  CONTENT_W,
  RIGHT,
  HERO,
  C,
  registerFonts,
  typeKit,
  layoutText,
  drawText,
  alpha,
  hairline,
  fillGradient,
  clipRoundedRect,
  glow,
  dotField,
  markTile,
  tick,
  checkBadge,
  createCursor,
  drawHero,
  sectionHeading,
  issueDates,
};
