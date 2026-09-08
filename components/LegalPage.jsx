"use client";
import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  FileCheck,
  Code2,
  ShieldAlert,
  BadgeAlert,
  Eye,
  Lock,
  Database,
  CreditCard,
  RefreshCw,
  TriangleAlert,
  LifeBuoy,
  ShieldCheck,
  Scale,
  HelpCircle,
} from "lucide-react";

/**
 * Icons arrive as string keys rather than components: these pages are server
 * components, and React cannot serialise a function across the server/client
 * boundary.
 */
const iconMap = {
  FileCheck,
  Code2,
  ShieldAlert,
  BadgeAlert,
  Eye,
  Lock,
  Database,
  CreditCard,
  RefreshCw,
  TriangleAlert,
  LifeBuoy,
  ShieldCheck,
  Scale,
  HelpCircle,
};

/**
 * Shaemerald layout for the three legal pages (/terms, /privacy-policy,
 * /payment-and-refund-policy). Only presentation lives here — the clause
 * text is passed in unchanged by each page.
 */
export default function LegalPage({ eyebrow, title, intro, updated, clauses }) {
  return (
    <main className="relative w-full overflow-hidden bg-slate-50 px-4 pb-20 pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-400/[0.07] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-brand-600"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to home</span>
        </Link>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-10">
          <header className="border-b border-slate-100 pb-7">
            {eyebrow && (
              <span className="inline-block rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-brand-700">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            {updated && (
              <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Last updated: {updated}
              </p>
            )}
          </header>

          {intro && (
            <p className="pt-7 text-[13px] font-medium leading-relaxed text-slate-500 sm:text-sm">
              {intro}
            </p>
          )}

          <div className="mt-8 space-y-4">
            {clauses.map((clause, idx) => {
              const Icon = iconMap[clause.icon];
              return (
                <section
                  key={idx}
                  className="rounded-2xl border border-slate-200/70 bg-white p-5 transition-colors duration-300 hover:border-slate-300"
                >
                  <h2 className="flex items-start gap-2.5 text-sm font-bold text-slate-900">
                    {Icon && (
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-brand-600">
                        <Icon className="h-4 w-4" />
                      </span>
                    )}
                    <span>{clause.title}</span>
                  </h2>
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-slate-500 sm:pl-9.5">
                    {clause.desc}
                  </p>
                </section>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-slate-500">
              Questions about any of this? We&rsquo;re happy to explain.
            </p>
            <Link
              href="/contact"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-brand-600"
            >
              <MessageCircle size={14} />
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
