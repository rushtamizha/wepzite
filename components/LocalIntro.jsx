import React from "react";
import { MapPin, Building2, Compass } from "lucide-react";

/**
 * The block that makes a location page worth indexing.
 *
 * Everything else on a town page is the same site-wide sales content. This
 * section is the part that is true of exactly one place: the town's own note,
 * the district's economic profile, and the industries that actually operate
 * there. It renders high on the page, above the generic sections, because
 * that is where both readers and crawlers decide whether the page is about
 * their town or is just a template with a name swapped in.
 *
 * Server component on purpose — 291 town pages render this, and it is
 * nothing but text and links, so there is no reason to ship JS for it.
 */
export default function LocalIntro({ placeName, districtName, note, profile, economy = [], isDistrict = false }) {
  return (
    <section className="relative w-full bg-slate-50 px-4 py-14">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white px-3 py-1">
              <MapPin size={12} className="text-brand-600" />
              <span className="text-[10px] font-black uppercase tracking-wide text-brand-700">
                {isDistrict ? `${districtName} District` : `${placeName}, ${districtName}`}
              </span>
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Building websites for businesses in{" "}
              <span className="text-brand-600">{placeName}</span>
            </h2>

            <p className="mt-5 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              {note}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              {profile}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              We build for that. A site for a business in {placeName} is designed around
              who actually buys from you here — how they search, what they compare before
              they call, and whether they are reaching you from a phone on a patchy
              connection or from a buyer&apos;s desk in another state.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-600">
                  <Building2 size={16} />
                </span>
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900">
                  What drives business here
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {economy.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                <Compass size={16} className="mt-0.5 flex-shrink-0 text-brand-600" />
                <p className="text-xs leading-relaxed text-slate-500">
                  Every site we ship for {districtName} is tested on a throttled mobile
                  connection first, then wired to Google Business Profile and WhatsApp so
                  local enquiries reach you the same way your customers already talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
