"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Clock,
  ShieldCheck,
  Quote,
  Search,
  Smartphone,
  MessageCircle,
  Check,
} from "lucide-react";
import { openWhatsApp } from "@/utils/site";
import { Section, SectionHeader } from "@/components/ui/Section";

export default function BlogWepzite({ location = "Tamil Nadu" }) {
  const facts = [
    { icon: MapPin, label: "Serving", value: location },
    { icon: Users, label: "Businesses served", value: "30+ and counting" },
    { icon: Clock, label: "Typical delivery", value: "7 working days" },
    { icon: ShieldCheck, label: "After launch", value: "1 year free support" },
  ];

  const takeaways = [
    `Customers in ${location} search before they buy — if you're not there, a competitor is.`,
    "A slow or template site costs you enquiries you never find out about.",
    "Wepzite hand-codes every site and connects it to Google and WhatsApp.",
    "Fixed price, live in seven days, supported for a year.",
  ];

  return (
    <Section id="about" tone="light">
      <SectionHeader
        tone="light"
        badge="Guide"
        badgeIcon={Search}
        title="Why every business in"
        accent={location}
        subtitle={`How customers actually find local businesses today — and where Wepzite fits into that.`}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* ── ARTICLE ──────────────────────────────────────────────────── */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8"
        >
          {/* LEAD */}
          <p className="text-base leading-relaxed text-slate-700 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-emerald-600 sm:text-lg">
            Ten years ago, a shop in {location} could survive on word of mouth
            and a board outside. Today the first conversation a customer has
            about your business happens without you — on a phone, in a search
            box, comparing you against three competitors who all look equally
            plausible. A website is where that conversation is either won or
            quietly lost.
          </p>

          {/* ── */}
          <h3 className="mt-9 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Your customers in {location} are already searching
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Nobody asks a neighbour for a recommendation first any more. They
            type &ldquo;best diagnostics lab near me&rdquo; or &ldquo;interior
            designer in {location}&rdquo; and tap one of the first few results.
            That search is already happening for your trade, in your area,
            several times a day. The only question is whose name comes up. If
            you have no website and no Google listing, you are not losing to a
            better business — you are losing to a more visible one.
          </p>

          {/* INLINE STAT STRIP */}
          <div className="mt-6 grid grid-cols-3 divide-x divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/60 py-4">
            {[
              { value: "85%+", label: "of visitors arrive on a phone" },
              { value: "3 sec", label: "before a slow site loses them" },
              { value: "Page 1", label: "gets almost all the clicks" },
            ].map((stat) => (
              <div key={stat.label} className="px-3 text-center sm:px-4">
                <p className="text-base font-bold text-slate-900 sm:text-lg">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold leading-tight text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── */}
          <h3 className="mt-9 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            A website isn&apos;t a brochure. It&apos;s your best salesperson.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Most business owners think of a website as something you tick off a
            list — a digital visiting card. The ones who grow think of it
            differently. A good site answers the question the customer typed,
            shows proof that you are real and competent, and makes contacting
            you a single tap. It works at eleven at night when your shop is
            shut. It never has an off day.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The opposite is also true, and it is where most money is lost
            quietly. A site that takes six seconds to load on a 4G connection,
            or that pinches and scrolls awkwardly on a phone, sends people back
            to the results page — straight to the next business on the list. You
            never see that enquiry. You never know it existed.
          </p>

          {/* PULL QUOTE */}
          <figure className="my-8 rounded-2xl border-l-4 border-emerald-500 bg-slate-50/70 p-6">
            <Quote size={18} className="text-emerald-500" />
            <blockquote className="mt-3 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
              Most local businesses don&apos;t lose customers because their work
              is worse. They lose them because someone else was easier to find
              and easier to contact.
            </blockquote>
          </figure>

          {/* ── */}
          <h3 className="mt-9 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Where Wepzite comes in
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Until now a business in {location} had two options, and neither was
            good. A reseller would sell you a template on a monthly plan that
            nobody ever updates. Or an agency would quote more than a month of
            your revenue and hand you to an account manager. Wepzite exists
            because there was nothing sensible in between.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            We build every site by hand in{" "}
            <span className="font-semibold text-slate-900">
              React and Next.js
            </span>{" "}
            — the same stack behind the fastest sites on the internet — and then
            connect it to the things that actually bring you customers. Not just
            a website, but the whole path a customer takes from searching to
            messaging you:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              {
                icon: Search,
                title: "Found on Google",
                body: `Schema markup, sitemaps, Search Console and a fully optimised Google Business Profile, so you appear when someone in ${location} searches for what you do.`,
              },
              {
                icon: Smartphone,
                title: "Fast on a real phone",
                body: "Compressed images and hand-written code, tested on actual devices on 4G — not just a developer's laptop.",
              },
              {
                icon: MessageCircle,
                title: "Straight into WhatsApp",
                body: "Every button opens a pre-filled chat, so an interested visitor becomes a conversation instead of a form you check next week.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon size={15} className="text-emerald-600" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* ── */}
          <h3 className="mt-9 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Why businesses in {location} stay with us
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            More than thirty businesses have launched with Wepzite, and the
            reason they recommend us is rarely the code. It is that they talk to
            the person writing it. There is no ticket queue, no account manager
            relaying messages, no invoice for changing a phone number. One fixed
            price agreed before we start, a site live in seven working days, and
            a full year of support afterwards — included, not sold back to you.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            You own the code, the domain and the hosting outright. If you ever
            want to move elsewhere, everything goes with you. We think that is
            the only honest way to build something a business depends on.
          </p>

          {/* TAKEAWAYS */}
          <div className="mt-9 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-wide text-emerald-600">
              In short
            </p>
            <ul className="mt-4 space-y-2.5">
              {takeaways.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-[13px] leading-relaxed text-slate-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-28">
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                    <Icon size={17} className="text-emerald-600" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      {label}
                    </dt>
                    <dd className="mt-0.5 truncate text-sm font-bold text-slate-900">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* SIDEBAR CTA */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 p-6">
              <p className="text-sm font-bold leading-snug text-white">
                Not sure what your business actually needs?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Tell us what you have already — a site, a Google listing, or
                nothing at all — and we&apos;ll tell you honestly what to fix
                first.
              </p>
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    `Hi Wepzite, I run a business in ${location}. Can you tell me what I need to get found online?`,
                  )
                }
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white active:translate-y-0"
              >
                <MessageCircle size={14} />
                Ask on WhatsApp
              </button>
            </div>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}