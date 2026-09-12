"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ArrowDown,
  Check,
  CheckCircle2,
  FileText,
  Loader2,
  Lock,
  MessageCircle,
  ShieldCheck,
  Download,
} from "lucide-react";
import { agencyPackages, getPackageById } from "@/data/packages";
import { agreementParty, agreementTerms, deliveryTimelines } from "@/data/agreementTerms";
import { BUSINESS_WHATSAPP } from "@/utils/site";

// ---------------------------------------------------------------------------
// Shared field styling. Kept local rather than pushed into ui/Section because
// this is the only long-form input surface on the site; LeadForm has its own.
// One difference from LeadForm is deliberate: invalid fields here go rose, not
// emerald. On a contract the client has to be able to tell a mistake from a
// confirmation at a glance, and emerald-on-emerald cannot do that.
// ---------------------------------------------------------------------------
const LABEL =
  "mb-1.5 block text-[10px] font-black uppercase tracking-wide text-slate-500";

const fieldClass = (invalid) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${
    invalid ? "border-rose-300 bg-rose-50/40" : "border-slate-200"
  }`;

const MONO = "font-mono tabular-nums";

const INR = (n) => (Number.isFinite(n) ? n.toLocaleString("en-IN") : "0");
const digitsOnly = (v) => String(v).replace(/[^\d]/g, "");

function Field({ label, error, children, hint, wide = false }) {
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

function StepHeading({ n, title, subtitle, done }) {
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

const EMPTY = {
  fullName: "",
  businessName: "",
  phone: "",
  email: "",
  address: "",
  packageId: "",
  customScope: "",
  totalValue: "",
  advancePaid: "",
  paymentRef: "",
  timeline: "",
  signature: "",
};

export default function AgreementForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touchedSubmit, setTouchedSubmit] = useState(false);

  const [scrolledTerms, setScrolledTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [code, setCode] = useState("");
  const [codeState, setCodeState] = useState("idle"); // idle | checking | ok | error
  const [codeError, setCodeError] = useState("");
  const [pdfState, setPdfState] = useState("idle"); // idle | working | done | error
  const [pdfError, setPdfError] = useState("");

  // Reference and date are generated after mount. Deriving either during
  // render would make the server HTML and the first client render disagree.
  const [issued, setIssued] = useState(null);
  useEffect(() => {
    const now = new Date();
    const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
      now.getDate(),
    ).padStart(2, "0")}`;
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    setIssued({
      reference: `WPZ-${stamp}-${suffix}`,
      dateLabel: now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    });
  }, []);

  const termsRef = useRef(null);

  // handleDownload must not trust `codeState` from its closure. While the
  // verified block animates out, React keeps rendering that subtree with the
  // props it had when it was removed — so the old button stays clickable with
  // a closure that still says "ok", and would mint a PDF after the gate had
  // already re-locked. A ref is always current, so the guard reads this.
  const codeStateRef = useRef(codeState);
  useEffect(() => {
    codeStateRef.current = codeState;
  }, [codeState]);

  const selectedPackage = getPackageById(form.packageId);

  const totals = useMemo(() => {
    const total = Number(digitsOnly(form.totalValue) || 0);
    const advance = Number(digitsOnly(form.advancePaid) || 0);
    return { total, advance, balance: Math.max(total - advance, 0) };
  }, [form.totalValue, form.advancePaid]);

  const update = (key) => (event) => {
    const raw = event.target.value;
    const value =
      key === "totalValue" || key === "advancePaid" ? digitsOnly(raw) : raw;

    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // Choosing a package pre-fills the project value, but only while the
      // field is untouched or still showing the previous package's figure —
      // a hand-typed negotiated number must never be overwritten.
      if (key === "packageId") {
        const pkg = getPackageById(value);
        const previousPkg = getPackageById(prev.packageId);
        const untouched =
          !prev.totalValue ||
          (previousPkg && prev.totalValue === String(previousPkg.price));
        if (pkg && untouched) next.totalValue = String(pkg.price);
      }
      return next;
    });

    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  // Any edit after the code was accepted invalidates it — otherwise a client
  // could unlock with valid details and then change the figures before
  // downloading.
  useEffect(() => {
    if (codeState === "ok") {
      setCodeState("idle");
      setCode("");
      setPdfState("idle");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required.";
    if (!form.businessName.trim()) e.businessName = "Required.";

    const phone = digitsOnly(form.phone);
    if (!phone) e.phone = "Required.";
    else if (phone.length < 10) e.phone = "Enter a 10-digit mobile number.";

    if (!form.email.trim()) e.email = "Required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Enter a valid email address.";

    if (!form.address.trim()) e.address = "Required.";
    else if (form.address.trim().length < 12)
      e.address = "Enter the full address including city and PIN code.";

    if (!form.packageId) e.packageId = "Select a package.";
    if (!totals.total) e.totalValue = "Required.";
    if (!form.advancePaid) e.advancePaid = "Required.";
    else if (totals.advance > totals.total)
      e.advancePaid = "Advance cannot exceed the total project value.";
    if (!form.paymentRef.trim()) e.paymentRef = "Required.";
    if (!form.timeline) e.timeline = "Select a delivery timeline.";

    if (!agreed) e.agreed = "You must agree to the Service Agreement Terms.";

    if (!form.signature.trim()) e.signature = "Type your full name to sign.";
    else if (
      form.signature.trim().toLowerCase() !== form.fullName.trim().toLowerCase()
    )
      e.signature = "The signature must match the full name given above.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const detailsComplete =
    form.fullName && form.businessName && form.phone && form.email && form.address;
  const projectComplete =
    form.packageId && totals.total && form.advancePaid && form.paymentRef && form.timeline;

  /** Enables the checkbox only once the client has reached the last clause. */
  const onTermsScroll = (event) => {
    const el = event.currentTarget;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 24) setScrolledTerms(true);
  };

  // A short terms box on a tall screen may not be scrollable at all, in which
  // case there is nothing to scroll and the gate must not lock the client out.
  useEffect(() => {
    const el = termsRef.current;
    if (el && el.scrollHeight <= el.clientHeight + 4) setScrolledTerms(true);
  }, []);

  async function handleVerifyCode(event) {
    event.preventDefault();
    setTouchedSubmit(true);
    setCodeError("");

    if (!validate()) {
      setCodeError("Complete the highlighted fields first.");
      document
        .querySelector('[data-agreement-error="true"]')
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setCodeState("checking");
    try {
      const res = await fetch("/api/agreement/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!data.valid) {
        setCodeState("error");
        setCodeError(data.error || "That code is not valid.");
        return;
      }
      setCodeState("ok");
    } catch {
      setCodeState("error");
      setCodeError("Could not reach the server. Check your connection and try again.");
    }
  }

  async function handleDownload() {
    if (codeStateRef.current !== "ok" || !issued) return;
    setPdfState("working");
    setPdfError("");
    try {
      // Both the PDF engine and the builder load on demand, so this page costs
      // nothing extra to visit.
      const [{ jsPDF }, { buildAgreementPdf }] = await Promise.all([
        import("jspdf"),
        import("@/utils/agreementPdf"),
      ]);

      // The brand mark is fetched rather than inlined as base64, so it stays
      // out of the JS bundle and gets cached like any other image. A failure
      // here must never cost the client their contract, so the header simply
      // falls back to type alone.
      let logo;
      try {
        const res = await fetch("/logo-mark.png");
        if (res.ok) {
          const blob = await res.blob();
          logo = {
            format: "PNG",
            dataUrl: await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            }),
          };
        }
      } catch {
        logo = undefined;
      }

      const { doc, filename } = buildAgreementPdf({
        jsPDF,
        party: agreementParty,
        terms: agreementTerms,
        pkg: selectedPackage,
        logo,
        form: {
          ...form,
          phone: form.phone.trim(),
          totalValue: totals.total,
          advancePaid: totals.advance,
          balance: totals.balance,
          reference: issued.reference,
        },
      });

      doc.save(filename);
      setPdfState("done");
    } catch (err) {
      setPdfState("error");
      setPdfError("The PDF could not be generated. Please try again.");
      console.error("[agreement] PDF generation failed:", err);
    }
  }

  const showError = (key) => (touchedSubmit ? errors[key] : undefined);

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
            <ShieldCheck size={12} className="text-brand-500" />
            <span className="text-[10px] font-black uppercase tracking-wide text-brand-200">
              Confidential Document
            </span>
          </span>

          <h1 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Client Service <span className="text-brand-500">Agreement</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-400">
            Complete your project details, read the terms in full, and sign
            below. Enter the agreement code we send you on WhatsApp to generate
            your signed PDF copy.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-4">
            {[
              ["Reference", issued?.reference ?? "—"],
              ["Date", issued?.dateLabel ?? "—"],
              ["Provider", agreementParty.tradingName],
              ["Jurisdiction", agreementParty.jurisdiction],
            ].map(([k, v]) => (
              <div key={k} className="bg-slate-950/60 px-4 py-3">
                <dt className="text-[9px] font-black uppercase tracking-wide text-slate-500">
                  {k}
                </dt>
                <dd className={`mt-1 text-xs font-bold text-white ${k === "Reference" ? MONO : ""}`}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ================= FORM BODY ================= */}
      <form onSubmit={handleVerifyCode} className="mx-auto w-full max-w-5xl px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ---------- LEFT: LIVE SUMMARY RAIL ---------- */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                  Agreement summary
                </h3>

                <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                  {[
                    ["Client", form.businessName || form.fullName || "—"],
                    ["Package", selectedPackage ? selectedPackage.name.trim() : "—"],
                    ["Timeline", form.timeline || "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3">
                      <span className="text-[11px] font-semibold text-slate-400">{k}</span>
                      <span className="text-right text-xs font-bold text-slate-800">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">Total value</span>
                    <span className={`text-xs font-bold text-slate-800 ${MONO}`}>
                      ₹{INR(totals.total)}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">Advance paid</span>
                    <span className={`text-xs font-bold text-slate-800 ${MONO}`}>
                      ₹{INR(totals.advance)}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <span className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                      Balance due
                    </span>
                    <span className={`text-sm font-black text-brand-600 ${MONO}`}>
                      ₹{INR(totals.balance)}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {[
                    ["Client details", detailsComplete],
                    ["Project details", projectComplete],
                    ["Terms read", scrolledTerms],
                    ["Agreed & signed", agreed && Boolean(form.signature.trim())],
                    ["Code verified", codeState === "ok"],
                  ].map(([k, ok]) => (
                    <li key={k} className="flex items-center gap-2">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full ${
                          ok ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-400"
                        }`}
                      >
                        {ok && <Check size={9} className="stroke-[4px]" />}
                      </span>
                      <span
                        className={`text-[11px] font-semibold ${
                          ok ? "text-slate-700" : "text-slate-400"
                        }`}
                      >
                        {k}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
                  "Hi Wepzite! I'm filling in the client agreement and need the agreement code.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-brand-600 hover:shadow-sm"
              >
                <MessageCircle size={14} />
                Request the agreement code
              </a>
            </div>
          </aside>

          {/* ---------- RIGHT: THE SECTIONS ---------- */}
          <div className="space-y-6 lg:col-span-8">
            {/* 1. CLIENT DETAILS */}
            <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <StepHeading
                n="1"
                title="Client Details"
                subtitle="The party entering into this agreement."
                done={Boolean(detailsComplete)}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name *" error={showError("fullName")}>
                  <input
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={update("fullName")}
                    placeholder="Karthik Raman"
                    data-agreement-error={Boolean(showError("fullName"))}
                    className={fieldClass(showError("fullName"))}
                  />
                </Field>

                <Field label="Business name *" error={showError("businessName")}>
                  <input
                    type="text"
                    autoComplete="organization"
                    value={form.businessName}
                    onChange={update("businessName")}
                    placeholder="Raman Traders"
                    data-agreement-error={Boolean(showError("businessName"))}
                    className={fieldClass(showError("businessName"))}
                  />
                </Field>

                <Field label="Phone / WhatsApp *" error={showError("phone")}>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="98765 43210"
                    data-agreement-error={Boolean(showError("phone"))}
                    className={fieldClass(showError("phone"))}
                  />
                </Field>

                <Field label="Email address *" error={showError("email")}>
                  <input
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@business.com"
                    data-agreement-error={Boolean(showError("email"))}
                    className={fieldClass(showError("email"))}
                  />
                </Field>

                <Field label="Full address *" error={showError("address")} wide>
                  <textarea
                    rows={3}
                    autoComplete="street-address"
                    value={form.address}
                    onChange={update("address")}
                    placeholder="Door no, street, area, city, district, PIN code"
                    data-agreement-error={Boolean(showError("address"))}
                    className={`${fieldClass(showError("address"))} resize-none`}
                  />
                </Field>
              </div>
            </section>

            {/* 2. PROJECT DETAILS */}
            <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <StepHeading
                n="2"
                title="Project Details"
                subtitle="Selecting a package pre-fills the project value — overwrite it if the figure was negotiated."
                done={Boolean(projectComplete)}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Selected package *" error={showError("packageId")} wide>
                  <select
                    value={form.packageId}
                    onChange={update("packageId")}
                    data-agreement-error={Boolean(showError("packageId"))}
                    className={fieldClass(showError("packageId"))}
                  >
                    <option value="">Select a package…</option>
                    {agencyPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name.trim()} — ₹{INR(pkg.price)}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Custom scope (optional)"
                  hint="Anything agreed on top of the published package inclusions."
                  wide
                >
                  <textarea
                    rows={3}
                    value={form.customScope}
                    onChange={update("customScope")}
                    placeholder="e.g. two extra landing pages, Tamil translation of the home page"
                    className={`${fieldClass(false)} resize-none`}
                  />
                </Field>

                <Field label="Total project value (₹) *" error={showError("totalValue")}>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.totalValue}
                    onChange={update("totalValue")}
                    placeholder="6999"
                    data-agreement-error={Boolean(showError("totalValue"))}
                    className={`${fieldClass(showError("totalValue"))} ${MONO}`}
                  />
                </Field>

                <Field label="Advance paid (₹) *" error={showError("advancePaid")}>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.advancePaid}
                    onChange={update("advancePaid")}
                    placeholder="3500"
                    data-agreement-error={Boolean(showError("advancePaid"))}
                    className={`${fieldClass(showError("advancePaid"))} ${MONO}`}
                  />
                </Field>

                <Field label="Balance due on delivery (₹)" hint="Calculated automatically.">
                  <div
                    className={`w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 ${MONO}`}
                  >
                    ₹{INR(totals.balance)}
                  </div>
                </Field>

                <Field label="Payment reference / UTR *" error={showError("paymentRef")}>
                  <input
                    type="text"
                    value={form.paymentRef}
                    onChange={update("paymentRef")}
                    placeholder="UPI / NEFT reference"
                    data-agreement-error={Boolean(showError("paymentRef"))}
                    className={`${fieldClass(showError("paymentRef"))} ${MONO}`}
                  />
                </Field>

                <Field label="Delivery timeline *" error={showError("timeline")} wide>
                  <select
                    value={form.timeline}
                    onChange={update("timeline")}
                    data-agreement-error={Boolean(showError("timeline"))}
                    className={fieldClass(showError("timeline"))}
                  >
                    <option value="">Select a timeline…</option>
                    {deliveryTimelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </section>

            {/* 3. AGREEMENT TERMS */}
            <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <StepHeading
                n="3"
                title="Agreement Terms"
                subtitle="Read through all terms and conditions. You must scroll to the bottom of this document before you can agree."
                done={agreed}
              />

              <div className="relative">
                <div
                  ref={termsRef}
                  onScroll={onTermsScroll}
                  data-lenis-prevent
                  className="no-scrollbar h-80 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50/60 p-5"
                >
                  <p className="mb-5 border-b border-slate-200 pb-4 text-[11px] font-medium leading-relaxed text-slate-500">
                    This agreement is between{" "}
                    <span className="font-bold text-slate-700">{agreementParty.legalName}</span>{" "}
                    (&ldquo;the Service Provider&rdquo;) and{" "}
                    <span className="font-bold text-slate-700">
                      {form.businessName || form.fullName || "the Client"}
                    </span>{" "}
                    (&ldquo;the Client&rdquo;), governed by {agreementParty.governingLaw}.
                  </p>

                  <ol className="space-y-5">
                    {agreementTerms.map((term) => (
                      <li key={term.n} className="flex gap-4">
                        <span className={`shrink-0 text-[11px] font-black text-brand-600 ${MONO}`}>
                          {term.n}.
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">{term.title}</h4>
                          <p className="mt-1 text-[11px] font-medium leading-relaxed text-slate-500">
                            {term.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <p className="mt-6 border-t border-slate-200 pt-4 text-[11px] font-semibold text-brand-700">
                    End of terms — you may now agree below.
                  </p>
                </div>

                {/* Fade + nudge, shown only while there is more to read. */}
                <AnimatePresence>
                  {!scrolledTerms && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pointer-events-none absolute inset-x-0 bottom-0 flex h-24 items-end justify-center rounded-b-xl bg-gradient-to-t from-white via-white/80 to-transparent pb-3"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-slate-500 shadow-sm">
                        <ArrowDown size={11} className="text-brand-600" />
                        Scroll to continue
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                disabled={!scrolledTerms}
                onClick={() => {
                  setAgreed((v) => !v);
                  setErrors((prev) => ({ ...prev, agreed: undefined }));
                }}
                data-agreement-error={Boolean(showError("agreed"))}
                className={`mt-5 flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                  !scrolledTerms
                    ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-60"
                    : agreed
                      ? "border-brand-400 bg-brand-50/50"
                      : showError("agreed")
                        ? "border-rose-300 bg-rose-50/40"
                        : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    agreed
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {agreed && <Check size={10} className="stroke-[4px]" />}
                </span>
                <span className="text-xs font-bold text-slate-700">
                  I have read and agree to the Service Agreement Terms.
                  {!scrolledTerms && (
                    <span className="mt-1 block text-[11px] font-medium text-slate-400">
                      Scroll to the end of the terms above to enable this.
                    </span>
                  )}
                </span>
              </button>
              {showError("agreed") && (
                <p className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                  <AlertCircle size={11} />
                  {showError("agreed")}
                </p>
              )}
            </section>

            {/* 4. AUTHORIZATION */}
            <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <StepHeading
                n="4"
                title="Authorization"
                subtitle="Digital signatures are recognised under the Information Technology Act, 2000."
                done={codeState === "ok"}
              />

              <Field
                label="Digital signature — type your full name *"
                error={showError("signature")}
                hint="Must match the full name given in section 1."
              >
                <input
                  type="text"
                  value={form.signature}
                  onChange={update("signature")}
                  placeholder="Sign here…"
                  data-agreement-error={Boolean(showError("signature"))}
                  className={`${fieldClass(
                    showError("signature"),
                  )} font-serif text-lg italic tracking-wide`}
                />
              </Field>

              <p className="mt-4 text-[11px] font-medium text-slate-400">
                Date: <span className={`font-bold text-slate-600 ${MONO}`}>{issued?.dateLabel ?? "—"}</span>
              </p>

              {/* ---- CODE GATE ---- */}
              <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-brand-600">
                    <Lock size={14} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-xs font-black uppercase tracking-wide text-slate-800">
                      Agreement code
                    </h4>
                    <p className="mt-1 text-[11px] font-medium leading-relaxed text-slate-500">
                      We send this to you on WhatsApp once your advance is
                      confirmed. Enter it to unlock your signed PDF.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      if (codeState === "error") {
                        setCodeState("idle");
                        setCodeError("");
                      }
                    }}
                    placeholder="Enter code"
                    autoComplete="off"
                    spellCheck={false}
                    disabled={codeState === "ok"}
                    className={`${fieldClass(
                      codeState === "error",
                    )} ${MONO} uppercase tracking-widest disabled:bg-slate-100 disabled:text-slate-400`}
                  />
                  <button
                    type="submit"
                    disabled={codeState === "checking" || codeState === "ok"}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-60"
                  >
                    {codeState === "checking" ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        Checking
                      </>
                    ) : codeState === "ok" ? (
                      <>
                        <CheckCircle2 size={13} />
                        Verified
                      </>
                    ) : (
                      "Verify code"
                    )}
                  </button>
                </div>

                {codeError && (
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-rose-600">
                    <AlertCircle size={12} />
                    {codeError}
                  </p>
                )}

                <AnimatePresence>
                  {codeState === "ok" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                      // Belt and braces with the ref guard above: an exiting
                      // copy of this block should not be interactive.
                      style={{ pointerEvents: codeState === "ok" ? "auto" : "none" }}
                    >
                      <div className="mt-5 border-t border-slate-200 pt-5">
                        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-700">
                          <CheckCircle2 size={12} />
                          Code verified. Your agreement is ready.
                        </p>
                        <button
                          type="button"
                          onClick={handleDownload}
                          disabled={pdfState === "working"}
                          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25 disabled:pointer-events-none disabled:opacity-60"
                        >
                          {pdfState === "working" ? (
                            <>
                              <Loader2 size={15} className="animate-spin" />
                              Preparing document…
                            </>
                          ) : (
                            <>
                              <Download size={15} />
                              Download signed agreement (PDF)
                            </>
                          )}
                        </button>

                        {pdfState === "done" && (
                          <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-brand-700">
                            <FileText size={12} />
                            Downloaded. Keep a copy — reference {issued?.reference}.
                          </p>
                        )}
                        {pdfError && (
                          <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-rose-600">
                            <AlertCircle size={12} />
                            {pdfError}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-5 text-[11px] font-medium leading-relaxed text-slate-400">
                Editing any detail after verification will ask you to enter the
                code again, so the PDF always matches what you signed.
              </p>
            </section>
          </div>
        </div>
      </form>
    </div>
  );
}
