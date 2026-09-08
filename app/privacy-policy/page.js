import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Wepzite — website design and development in Tamil Nadu.",
  alternates: { canonical: "/privacy-policy" },
};

// Clause text is carried over verbatim from the previous version of this page.
const clauses = [
    {
      icon: "Eye",
      title: "1.0 Operational Information Compilation",
      desc: "When interacting with our structural budget modules, contact consoles, or business routing systems, we collect essential project details. This dataset encompasses your Full Name, Telephone String, Email, Corporate Domain parameters, and explicit Feature Descriptions to optimize estimate compiling."
    },
    {
      icon: "Lock",
      title: "2.0 Code Integrity & Repository Confidentiality",
      desc: "All system source codes, integration webhooks, database configurations, and specific software frameworks engineeemerald under wepzite Technologies are handled inside highly protected development servers. As original application builds are deliveemerald via our managed system architecture, we protect your platform components against unauthorized public repository visibility."
    },
    {
      icon: "Database",
      title: "3.0 Commercial Asset & NDA Data Limits",
      desc: "We enforce strict commercial non-disclosure guidelines. Your proprietary transaction models, user lists, WhatsApp lead records, and regional business data mappings are never traded, externalized, or disclosed to third-party marketing brokers. Data profiles are reviewed purely to execute deployment and process your annual AMC assistance safely."
    },
    {
      icon: "ShieldAlert",
      title: "4.0 Abuse & Intellectual Theft Monitoring",
      desc: "To guarantee protection for our core application architectures, we monitor software license compliance metrics. If a platform code block is found to be duplicated or distributed to outside networks for malicious commercial copying, user identity metadata profiles will be immediately forwarded to State Government regulatory bodies for judicial processing."
    }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This framework governs the exact data retention, privacy matrices, and information compiling guidelines executed by wepzite Technologies. By configuring blueprints on our hub, you consent to the secure data monitoring loops itemized down below."
      clauses={clauses}
    />
  );
}
