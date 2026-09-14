"use client";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  Eraser,
  Loader2,
  MessageCircle,
  Plus,
  Receipt,
  RotateCcw,
  Share2,
  X,
} from "lucide-react";
import { agencyPackages, getPackageById } from "@/data/packages";
import { agreementParty } from "@/data/agreementTerms";
import {
  QUOTATION_VALIDITY_DAYS,
  quotationDeliveryPresets,
  quotationNextSteps,
  quotationPaymentPolicy,
  quotationTerms,
} from "@/data/quotationDefaults";
import {
  Field,
  INR,
  MONO,
  StepHeading,
  digitsOnly,
  fetchBase64,
  fieldClass,
} from "@/components/documentFormKit";

// The signatory's name, title and drawn signature are the one thing worth
// keeping between quotations, and nobody else's business — so they stay in
// this browser's storage and never touch the server.
const SIGNER_KEY = "wepzite:quotation:signer";
const DEFAULT_SIGNER = {
  name: agreementParty.legalName.trim(),
  title: "Authorised signatory",
  signature: "",
};

let itemSeq = 0;
/** List rows carry an id so React keeps focus on the right row when rows move. */
const toItems = (texts) => texts.map((text) => ({ id: `item-${(itemSeq += 1)}`, text }));
const textsOf = (items) => items.map((item) => item.text.trim()).filter(Boolean);
const sameTexts = (items, texts) => {
  const a = textsOf(items);
  const b = texts.map((t) => t.trim()).filter(Boolean);
  return a.length === b.length && a.every((t, i) => t === b[i]);
};
const featuresOf = (pkg) => (pkg?.features ?? []).map((f) => f.trim()).filter(Boolean);

const pad2 = (n) => String(n).padStart(2, "0");
const isoDate = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

/** "2026-09-20" → "20 Sept 2026", read as a calendar date so no time zone can shift it. */
function displayDate(iso) {
  const [y, m, d] = String(iso || "").split("-").map(Number);
  if (!y || !m || !d) return "—";
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    timeZone: "UTC",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/** wa.me wants country code + number. Ten-digit numbers are assumed Indian. */
function whatsappNumber(phone) {
  const digits = digitsOnly(phone).replace(/^0+/, "");
  if (digits.length === 10) return `91${digits}`;
  return digits.length > 10 ? digits : "";
}

// ---------------------------------------------------------------------------
// List editor
// ---------------------------------------------------------------------------

function AutoTextarea({ value, ...props }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);
  return <textarea ref={ref} rows={1} value={value} {...props} />;
}

function IconButton({ label, onClick, disabled, danger, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors disabled:pointer-events-none disabled:opacity-30 ${
        danger ? "hover:bg-rose-50 hover:text-rose-600" : "hover:bg-slate-100 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function TextAction({ onClick, icon: Icon, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 transition-colors hover:border-slate-300 hover:text-brand-600"
    >
      <Icon size={12} />
      {children}
    </button>
  );
}

function Marker({ kind, index }) {
  if (kind === "check") {
    return (
      <span className="mt-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
        <Check size={9} className="stroke-[4px]" />
      </span>
    );
  }
  return (
    <span
      className={`mt-1.5 flex h-5 min-w-7 shrink-0 items-center justify-center rounded-md border border-brand-100/70 bg-brand-50 px-1 text-[10px] font-black text-brand-700 ${MONO}`}
    >
      {pad2(index + 1)}
    </span>
  );
}

/**
 * Editable, reorderable list. Pasting several lines adds one item per line,
 * with any leading bullet or number stripped — so a scope copied out of a
 * WhatsApp chat or a notes app lands as a clean list.
 */
function ListEditor({ items, onChange, marker, placeholder, invalid, errorAttr }) {
  const [draft, setDraft] = useState("");

  const add = (raw) => {
    const parts = String(raw)
      .split(/\r?\n/)
      .map((line) => line.replace(/^\s*(?:[-*•●▪✓✔]|\d{1,2}[.)])\s+/, "").trim())
      .filter(Boolean);
    if (!parts.length) return false;
    onChange([...items, ...toItems(parts)]);
    return true;
  };

  const move = (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div>
      {items.length > 0 && (
        <ol className="mb-3 space-y-2">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white py-1 pl-3 pr-1 transition-colors focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100"
            >
              <Marker kind={marker} index={index} />
              <AutoTextarea
                value={item.text}
                aria-label={`Item ${index + 1}`}
                onChange={(e) =>
                  onChange(
                    items.map((it) =>
                      it.id === item.id ? { ...it, text: e.target.value.replace(/\r?\n/g, " ") } : it,
                    ),
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                className="min-w-0 flex-1 resize-none overflow-hidden bg-transparent py-1.5 text-sm font-medium leading-snug text-slate-800 outline-none"
              />
              <div className="flex shrink-0 items-center">
                <IconButton label="Move up" disabled={index === 0} onClick={() => move(index, -1)}>
                  <ChevronUp size={14} />
                </IconButton>
                <IconButton
                  label="Move down"
                  disabled={index === items.length - 1}
                  onClick={() => move(index, 1)}
                >
                  <ChevronDown size={14} />
                </IconButton>
                <IconButton
                  label="Remove"
                  danger
                  onClick={() => onChange(items.filter((it) => it.id !== item.id))}
                >
                  <X size={14} />
                </IconButton>
              </div>
            </li>
          ))}
        </ol>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            if (add(draft)) setDraft("");
          }}
          onPaste={(e) => {
            const text = e.clipboardData.getData("text");
            if (!/\r?\n/.test(text.trim())) return;
            e.preventDefault();
            add(text);
          }}
          placeholder={placeholder}
          data-quote-error={errorAttr}
          className={fieldClass(invalid)}
        />
        <button
          type="button"
          onClick={() => {
            if (add(draft)) setDraft("");
          }}
          disabled={!draft.trim()}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-40"
        >
          <Plus size={13} />
          Add
        </button>
      </div>
      <p className="mt-1.5 text-[11px] font-medium text-slate-400">
        Press Enter to add. Paste several lines to add them all at once.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Signature pad
// ---------------------------------------------------------------------------

const INK = "#1e293b"; // slate-800, the agreement's signature ink

/** Crops a canvas to its inked pixels and returns a transparent PNG data URL. */
function trimmedSignature(canvas) {
  const { width, height } = canvas;
  const { data } = canvas.getContext("2d").getImageData(0, 0, width, height);
  let left = width;
  let top = height;
  let right = -1;
  let bottom = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (data[(y * width + x) * 4 + 3] > 10) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }
  if (right < 0) return "";

  const pad = 6;
  left = Math.max(0, left - pad);
  top = Math.max(0, top - pad);
  right = Math.min(width - 1, right + pad);
  bottom = Math.min(height - 1, bottom + pad);

  const out = document.createElement("canvas");
  out.width = right - left + 1;
  out.height = bottom - top + 1;
  out.getContext("2d").drawImage(canvas, left, top, out.width, out.height, 0, 0, out.width, out.height);
  return out.toDataURL("image/png");
}

function SignaturePad({ value, onChange }) {
  const canvasRef = useRef(null);
  const valueRef = useRef(value);
  const committed = useRef(value);
  const drawing = useRef(false);
  const last = useRef([0, 0]);
  const [inked, setInked] = useState(false);

  valueRef.current = value;

  /** Sizes the canvas to its box at device resolution and repaints the saved signature. */
  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.2;
    ctx.strokeStyle = INK;
    ctx.fillStyle = INK;

    const saved = valueRef.current;
    if (!saved) return;
    const img = new Image();
    img.onload = () => {
      const w = img.width / dpr;
      const h = img.height / dpr;
      const scale = Math.min(1, (rect.width - 24) / w, (rect.height - 24) / h);
      ctx.drawImage(img, (rect.width - w * scale) / 2, (rect.height - h * scale) / 2, w * scale, h * scale);
    };
    img.src = saved;
  }, []);

  // Repaint when the box changes width (resizing clears a canvas).
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    let width = 0;
    const observer = new ResizeObserver(([entry]) => {
      if (Math.abs(entry.contentRect.width - width) < 1) return;
      width = entry.contentRect.width;
      paint();
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [paint]);

  // A signature that arrives from storage after mount has to be painted in;
  // one the pad just produced is already on the canvas.
  useEffect(() => {
    if (value === committed.current) return;
    committed.current = value;
    paint();
  }, [value, paint]);

  const pointAt = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top];
  };

  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drawing.current = true;
    setInked(true);
    const [x, y] = pointAt(event);
    last.current = [x, y];
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 1.1, 0, Math.PI * 2);
    ctx.fill();
  };

  const onPointerMove = (event) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const coalesced = event.nativeEvent.getCoalescedEvents?.();
    const points = coalesced?.length ? coalesced : [event.nativeEvent];
    ctx.beginPath();
    ctx.moveTo(...last.current);
    for (const p of points) {
      const [x, y] = pointAt(p);
      ctx.lineTo(x, y);
      last.current = [x, y];
    }
    ctx.stroke();
  };

  const onPointerUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    const dataUrl = trimmedSignature(canvasRef.current);
    committed.current = dataUrl;
    onChange(dataUrl);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    committed.current = "";
    setInked(false);
    onChange("");
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50/60">
        <canvas
          ref={canvasRef}
          data-lenis-prevent
          aria-label="Signature pad"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative z-10 block h-40 w-full cursor-crosshair touch-none"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-10 border-b border-slate-300"
        />
        {!value && !inked && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-400">
            Sign here with your mouse or finger
          </span>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="text-[11px] font-medium text-slate-400">
          {value
            ? "Saved in this browser for your next quotation."
            : "Leave empty to print your name as the signature."}
        </p>
        <button
          type="button"
          onClick={clear}
          disabled={!value && !inked}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 transition-colors hover:border-rose-200 hover:text-rose-600 disabled:pointer-events-none disabled:opacity-40"
        >
          <Eraser size={12} />
          Clear
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Download / share
// ---------------------------------------------------------------------------

function DocumentActions({ state, error, canShare, onDownload, onShare, whatsappHref, reference }) {
  const working = state === "working";
  return (
    <div>
      <button
        type="button"
        onClick={onDownload}
        disabled={working}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25 disabled:pointer-events-none disabled:opacity-60"
      >
        {working ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Preparing quotation…
          </>
        ) : (
          <>
            <Download size={15} />
            Download quotation (PDF)
          </>
        )}
      </button>

      {canShare && (
        <button
          type="button"
          onClick={onShare}
          disabled={working}
          className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-60"
        >
          <Share2 size={14} />
          Share PDF
        </button>
      )}

      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-brand-600 hover:shadow-sm"
        >
          <MessageCircle size={14} />
          Open WhatsApp chat with client
        </a>
      )}

      {(state === "done" || state === "shared") && (
        <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-brand-700">
          <CheckCircle2 size={12} />
          {state === "shared" ? "Shared" : "Downloaded"} — quotation {reference}.
        </p>
      )}
      {error && (
        <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-rose-600">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The form
// ---------------------------------------------------------------------------

const SECTION = "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8";

const EMPTY = {
  clientName: "",
  businessName: "",
  phone: "",
  projectName: "",
  validUntil: "",
  deliveryDays: "",
  packageId: "",
  mrp: "",
  offerPrice: "",
  recurringNote: "",
};

const NUMERIC = new Set(["mrp", "offerPrice", "deliveryDays"]);

export default function QuotationForm() {
  const [form, setForm] = useState(EMPTY);
  const [scope, setScope] = useState([]);
  const [payment, setPayment] = useState(() => toItems(quotationPaymentPolicy));
  const [terms, setTerms] = useState(() => toItems(quotationTerms));
  const [signer, setSigner] = useState(DEFAULT_SIGNER);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [pdfState, setPdfState] = useState("idle"); // idle | working | done | shared | error
  const [pdfError, setPdfError] = useState("");
  const [canShareFiles, setCanShareFiles] = useState(false);

  // Reference, today and the default validity are set after mount: deriving
  // them during render would make the server HTML and first client render
  // disagree.
  const [issued, setIssued] = useState(null);

  const assetsRef = useRef(null);
  const loadAssets = useCallback(() => {
    if (!assetsRef.current) {
      assetsRef.current = Promise.all([
        import("jspdf"),
        import("@/utils/quotationPdf"),
        fetchBase64("/logo-mark-white.png"),
        fetchBase64("/fonts/SpaceGrotesk-Regular.ttf"),
        fetchBase64("/fonts/SpaceGrotesk-Medium.ttf"),
        fetchBase64("/fonts/SpaceGrotesk-Bold.ttf"),
      ]).catch((err) => {
        assetsRef.current = null;
        throw err;
      });
    }
    return assetsRef.current;
  }, []);

  useEffect(() => {
    const now = new Date();
    const today = isoDate(now);
    const validity = new Date(now.getFullYear(), now.getMonth(), now.getDate() + QUOTATION_VALIDITY_DAYS);
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    setIssued({ reference: `WPZ-Q-${today.replace(/-/g, "")}-${suffix}`, todayIso: today });
    setForm((prev) => (prev.validUntil ? prev : { ...prev, validUntil: isoDate(validity) }));

    try {
      const saved = JSON.parse(window.localStorage.getItem(SIGNER_KEY) || "null");
      if (saved && typeof saved === "object") {
        setSigner({
          name: typeof saved.name === "string" && saved.name.trim() ? saved.name : DEFAULT_SIGNER.name,
          title: typeof saved.title === "string" ? saved.title : DEFAULT_SIGNER.title,
          signature:
            typeof saved.signature === "string" && saved.signature.startsWith("data:image/png;base64,")
              ? saved.signature
              : "",
        });
      }
    } catch {
      // Storage blocked or corrupt: start from the defaults.
    }

    try {
      const probe = new File(["%PDF"], "probe.pdf", { type: "application/pdf" });
      setCanShareFiles(Boolean(navigator.canShare?.({ files: [probe] })));
    } catch {
      // No Web Share with files here: download only.
    }

    // Warm the PDF engine, fonts and mark. Sharing must happen inside the tap
    // that asked for it, and a cold fetch of three fonts can outlast that.
    const warm = window.setTimeout(() => loadAssets().catch(() => {}), 1200);
    return () => window.clearTimeout(warm);
  }, [loadAssets]);

  // Any edit makes the last "Downloaded" message stale.
  useEffect(() => {
    setPdfState((state) => (state === "done" || state === "shared" ? "idle" : state));
    setPdfError("");
  }, [form, scope, payment, terms, signer]);

  const selectedPackage = getPackageById(form.packageId);

  const pricing = useMemo(() => {
    const mrp = Number(form.mrp || 0);
    const offer = Number(form.offerPrice || 0);
    const saving = offer > 0 && mrp > offer ? mrp - offer : 0;
    return { mrp, offer, saving, pct: saving ? Math.floor((saving / mrp) * 100) : 0 };
  }, [form.mrp, form.offerPrice]);

  const clearError = (key) => {
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    clearError(key);
  };

  const update = (key) => (event) => {
    const raw = event.target.value;
    setField(key, NUMERIC.has(key) ? digitsOnly(raw).slice(0, key === "deliveryDays" ? 3 : 9) : raw);
  };

  const updateSigner = (patch) => {
    const next = { ...signer, ...patch };
    setSigner(next);
    try {
      window.localStorage.setItem(SIGNER_KEY, JSON.stringify(next));
    } catch {
      // Private mode or full storage: it just won't be remembered.
    }
    if ("name" in patch) clearError("signerName");
  };

  /**
   * Choosing a package pre-fills the offer price, recurring note and scope —
   * but only while each is untouched or still shows the previous package's
   * value. A negotiated figure or a hand-edited scope is never overwritten.
   */
  function choosePackage(id) {
    const pkg = getPackageById(id);
    const previous = getPackageById(form.packageId);

    setForm((prev) => {
      const next = { ...prev, packageId: id };
      if (!prev.offerPrice || (previous && prev.offerPrice === String(previous.price))) {
        next.offerPrice = pkg ? String(pkg.price) : "";
      }
      if (!prev.recurringNote.trim() || (previous && prev.recurringNote === (previous.recurringNote ?? ""))) {
        next.recurringNote = pkg?.recurringNote ?? "";
      }
      return next;
    });

    if (scope.length === 0 || (previous && sameTexts(scope, featuresOf(previous)))) {
      setScope(pkg ? toItems(featuresOf(pkg)) : []);
    }
    setErrors((prev) => ({ ...prev, offerPrice: undefined, scope: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.clientName.trim()) e.clientName = "Required.";
    if (!form.projectName.trim()) e.projectName = "Required.";

    const phone = digitsOnly(form.phone).replace(/^0+/, "");
    if (phone && phone.length < 10) e.phone = "Enter a 10-digit mobile number, or leave it empty.";

    if (!form.validUntil) e.validUntil = "Required.";
    else if (issued && form.validUntil < issued.todayIso) e.validUntil = "That date has already passed.";

    if (!Number(form.deliveryDays)) e.deliveryDays = "Required.";

    if (!pricing.offer) e.offerPrice = "Required.";
    if (form.mrp && pricing.mrp <= pricing.offer)
      e.mrp = "MRP must be higher than the offer price — or leave it empty.";

    if (!textsOf(scope).length) e.scope = "Add at least one scope item.";
    if (!signer.name.trim()) e.signerName = "Required.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function buildPdf() {
    const [{ jsPDF }, { buildQuotationPdf }, mark, regular, medium, bold] = await loadAssets();
    return buildQuotationPdf({
      jsPDF,
      party: agreementParty,
      pkg: selectedPackage,
      nextSteps: quotationNextSteps,
      logo: mark ? { dataUrl: `data:image/png;base64,${mark}`, format: "PNG" } : undefined,
      fonts: { regular, medium, bold },
      signature: signer.signature ? { dataUrl: signer.signature } : undefined,
      quote: {
        reference: issued.reference,
        clientName: form.clientName.trim(),
        businessName: form.businessName.trim(),
        projectName: form.projectName.trim(),
        validUntil: form.validUntil,
        deliveryDays: Number(form.deliveryDays),
        mrp: pricing.saving ? pricing.mrp : 0,
        offerPrice: pricing.offer,
        recurringNote: form.recurringNote.trim(),
        scope: textsOf(scope),
        paymentPolicy: textsOf(payment),
        terms: textsOf(terms),
        signatory: { name: signer.name.trim(), title: signer.title.trim() },
      },
    });
  }

  async function run(mode) {
    if (!issued || pdfState === "working") return;
    setTouched(true);

    if (!validate()) {
      setPdfError("Complete the highlighted fields first.");
      window.requestAnimationFrame(() =>
        document
          .querySelector('[data-quote-error="true"]')
          ?.scrollIntoView({ behavior: "smooth", block: "center" }),
      );
      return;
    }

    setPdfState("working");
    setPdfError("");
    try {
      const { doc, filename } = await buildPdf();

      if (mode === "share") {
        const file = new File([doc.output("blob")], filename, { type: "application/pdf" });
        if (navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share({ files: [file] });
          } catch (err) {
            if (err?.name === "AbortError") {
              setPdfState("idle");
              return;
            }
            throw err;
          }
          setPdfState("shared");
          return;
        }
      }

      doc.save(filename);
      setPdfState("done");
    } catch (err) {
      setPdfState("error");
      setPdfError(
        mode === "share"
          ? "Couldn't open the share sheet. Download the PDF and attach it instead."
          : "The PDF could not be generated. Please try again.",
      );
      console.error("[quotation] PDF generation failed:", err);
    }
  }

  const showError = (key) => (touched ? errors[key] : undefined);

  const scopeCount = textsOf(scope).length;
  const paymentCount = textsOf(payment).length;
  const termsCount = textsOf(terms).length;
  const days = Number(form.deliveryDays);
  const daysLabel = days ? `${days} working day${days === 1 ? "" : "s"}` : "—";

  const clientDone = Boolean(
    form.clientName.trim() && form.projectName.trim() && form.validUntil && days,
  );
  const priceDone = pricing.offer > 0 && (!form.mrp || pricing.mrp > pricing.offer);
  const packageFeatures = featuresOf(selectedPackage);
  const scopeMatchesPackage = selectedPackage && sameTexts(scope, packageFeatures);

  const waNumber = whatsappNumber(form.phone);
  const whatsappHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(
        `Hi ${form.clientName.trim() || "there"}, thank you for your enquiry with ${agreementParty.tradingName}. Please find our quotation for ${
          form.projectName.trim() || "your project"
        } attached${form.validUntil ? ` — valid until ${displayDate(form.validUntil)}` : ""}.`,
      )}`
    : "";

  const actions = (
    <DocumentActions
      state={pdfState}
      error={pdfError}
      canShare={canShareFiles}
      onDownload={() => run("download")}
      onShare={() => run("share")}
      whatsappHref={whatsappHref}
      reference={issued?.reference}
    />
  );

  return (
    <div className="relative w-full bg-slate-50">
      {/* ================= DOCUMENT HEADER BAND ================= */}
      <div className="relative overflow-hidden bg-slate-950 px-4 pb-14 pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-3xl"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
            <Receipt size={12} className="text-brand-500" />
            <span className="text-[10px] font-black uppercase tracking-wide text-brand-200">
              Quotation Builder
            </span>
          </span>

          <h1 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Project <span className="text-brand-500">Quotation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-400">
            Pick a package, shape the scope and price, and download a branded
            PDF to send to an enquiry. Only your signature goes on it — the
            client doesn&apos;t sign anything.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-4">
            {[
              ["Quotation no.", issued?.reference ?? "—"],
              ["Date", issued ? displayDate(issued.todayIso) : "—"],
              ["Valid until", displayDate(form.validUntil)],
              ["Provider", agreementParty.tradingName],
            ].map(([k, v]) => (
              <div key={k} className="bg-slate-950/60 px-4 py-3">
                <dt className="text-[9px] font-black uppercase tracking-wide text-slate-500">{k}</dt>
                <dd className={`mt-1 text-xs font-bold text-white ${k === "Quotation no." ? MONO : ""}`}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ================= FORM BODY ================= */}
      <div className="mx-auto w-full max-w-5xl px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ---------- LEFT: LIVE SUMMARY RAIL ---------- */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                  Quotation summary
                </h3>

                <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                  {[
                    ["Client", form.businessName.trim() || form.clientName.trim() || "—"],
                    ["Project", form.projectName.trim() || "—"],
                    ["Package", selectedPackage ? selectedPackage.name.trim() : "Custom"],
                    ["Delivery", daysLabel],
                    ["Valid until", displayDate(form.validUntil)],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3">
                      <span className="shrink-0 text-[11px] font-semibold text-slate-400">{k}</span>
                      <span className="min-w-0 break-words text-right text-xs font-bold text-slate-800">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
                  {pricing.saving > 0 && (
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] font-semibold text-slate-400">MRP</span>
                      <span className={`text-xs font-bold text-slate-400 line-through ${MONO}`}>
                        ₹{INR(pricing.mrp)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <span className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                      Offer price
                    </span>
                    <span className={`text-sm font-black text-brand-600 ${MONO}`}>
                      ₹{INR(pricing.offer)}
                    </span>
                  </div>
                  {pricing.saving > 0 && (
                    <p className="text-right text-[11px] font-bold text-brand-700">
                      Client saves ₹{INR(pricing.saving)}
                      {pricing.pct ? ` · ${pricing.pct}% off` : ""}
                    </p>
                  )}
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {[
                    ["Client & project", clientDone],
                    ["Pricing", priceDone],
                    [`Scope · ${scopeCount} item${scopeCount === 1 ? "" : "s"}`, scopeCount > 0],
                    [`Payment policy · ${paymentCount}`, paymentCount > 0],
                    [`Terms & conditions · ${termsCount}`, termsCount > 0],
                    [signer.signature ? "Signature drawn" : "Signature (typed name)", Boolean(signer.name.trim())],
                  ].map(([k, ok]) => (
                    <li key={k} className="flex items-center gap-2">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full ${
                          ok ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-400"
                        }`}
                      >
                        {ok && <Check size={9} className="stroke-[4px]" />}
                      </span>
                      <span className={`text-[11px] font-semibold ${ok ? "text-slate-700" : "text-slate-400"}`}>
                        {k}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* On small screens the actions live at the end of the form instead. */}
              <div className="mt-4 hidden lg:block">{actions}</div>
            </div>
          </aside>

          {/* ---------- RIGHT: THE SECTIONS ---------- */}
          <div className="space-y-6 lg:col-span-8">
            {/* 1. CLIENT & PROJECT */}
            <section className={SECTION}>
              <StepHeading
                n="1"
                title="Client & Project"
                subtitle="Who the quotation is for, and how long the offer stands."
                done={clientDone}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Client name *" error={showError("clientName")}>
                  <input
                    type="text"
                    value={form.clientName}
                    onChange={update("clientName")}
                    placeholder="Karthik Raman"
                    data-quote-error={Boolean(showError("clientName"))}
                    className={fieldClass(showError("clientName"))}
                  />
                </Field>

                <Field label="Business name (optional)">
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={update("businessName")}
                    placeholder="Raman Traders"
                    className={fieldClass(false)}
                  />
                </Field>

                <Field label="Project name *" error={showError("projectName")} wide>
                  <input
                    type="text"
                    value={form.projectName}
                    onChange={update("projectName")}
                    placeholder="e.g. Restaurant website with online menu"
                    data-quote-error={Boolean(showError("projectName"))}
                    className={fieldClass(showError("projectName"))}
                  />
                </Field>

                <Field
                  label="Client WhatsApp (optional)"
                  error={showError("phone")}
                  hint="Only used to open a WhatsApp chat so you can send the PDF."
                >
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="98765 43210"
                    data-quote-error={Boolean(showError("phone"))}
                    className={fieldClass(showError("phone"))}
                  />
                </Field>

                <Field
                  label="Valid until *"
                  error={showError("validUntil")}
                  hint={`Defaults to ${QUOTATION_VALIDITY_DAYS} days from today.`}
                >
                  <input
                    type="date"
                    value={form.validUntil}
                    min={issued?.todayIso}
                    onChange={update("validUntil")}
                    data-quote-error={Boolean(showError("validUntil"))}
                    className={fieldClass(showError("validUntil"))}
                  />
                </Field>

                <Field label="Delivery time *" error={showError("deliveryDays")} wide>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.deliveryDays}
                      onChange={update("deliveryDays")}
                      placeholder="14"
                      data-quote-error={Boolean(showError("deliveryDays"))}
                      className={`${fieldClass(showError("deliveryDays"))} ${MONO} pr-28`}
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                      working days
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {quotationDeliveryPresets.map((d) => {
                      const active = form.deliveryDays === String(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setField("deliveryDays", String(d))}
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors ${
                            active
                              ? "border-brand-600 bg-brand-600 text-white"
                              : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800"
                          }`}
                        >
                          {d} days
                        </button>
                      );
                    })}
                  </div>
                </Field>
              </div>
            </section>

            {/* 2. PACKAGE & PRICING */}
            <section className={SECTION}>
              <StepHeading
                n="2"
                title="Package & Pricing"
                subtitle="Selecting a package fills the offer price and scope. Add an MRP to show the discount."
                done={priceDone}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Package" wide>
                  <select
                    value={form.packageId}
                    onChange={(e) => choosePackage(e.target.value)}
                    className={fieldClass(false)}
                  >
                    <option value="">No package — custom quote</option>
                    {agencyPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name.trim()} — ₹{INR(pkg.price)}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="MRP / regular price (₹)"
                  error={showError("mrp")}
                  hint="Optional. Printed struck through."
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.mrp}
                    onChange={update("mrp")}
                    placeholder="9999"
                    data-quote-error={Boolean(showError("mrp"))}
                    className={`${fieldClass(showError("mrp"))} ${MONO}`}
                  />
                </Field>

                <Field label="Offer price / project cost (₹) *" error={showError("offerPrice")}>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.offerPrice}
                    onChange={update("offerPrice")}
                    placeholder="6999"
                    data-quote-error={Boolean(showError("offerPrice"))}
                    className={`${fieldClass(showError("offerPrice"))} ${MONO}`}
                  />
                </Field>

                {/* Live price tag, styled the way the PDF prints it. */}
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                  <div className="flex items-baseline gap-3">
                    {pricing.saving > 0 && (
                      <span className={`text-sm font-bold text-slate-400 line-through ${MONO}`}>
                        ₹{INR(pricing.mrp)}
                      </span>
                    )}
                    <span className={`text-xl font-black text-slate-900 ${MONO}`}>
                      ₹{INR(pricing.offer)}
                    </span>
                  </div>
                  {pricing.saving > 0 ? (
                    <span className="rounded-full bg-brand-600 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                      Save ₹{INR(pricing.saving)}
                      {pricing.pct ? ` · ${pricing.pct}% off` : ""}
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-400">
                      {form.mrp && pricing.offer
                        ? "MRP must be higher than the offer price"
                        : "No MRP — the price prints on its own"}
                    </span>
                  )}
                </div>

                <Field
                  label="Recurring charges (optional)"
                  hint="Printed under the scope — e.g. monthly maintenance."
                  wide
                >
                  <input
                    type="text"
                    value={form.recurringNote}
                    onChange={update("recurringNote")}
                    placeholder="+ ₹500/month maintenance"
                    className={fieldClass(false)}
                  />
                </Field>
              </div>
            </section>

            {/* 3. PROJECT SCOPE */}
            <section className={SECTION}>
              <StepHeading
                n="3"
                title="Project Scope"
                subtitle="Everything the price covers. Edit, reorder or add your own items."
                done={scopeCount > 0}
              />
              {(selectedPackage && !scopeMatchesPackage) || scope.length > 0 ? (
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedPackage && !scopeMatchesPackage && (
                    <TextAction icon={RotateCcw} onClick={() => setScope(toItems(packageFeatures))}>
                      Load {selectedPackage.name.trim()} inclusions
                    </TextAction>
                  )}
                  {scope.length > 0 && (
                    <TextAction icon={X} onClick={() => setScope([])}>
                      Clear all
                    </TextAction>
                  )}
                </div>
              ) : null}
              <ListEditor
                items={scope}
                onChange={(next) => {
                  setScope(next);
                  clearError("scope");
                }}
                marker="check"
                placeholder="e.g. Up to 10 pages, WhatsApp integration…"
                invalid={showError("scope")}
                errorAttr={Boolean(showError("scope"))}
              />
              {showError("scope") && (
                <p className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                  <AlertCircle size={11} />
                  {showError("scope")}
                </p>
              )}
            </section>

            {/* 4. PAYMENT POLICY */}
            <section className={SECTION}>
              <StepHeading
                n="4"
                title="Payment Policy"
                subtitle="How and when the client pays. Leave the list empty to leave it off the PDF."
                done={paymentCount > 0}
              />
              {!sameTexts(payment, quotationPaymentPolicy) && (
                <div className="mb-4">
                  <TextAction icon={RotateCcw} onClick={() => setPayment(toItems(quotationPaymentPolicy))}>
                    Reset to default
                  </TextAction>
                </div>
              )}
              <ListEditor
                items={payment}
                onChange={setPayment}
                marker="number"
                placeholder="e.g. 50% advance to start the project"
              />
            </section>

            {/* 5. TERMS & CONDITIONS */}
            <section className={SECTION}>
              <StepHeading
                n="5"
                title="Terms & Conditions"
                subtitle="Printed as a numbered list. Leave it empty to leave it off the PDF."
                done={termsCount > 0}
              />
              {!sameTexts(terms, quotationTerms) && (
                <div className="mb-4">
                  <TextAction icon={RotateCcw} onClick={() => setTerms(toItems(quotationTerms))}>
                    Reset to default
                  </TextAction>
                </div>
              )}
              <ListEditor
                items={terms}
                onChange={setTerms}
                marker="number"
                placeholder="e.g. Content must be shared within 5 days"
              />
            </section>

            {/* 6. SIGNATURE & DOWNLOAD */}
            <section className={SECTION}>
              <StepHeading
                n="6"
                title="Signature & Download"
                subtitle="Only your signature goes on a quotation. Your name, title and signature are remembered in this browser."
                done={Boolean(signer.name.trim())}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Signatory name *" error={showError("signerName")}>
                  <input
                    type="text"
                    value={signer.name}
                    onChange={(e) => updateSigner({ name: e.target.value })}
                    placeholder="Your full name"
                    data-quote-error={Boolean(showError("signerName"))}
                    className={fieldClass(showError("signerName"))}
                  />
                </Field>
                <Field label="Title">
                  <input
                    type="text"
                    value={signer.title}
                    onChange={(e) => updateSigner({ title: e.target.value })}
                    placeholder="Founder"
                    className={fieldClass(false)}
                  />
                </Field>
                <Field label="Signature" wide>
                  <SignaturePad
                    value={signer.signature}
                    onChange={(signature) => updateSigner({ signature })}
                  />
                </Field>
              </div>

              <div className="mt-7 border-t border-slate-100 pt-6">{actions}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
