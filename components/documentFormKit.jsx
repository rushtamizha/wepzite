import { AlertCircle, Check } from "lucide-react";

// ---------------------------------------------------------------------------
// Form primitives shared by the two document builders — the client agreement
// (/agreement) and the quotation (/quotation) — so both read as one product.
// LeadForm keeps its own styling, and one difference is deliberate: invalid
// fields here go rose, not emerald. On a document the person filling it in has
// to be able to tell a mistake from a confirmation at a glance, and
// emerald-on-emerald cannot do that.
// ---------------------------------------------------------------------------
export const LABEL =
  "mb-1.5 block text-[10px] font-black uppercase tracking-wide text-slate-500";

export const fieldClass = (invalid) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${
    invalid ? "border-rose-300 bg-rose-50/40" : "border-slate-200"
  }`;

export const MONO = "font-mono tabular-nums";

export const INR = (n) => (Number.isFinite(n) ? n.toLocaleString("en-IN") : "0");
export const digitsOnly = (v) => String(v).replace(/[^\d]/g, "");

/**
 * Fetches a same-origin asset as a bare base64 string (no data: prefix), or
 * undefined on any failure. The PDF assets are fetched rather than inlined so
 * they stay out of the JS bundle and get cached like any other file — and a
 * missing font or mark must only ever cost the PDF its styling, never the
 * document itself.
 */
export async function fetchBase64(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return undefined;
    const blob = await res.blob();
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    return String(dataUrl).split(",")[1] || undefined;
  } catch {
    return undefined;
  }
}

export function Field({ label, error, children, hint, wide = false }) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label className={LABEL}>{label}</label>
      {children}
      {hint && !error && (
        <p className="mt-1.5 text-[11px] font-medium text-slate-400">{hint}</p>
      )}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

export function StepHeading({ n, title, subtitle, done }) {
  return (
    <div className="mb-6 flex items-start gap-3 border-b border-slate-200/80 pb-4">
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[10px] font-black transition-colors ${
          done
            ? "border-brand-600 bg-brand-600 text-white"
            : "border-slate-200 bg-slate-50 text-slate-400"
        }`}
      >
        {done ? <Check size={12} className="stroke-[3px]" /> : n}
      </span>
      <div>
        <h2 className="text-sm font-black uppercase tracking-wide text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
