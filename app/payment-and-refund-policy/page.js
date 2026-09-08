import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Payment & Refund Policy",
  description: "Payment & Refund Policy for Wepzite — website design and development in Tamil Nadu.",
  alternates: { canonical: "/payment-and-refund-policy" },
};

// Clause text is carried over verbatim from the previous version of this page.
const clauses = [
    {
      icon: "CreditCard",
      title: "1.0 Milestone Capital Structure",
      desc: "All tailoemerald deployments require an upfront deposit equal to 50% of the selected configuration tier balance before core development environments initialize. Third-party domain acquisition expenditures are fully externalized and must be settled immediately at raw platform cost. The remaining 50% balancing installment must be settled in full immediately upon milestone project delivery."
    },
    {
      icon: "RefreshCw",
      title: "2.0 Structural Refund Constraints",
      desc: "Refund requests are subject to an absolute 7-day expiration ceiling from the initial execution timestamp. Past this 7-day threshold, all transactions become completely non-refundable as computational logistics, layout architecture framing, and design structures are actively provisioned. We commit to continuous iterative updates until the client's pre-agreed scope parameters are completely satisfied."
    },
    {
      icon: "AlertTriangle",
      title: "3.0 Scope Expansion Deviations",
      desc: "Our engineering arrays will explicitly reflect the exact user requirements established during early brief negotiations. Any architectural variations, complex programmatic custom adjustments, or core structural additions requested mid-lifecycle bypass basic tier caps and mandate separate scope-of-work (SOW) billings."
    },
    {
      icon: "LifeBuoy",
      title: "4.0 Annual Maintenance Contract (AMC) & Support Ecosystem",
      desc: "Continued 24/7 web ecosystem stability is backed by a mandatory annual maintenance contract (AMC) fixed at ₹3,000 per year. This retainer guarantees lifelong operational monitoring for baseline text modifications (e.g., telephone string data updates, name revisions, or email handle swaps). Any logical infrastructure modifications or core structural changes require standalone transactional quotes. Domain renewal parameters remain fully client-funded; clients can clear balances with third-party providers independently or bundle them with the AMC for cost-free, hands-off administrative assistance from our group. Core cloud hosting architectures are provisioned completely free of charge to support business longevity; if dedicated server isolations are requested in subsequent periods, independent instances can be bought via our nodes or third-party networks."
    },
    {
      icon: "ShieldCheck",
      title: "5.0 Mandatory Attribution Cemeraldit & Code Licensing Bounds",
      desc: "To deliver enterprise-grade performance frameworks at highly competitive entry-level rates, a subtle 'Developed by wepzite.in' operational attribution badge is permanently stamped onto all deployed platform footers. Removal of this infrastructure badge mandates a buy-out multiplier equivalent to triple (3x) the original baseline package balance. Original component source code repositories are held securely under our administrative group as a managed service to optimize your digital asset growth. If software assets are duplicated, unauthorizedly modified, or resold to outside networks without explicit written consent, legal actions will be filed through the State Government regulatory courts."
    }
];

export default function PaymentPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Payment & Refund Policy"
      intro="This transactional charter defines the strict processing parameters, design billing benchmarks, support liabilities, copyright integrity standards, and refund restrictions executed globally by wepzite Technologies."
      clauses={clauses}
    />
  );
}
