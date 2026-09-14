import LegalPage from "@/components/LegalPage";
import { agreementParty } from "@/data/agreementTerms";

export const metadata = {
  title: "Payment & Refund Policy",
  description: "Payment & Refund Policy for Wepzite — website design and development in Tamil Nadu.",
  alternates: { canonical: "/payment-and-refund-policy" },
};

/**
 * Keep in step with app/terms/page.js and data/agreementTerms.js — the refund
 * window, renewal rule and client-delay periods must read the same in all three.
 */
const clauses = [
  {
    icon: "CreditCard",
    title: "1. Payment schedule",
    desc: "A 50% advance is required to confirm a project and start work. The remaining balance must be paid in full before final handover or go-live. Payments are accepted by UPI or bank transfer (NEFT / IMPS). We do not take card payments on this website.",
  },
  {
    icon: "Database",
    title: "2. What the price does not include",
    desc: "Third-party costs that are not part of your package, such as premium domains, paid plugins, payment gateway fees or API charges, are paid by the client. Work outside the agreed scope, including extra revisions, pages or features, is quoted and paid for separately.",
  },
  {
    icon: "RefreshCw",
    title: "3. Refunds",
    desc: `The advance is refunded in full if the project is cancelled within 7 days of payment and before any design or development work has started, or if Wepzite is unable to take up the project. Once work has started, or after 7 days, payments are non-refundable. To request a refund, contact us at ${agreementParty.email} or WhatsApp ${agreementParty.whatsapp}. Approved refunds are paid back to the original payment method within 7 working days.`,
  },
  {
    icon: "TriangleAlert",
    title: "4. Paused and closed projects",
    desc: "If the client does not respond or send required content for 15 days, the project is paused. If there is still no response 30 days after the last contact, the project is closed and the advance is not refunded. Restarting a closed project may need a new quotation.",
  },
  {
    icon: "LifeBuoy",
    title: "5. Yearly renewal",
    desc: "Your package covers the website for one year from go-live. To keep it live, hosted and supported, a renewal fee equal to the package price is due every year. If the renewal fee is not paid within 7 days of the due date, the website will be suspended and go offline until it is paid.",
  },
  {
    icon: "FileCheck",
    title: "6. Related terms",
    desc: "Ownership of the website and code, and the footer credit on every website we build, are covered in our Terms & Conditions.",
  },
];

export default function PaymentPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Payment & Refund Policy"
      updated="14 September 2026"
      intro="This policy explains how payments, refunds, paused projects and yearly renewals work for projects with Wepzite."
      clauses={clauses}
    />
  );
}
