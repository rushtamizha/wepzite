"use client";
import React from "react";
import { Lock, ArrowLeft, Eye, Database, ShieldAlert, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
  const router = useRouter();

  const privacyClauses = [
    {
      icon: <Eye className="w-4 h-4 text-sky-600" />,
      title: "1.0 Operational Information Compilation",
      desc: "When interacting with our structural budget modules, contact consoles, or business routing systems, we collect essential project details. This dataset encompasses your Full Name, Telephone String, Email, Corporate Domain parameters, and explicit Feature Descriptions to optimize estimate compiling."
    },
    {
      icon: <Lock className="w-4 h-4 text-sky-600" />,
      title: "2.0 Code Integrity & Repository Confidentiality",
      desc: "All system source codes, integration webhooks, database configurations, and specific software frameworks engineered under wepzite Technologies are handled inside highly protected development servers. As original application builds are delivered via our managed system architecture, we protect your platform components against unauthorized public repository visibility."
    },
    {
      icon: <Database className="w-4 h-4 text-sky-600" />,
      title: "3.0 Commercial Asset & NDA Data Limits",
      desc: "We enforce strict commercial non-disclosure guidelines. Your proprietary transaction models, user lists, WhatsApp lead records, and regional business data mappings are never traded, externalized, or disclosed to third-party marketing brokers. Data profiles are reviewed purely to execute deployment and process your annual AMC assistance safely."
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-sky-600" />,
      title: "4.0 Abuse & Intellectual Theft Monitoring",
      desc: "To guarantee protection for our core application architectures, we monitor software license compliance metrics. If a platform code block is found to be duplicated or distributed to outside networks for malicious commercial copying, user identity metadata profiles will be immediately forwarded to State Government regulatory bodies for judicial processing."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 relative overflow-hidden text-left font-sans">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto relative z-10">


        <div className="bg-white rounded-3xl p-6 md:p-10  space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <span className="text-[9px] font-mono font-black uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-md">
              Governance Architecture // V2.4
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mt-4">
              Privacy Architecture Rules
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-2 uppercase tracking-wider">
              Last System Synchronization: July 2026
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-medium normal-case leading-relaxed">
            This framework governs the exact data retention, privacy matrices, and information compiling guidelines executed by wepzite Technologies. By configuring blueprints on our hub, you consent to the secure data monitoring loops itemized down below.
          </p>

          <div className="space-y-6 pt-4">
            {privacyClauses.map((clause, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/60 space-y-2 group hover:border-sky-300 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-3xs group-hover:text-sky-600 transition-colors">
                    {clause.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight">
                    {clause.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed normal-case pl-9.5">
                  {clause.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}