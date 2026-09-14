import LegalPage from "@/components/LegalPage";
import { agreementParty } from "@/data/agreementTerms";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Wepzite — website design and development in Tamil Nadu.",
  alternates: { canonical: "/terms" },
};

/**
 * Keep in step with data/agreementTerms.js (the signed agreement) and
 * app/payment-and-refund-policy/page.js. The refund window, renewal rule,
 * client-delay periods, ownership and footer-credit fee are stated in all
 * three; a client will quote whichever one favours them.
 */
const OWNER = agreementParty.legalName.trim();

const clauses = [
  {
    icon: "FileCheck",
    title: "1. About these terms",
    desc: `These terms apply to the website design, development and digital services provided by ${OWNER}, trading as Wepzite ("Wepzite", "we"), based in ${agreementParty.jurisdiction}. By confirming a quotation, paying an advance or signing our service agreement, you ("the client") accept these terms.`,
  },
  {
    icon: "BadgeAlert",
    title: "2. Quotations and scope",
    desc: "Every project starts from a quotation that lists the scope, price and delivery time, and is valid until the date shown on it. We deliver what the quotation or selected package includes. Revisions are limited to the selected package, and any extra revisions, pages or features requested later are quoted and charged separately.",
  },
  {
    icon: "CreditCard",
    title: "3. Payments",
    desc: "A 50% advance is required to start work, and the remaining balance must be paid in full before final handover or go-live. Third-party costs that are not part of your package, such as premium domains, paid plugins, payment gateway fees or API charges, are paid by the client. Full details are in our Payment & Refund Policy.",
  },
  {
    icon: "HelpCircle",
    title: "4. Timelines and client delays",
    desc: "The delivery time starts once the advance is received and all content, images and access details have been shared. If the client does not respond or send required content for 15 days, the project is paused. If there is still no response 30 days after the last contact, the project is closed and the advance is not refunded. Restarting a closed project may need a new quotation.",
  },
  {
    icon: "RefreshCw",
    title: "5. Refunds",
    desc: "The advance is refunded in full if the project is cancelled within 7 days of payment and before any design or development work has started, or if Wepzite is unable to take up the project. Once work has started, or after 7 days, payments are non-refundable.",
  },
  {
    icon: "TriangleAlert",
    title: "6. Yearly renewal",
    desc: "Your package covers the website for one year from go-live. To keep the website live, hosted and supported, a renewal fee equal to the package price is due every year. If the renewal fee is not paid within 7 days of the due date, the website will be suspended and go offline until it is paid.",
  },
  {
    icon: "Code2",
    title: "7. Ownership of the website and code",
    desc: "Wepzite keeps ownership of the source code, design files and components used to build your website. Once the project is paid in full, and while renewals are paid, the client has a licence to use the website for their business. The client may not copy, resell, or modify the code, or move it to another developer or host, without our written permission. Your own content, such as your logo, text, photos and product details, remains yours. We may show the work in our portfolio.",
  },
  {
    icon: "ShieldAlert",
    title: "8. Footer credit",
    desc: "Every website we build carries a \"Developed by wepzite.in\" credit in its footer. Removing or hiding this credit without our written permission makes a removal fee payable, equal to three times (3x) the project price.",
  },
  {
    icon: "ShieldCheck",
    title: "9. Client responsibilities",
    desc: "The client must provide accurate information, give feedback on time, and only supply content they have the right to use. The client is responsible for the legality of the content, products and services shown on their website.",
  },
  {
    icon: "Scale",
    title: "10. Limitation of liability",
    desc: "Wepzite's total liability for any project is limited to the amount the client has paid for that project. We are not responsible for losses caused by third-party services we do not control, such as hosting providers, domain registrars, WhatsApp, Google or payment gateways, or by content the client supplies.",
  },
  {
    icon: "Lock",
    title: "11. Governing law",
    desc: `These terms are governed by the laws of India, and any dispute is subject to the courts of ${agreementParty.jurisdiction}.`,
  },
  {
    icon: "LifeBuoy",
    title: "12. Changes to these terms",
    desc: "We may update these terms from time to time; the date at the top of this page shows the latest version. Projects already confirmed continue on the terms that applied when they were confirmed.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="14 September 2026"
      intro="Please read these terms before confirming a project with Wepzite. They explain how quotations, payments, refunds, renewals and ownership work."
      clauses={clauses}
    />
  );
}
