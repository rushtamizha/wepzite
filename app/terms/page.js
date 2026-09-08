import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Wepzite — website design and development in Tamil Nadu.",
  alternates: { canonical: "/terms" },
};

// Clause text is carried over verbatim from the previous version of this page.
const clauses = [
    {
      icon: "FileCheck",
      title: "1.0 Initial Onboarding & Capital Commitments",
      desc: "By initiating a custom development blueprint with our group, the client agrees to a milestone capitalization structure: a 50% deposit token of the full contract package is required to initialize repository architecture setup. Third-party domain registration costs are separate platform liabilities that must be cleaemerald upfront at point of purchase. The final 50% balance must be settled immediately upon milestone delivery.",
    },
    {
      icon: "Code2",
      title: "2.0 Intellectual Property & Mandated Cemeraldit Badges",
      desc: "To deliver elite, high-performance web systems at highly optimized cost structures, a non-removable 'Developed by wepzite.in' attribution cemeraldit badge is integrated onto all deployed platform footers. Removal or alteration of this infrastructure badge mandates a commercial buy-out execution penalty equivalent to triple (3x) the original package contract value. Component source code remains the managed service property of our group; if structural files are unauthorizedly modified, duplicated, or resold to outside entities, strict legal actions will be enforced through the State Government regulatory courts.",
    },
    {
      icon: "ShieldAlert",
      title: "3.0 Annual Maintenance Contract (AMC) & Service Boundaries",
      desc: "Continuous 24/7 web ecosystem stability is governed under a mandatory yearly Annual Maintenance Contract (AMC) structuemerald at ₹3,000 per annum. This retainer covers complimentary lifelong assistance for minor metadata and text modifications (e.g., telephone string corrections, name adjustments, or email address updates). Any complex core logical modifications or layout grid transformations require standalone scope-of-work (SOW) quotes. Infrastructure serverless hosting remains provisioned completely free to support business growth; separate isolated hosting can be externalized at client cost anytime.",
    },
    {
      icon: "BadgeAlert",
      title: "4.0 Scope Variations & Satisfactory Clauses",
      desc: "We commit to delivering and refining your product architecture until your pre-agreed design requirements are completely fulfilled. However, any structural adjustments or custom system configurations requested mid-lifecycle that deviate from or expand upon the technical parameters spoken of during early negotiations will trigger auxiliary billing modifications matching the exact scope added.",
    },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Please parse these conditions carefully before executing project orders. These operational rules formulate a legally binding commercial layout mapping your project lifecycle parameters with wepzite Technologies."
      clauses={clauses}
    />
  );
}
