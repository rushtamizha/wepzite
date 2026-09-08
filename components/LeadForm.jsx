"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  ShieldCheck,
  Clock,
  BadgeIndianRupee,
  AlertCircle,
} from "lucide-react";
import { openWhatsApp } from "@/utils/site";
import { Section, SectionHeader } from "@/components/ui/Section";

const services = [
  "New website",
  "emeraldesign of my existing site",
  "Google Business Profile setup",
  "SEO / getting found on Google",
  "Mobile app",
  "Something else",
];

const budgets = [
  "Under ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹60,000",
  "Above ₹60,000",
  "Not sure yet",
];

const assurances = [
  { icon: Clock, text: "We reply within a few hours, not days" },
  { icon: BadgeIndianRupee, text: "A fixed quote, not a starting price" },
  { icon: ShieldCheck, text: "No spam, no cold calls, ever" },
];

const emptyForm = {
  name: "",
  business: "",
  phone: "",
  service: services[0],
  budget: budgets[1],
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name";
    // Indian mobile: optional +91 / 0, then 6-9 followed by 9 digits.
    if (!/^(\+?91[-\s]?|0)?[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      next.phone = "Enter a valid 10-digit mobile number";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const lines = [
      "Hi Wepzite, I'd like a quote.",
      "",
      `Name: ${form.name.trim()}`,
      form.business.trim() ? `Business: ${form.business.trim()}` : null,
      `Phone: ${form.phone.trim()}`,
      `Looking for: ${form.service}`,
      `Budget: ${form.budget}`,
      form.message.trim() ? `Details: ${form.message.trim()}` : null,
    ].filter(Boolean);

    openWhatsApp(lines.join("\n"));

    // Optional: also record the lead server-side. Uncomment once /api/lead exists.
    // fetch("/api/lead", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // }).catch(() => {});
  };

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 ${
      errors[field] ? "border-emerald-300" : "border-slate-200"
    }`;

  return (
    <Section id="contact" tone="light">
      <SectionHeader
        tone="light"
        badge="Get a Free Quote"
        badgeIcon={Send}
        title="Tell us about your business and"
        accent="we'll send you a price"
        subtitle="Two minutes to fill in. It opens WhatsApp with your details ready to send, so there's nothing to wait for."
      />

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="lead-name"
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                Your name *
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                placeholder="Karthik R"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "lead-name-error" : undefined}
                className={fieldClass("name")}
              />
              {errors.name && (
                <p
                  id="lead-name-error"
                  className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-600"
                >
                  <AlertCircle size={11} />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lead-business"
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                Business name
              </label>
              <input
                id="lead-business"
                name="business"
                type="text"
                autoComplete="organization"
                value={form.business}
                onChange={update("business")}
                placeholder="Sri Balaji Traders"
                className={fieldClass("business")}
              />
            </div>

            <div>
              <label
                htmlFor="lead-phone"
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                WhatsApp number *
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="98765 43210"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "lead-phone-error" : undefined}
                className={fieldClass("phone")}
              />
              {errors.phone && (
                <p
                  id="lead-phone-error"
                  className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-600"
                >
                  <AlertCircle size={11} />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lead-service"
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                What do you need?
              </label>
              <select
                id="lead-service"
                name="service"
                value={form.service}
                onChange={update("service")}
                className={`${fieldClass("service")} cursor-pointer`}
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="lead-budget"
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                Rough budget
              </label>
              <select
                id="lead-budget"
                name="budget"
                value={form.budget}
                onChange={update("budget")}
                className={`${fieldClass("budget")} cursor-pointer`}
              >
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="lead-message"
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500"
              >
                Anything else we should know?
              </label>
              <textarea
                id="lead-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="We're a diagnostics lab in Madurai. We need online booking and to show up when people search for blood tests nearby."
                className={`${fieldClass("message")} resize-y`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 active:translate-y-0"
          >
            <Send size={15} />
            Send on WhatsApp
          </button>

          <p className="mt-3 text-center text-[11px] font-medium text-slate-400">
            This opens WhatsApp with your details filled in. Nothing is sent until
            you press send there.
          </p>
        </motion.form>

        {/* ASSURANCES */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-7">
            <h3 className="text-base font-bold text-slate-900">
              What happens after you send it
            </h3>
            <ol className="mt-5 space-y-4">
              {[
                "We read it and check your current site or Google listing if you have one.",
                "You get a fixed quote and a realistic timeline — not a range.",
                "If it looks right, we start. If not, no follow-up calls.",
              ].map((line, idx) => (
                <li key={line} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                    {idx + 1}
                  </span>
                  <span className="text-xs leading-relaxed text-slate-600">
                    {line}
                  </span>
                </li>
              ))}
            </ol>

            <ul className="mt-7 space-y-3 border-t border-slate-200 pt-6">
              {assurances.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="shrink-0 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-600">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}