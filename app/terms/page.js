"use client";
import React from "react";
import {
  Scale,
  ArrowLeft,
  FileCheck,
  Code2,
  ShieldAlert,
  BadgeAlert,
  HelpCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();

  const legalTerms = [
    {
      icon: <FileCheck className="w-4 h-4 text-sky-600" />,
      title: "1.0 Initial Onboarding & Capital Commitments",
      desc: "By initiating a custom development blueprint with our group, the client agrees to a milestone capitalization structure: a 50% deposit token of the full contract package is required to initialize repository architecture setup. Third-party domain registration costs are separate platform liabilities that must be cleared upfront at point of purchase. The final 50% balance must be settled immediately upon milestone delivery.",
    },
    {
      icon: <Code2 className="w-4 h-4 text-sky-600" />,
      title: "2.0 Intellectual Property & Mandated Credit Badges",
      desc: "To deliver elite, high-performance web systems at highly optimized cost structures, a non-removable 'Developed by wepzite.in' attribution credit badge is integrated onto all deployed platform footers. Removal or alteration of this infrastructure badge mandates a commercial buy-out execution penalty equivalent to triple (3x) the original package contract value. Component source code remains the managed service property of our group; if structural files are unauthorizedly modified, duplicated, or resold to outside entities, strict legal actions will be enforced through the State Government regulatory courts.",
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-sky-600" />,
      title: "3.0 Annual Maintenance Contract (AMC) & Service Boundaries",
      desc: "Continuous 24/7 web ecosystem stability is governed under a mandatory yearly Annual Maintenance Contract (AMC) structured at ₹3,000 per annum. This retainer covers complimentary lifelong assistance for minor metadata and text modifications (e.g., telephone string corrections, name adjustments, or email address updates). Any complex core logical modifications or layout grid transformations require standalone scope-of-work (SOW) quotes. Infrastructure serverless hosting remains provisioned completely free to support business growth; separate isolated hosting can be externalized at client cost anytime.",
    },
    {
      icon: <BadgeAlert className="w-4 h-4 text-sky-600" />,
      title: "4.0 Scope Variations & Satisfactory Clauses",
      desc: "We commit to delivering and refining your product architecture until your pre-agreed design requirements are completely fulfilled. However, any structural adjustments or custom system configurations requested mid-lifecycle that deviate from or expand upon the technical parameters spoken of during early negotiations will trigger auxiliary billing modifications matching the exact scope added.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 relative overflow-hidden text-left font-sans">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="bg-white   p-6 md:p-10  space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <span className="text-[9px] font-mono font-black uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-md">
              Legal 
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mt-4">
              Terms of Conditions
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-medium normal-case leading-relaxed">
            Please parse these conditions carefully before executing project
            orders. These operational rules formulate a legally binding
            commercial layout mapping your project lifecycle parameters with
            wepzite Technologies.
          </p>

          <div className="space-y-6 pt-4">
            {legalTerms.map((term, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/60 space-y-2 group hover:border-sky-300 transition-colors duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-3xs group-hover:text-sky-600 transition-colors">
                    {term.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight">
                    {term.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed normal-case pl-9.5">
                  {term.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
