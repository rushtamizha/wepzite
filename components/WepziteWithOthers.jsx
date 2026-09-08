"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus, Scale } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const columns = ["Wepzite", "Freelancer", "Local agency", "DIY builder"];

// yes | no | partial
const rows = [
  {
    criteria: "Hand-coded, not a template",
    detail: "React / Next.js built from scratch",
    values: ["yes", "partial", "partial", "no"],
  },
  {
    criteria: "Loads in under 2 seconds",
    detail: "90+ mobile PageSpeed at handover",
    values: ["yes", "partial", "partial", "no"],
  },
  {
    criteria: "SEO configuemerald at launch",
    detail: "Schema, sitemap, Search Console",
    values: ["yes", "no", "partial", "no"],
  },
  {
    criteria: "Google Business Profile set up",
    detail: "So you appear in local map results",
    values: ["yes", "no", "partial", "no"],
  },
  {
    criteria: "Fixed price, agreed up front",
    detail: "No hourly creep, no surprise invoices",
    values: ["yes", "partial", "no", "yes"],
  },
  {
    criteria: "No monthly platform fee",
    detail: "You own the code outright",
    values: ["yes", "yes", "partial", "no"],
  },
  {
    criteria: "Support after launch",
    detail: "One full year, included",
    values: ["yes", "no", "partial", "no"],
  },
  {
    criteria: "Reachable when it matters",
    detail: "Direct WhatsApp to the developer",
    values: ["yes", "partial", "no", "no"],
  },
];

const marks = {
  yes: { Icon: Check, className: "bg-emerald-50 text-emerald-600", label: "Yes" },
  partial: { Icon: Minus, className: "bg-amber-50 text-amber-600", label: "Sometimes" },
  no: { Icon: X, className: "bg-slate-100 text-slate-400", label: "No" },
};

function Mark({ value }) {
  const { Icon, className, label } = marks[value];
  return (
    <span
      className={`mx-auto flex h-7 w-7 items-center justify-center rounded-lg ${className}`}
      title={label}
    >
      <Icon size={14} strokeWidth={3} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default function WepziteVsOthers() {
  return (
    <Section id="compare" tone="light">
      <SectionHeader
        tone="light"
        badge="Honest Comparison"
        badgeIcon={Scale}
        title="How we stack up against"
        accent="the other options"
        subtitle="You have four realistic choices for getting a website built. Here is where each one usually lands — including the parts where the others do fine."
      />

      {/* DESKTOP TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="hidden overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm lg:block"
      >
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Comparison of Wepzite against freelancers, local agencies and DIY
            website builders
          </caption>
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th scope="col" className="w-[38%] px-6 py-4 text-[10px] font-black uppercase tracking-wide text-slate-500">
                What you get
              </th>
              {columns.map((col, idx) => (
                <th
                  key={col}
                  scope="col"
                  className={`px-4 py-4 text-center text-[10px] font-black uppercase tracking-wide ${
                    idx === 0 ? "bg-emerald-50/70 text-emerald-700" : "text-slate-500"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ criteria, detail, values }) => (
              <tr
                key={criteria}
                className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/60"
              >
                <th scope="row" className="px-6 py-4 text-left align-middle">
                  <span className="block text-sm font-bold text-slate-900">
                    {criteria}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-medium text-slate-500">
                    {detail}
                  </span>
                </th>
                {values.map((value, idx) => (
                  <td
                    key={columns[idx]}
                    className={`px-4 py-4 align-middle ${idx === 0 ? "bg-emerald-50/40" : ""}`}
                  >
                    <Mark value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* MOBILE CARDS */}
      <div className="space-y-3 lg:hidden">
        {rows.map(({ criteria, detail, values }, idx) => (
          <motion.div
            key={criteria}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (idx % 3) * 0.05 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-bold text-slate-900">{criteria}</p>
            <p className="mt-0.5 text-[11px] font-medium text-slate-500">{detail}</p>
            <dl className="mt-4 grid grid-cols-4 gap-2 border-t border-slate-100 pt-4">
              {values.map((value, i) => (
                <div key={columns[i]} className="text-center">
                  <dt
                    className={`text-[9px] font-black uppercase leading-tight ${
                      i === 0 ? "text-emerald-600" : "text-slate-400"
                    }`}
                  >
                    {columns[i]}
                  </dt>
                  <dd className="mt-1.5">
                    <Mark value={value} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ))}
      </div>

      {/* LEGEND */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {Object.entries(marks).map(([key, { Icon, className, label }]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`flex h-5 w-5 items-center justify-center rounded-md ${className}`}>
              <Icon size={11} strokeWidth={3} />
            </span>
            <span className="text-[11px] font-semibold text-slate-500">{label}</span>
          </span>
        ))}
      </div>
    </Section>
  );
}