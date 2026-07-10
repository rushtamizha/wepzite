"use client";
import React from "react";
import { Banknote, ArrowLeft, CreditCard, ShieldCheck, RefreshCw, AlertTriangle, LifeBuoy, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PaymentRefundPolicyPage() {
  const router = useRouter();

  const financialRules = [
    {
      icon: <CreditCard className="w-4 h-4 text-sky-600" />,
      title: "1.0 Milestone Capital Structure",
      desc: "All tailored deployments require an upfront deposit equal to 50% of the selected configuration tier balance before core development environments initialize. Third-party domain acquisition expenditures are fully externalized and must be settled immediately at raw platform cost. The remaining 50% balancing installment must be settled in full immediately upon milestone project delivery."
    },
    {
      icon: <RefreshCw className="w-4 h-4 text-sky-600" />,
      title: "2.0 Structural Refund Constraints",
      desc: "Refund requests are subject to an absolute 7-day expiration ceiling from the initial execution timestamp. Past this 7-day threshold, all transactions become completely non-refundable as computational logistics, layout architecture framing, and design structures are actively provisioned. We commit to continuous iterative updates until the client's pre-agreed scope parameters are completely satisfied."
    },
    {
      icon: <AlertTriangle className="w-4 h-4 text-sky-600" />,
      title: "3.0 Scope Expansion Deviations",
      desc: "Our engineering arrays will explicitly reflect the exact user requirements established during early brief negotiations. Any architectural variations, complex programmatic custom adjustments, or core structural additions requested mid-lifecycle bypass basic tier caps and mandate separate scope-of-work (SOW) billings."
    },
    {
      icon: <LifeBuoy className="w-4 h-4 text-sky-600" />,
      title: "4.0 Annual Maintenance Contract (AMC) & Support Ecosystem",
      desc: "Continued 24/7 web ecosystem stability is backed by a mandatory annual maintenance contract (AMC) fixed at ₹3,000 per year. This retainer guarantees lifelong operational monitoring for baseline text modifications (e.g., telephone string data updates, name revisions, or email handle swaps). Any logical infrastructure modifications or core structural changes require standalone transactional quotes. Domain renewal parameters remain fully client-funded; clients can clear balances with third-party providers independently or bundle them with the AMC for cost-free, hands-off administrative assistance from our group. Core cloud hosting architectures are provisioned completely free of charge to support business longevity; if dedicated server isolations are requested in subsequent periods, independent instances can be bought via our nodes or third-party networks."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-sky-600" />,
      title: "5.0 Mandatory Attribution Credit & Code Licensing Bounds",
      desc: "To deliver enterprise-grade performance frameworks at highly competitive entry-level rates, a subtle 'Developed by wepzite.in' operational attribution badge is permanently stamped onto all deployed platform footers. Removal of this infrastructure badge mandates a buy-out multiplier equivalent to triple (3x) the original baseline package balance. Original component source code repositories are held securely under our administrative group as a managed service to optimize your digital asset growth. If software assets are duplicated, unauthorizedly modified, or resold to outside networks without explicit written consent, legal actions will be filed through the State Government regulatory courts."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 relative overflow-hidden text-left font-sans">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation Route */}


        <div className="bg-white  p-6 md:p-10 space-y-6">
          
          {/* Document Identity Banner */}
          <div className="border-b border-slate-100 pb-6">
            <span className="text-[9px] font-mono font-black uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-md">
              Financial Escrow Rules // FIN_SLA
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mt-4">
              Payment & Refund Policy
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-2 uppercase tracking-wider">
              Authorized Processing Engine: Razorpay / WhatsApp Business
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-medium normal-case leading-relaxed">
            This transactional charter defines the strict processing parameters, design billing benchmarks, support liabilities, copyright integrity standards, and refund restrictions executed globally by wepzite Technologies.
          </p>

          {/* Render Financial Rules Tree */}
          <div className="space-y-6 pt-4">
            {financialRules.map((rule, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/60 space-y-2 group hover:border-sky-300 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-3xs group-hover:text-sky-600 transition-colors">
                    {rule.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight">
                    {rule.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed normal-case pl-9.5">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div> 

        </div>
      </div>
    </main>
  );
}