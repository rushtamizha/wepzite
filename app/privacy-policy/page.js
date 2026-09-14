import LegalPage from "@/components/LegalPage";
import { agreementParty } from "@/data/agreementTerms";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Wepzite — website design and development in Tamil Nadu.",
  alternates: { canonical: "/privacy-policy" },
};

/**
 * Written to match what the site actually does, so check it again whenever
 * that changes:
 *  - Contact and lead forms only open WhatsApp; nothing is posted to our server.
 *  - /agreement and /quotation build their PDFs in the browser; only the
 *    agreement access code is sent to /api/agreement/verify.
 *  - app/layout.js loads Vercel Analytics, the Google Ads tag and the Meta Pixel.
 * Adding a form that saves data, a new tracker or a payment gateway means
 * updating the clauses below and the "Last updated" date.
 */
const OWNER = agreementParty.legalName.trim();
const EMAIL = agreementParty.email;
const WHATSAPP = agreementParty.whatsapp;

const clauses = [
  {
    icon: "FileCheck",
    title: "1. Who we are",
    desc: `This website (wepzite.in) is run by ${OWNER}, trading as Wepzite, based in ${agreementParty.jurisdiction}. ${OWNER} is responsible for the personal information described in this policy. You can reach us at ${EMAIL} or on WhatsApp at ${WHATSAPP}.`,
  },
  {
    icon: "Eye",
    title: "2. What we collect",
    desc: "When you use our contact or quote forms, you enter your name, business name, phone number, the service you need, your budget and any message. Submitting the form opens WhatsApp on your own device with that message ready to send; the form itself does not save it on our website. If you become a client, we also collect your email address, postal address, project details and payment references (such as a UPI or bank transfer reference). We never collect card numbers or banking passwords on this website.",
  },
  {
    icon: "Code2",
    title: "3. Analytics, ads and cookies",
    desc: "We use Vercel Analytics to count page visits in aggregate, so we can see which pages are useful. We also run ads, and the site loads the Google Ads tag and the Meta (Facebook) Pixel. These use cookies and similar technology to record visits and actions on our site, so we can measure whether our ads work and show our ads to people who have visited. Google and Meta handle this data under their own privacy policies. You can limit ad personalisation in your Google and Meta ad settings, or block cookies in your browser.",
  },
  {
    icon: "Database",
    title: "4. How we use your information",
    desc: "We use your information to reply to your enquiry, prepare quotations and service agreements, build and support your project, keep billing records, and measure our advertising. We do not sell, rent or trade your personal information.",
  },
  {
    icon: "ShieldCheck",
    title: "5. Who we share it with",
    desc: "We share information only with the services needed to run our business: WhatsApp (Meta), which carries our messages; Vercel, which hosts this website; Cloudinary, which serves its images; and Google and Meta for the advertising described above. We may also disclose information if Indian law or a government authority requires it.",
  },
  {
    icon: "Lock",
    title: "6. Where it is kept and for how long",
    desc: "Enquiry and client details are kept in our WhatsApp chats and in our own customer management app, which stores records offline on our phone. Enquiries that do not become projects are deleted within 1 year. Client records are kept for 3 years after a project ends, for billing, tax and support, and then deleted. We take reasonable steps to protect this information, but no method of storage or transmission is completely secure.",
  },
  {
    icon: "Scale",
    title: "7. Your rights",
    desc: `Under India's Digital Personal Data Protection Act, 2023, you can ask to see the personal information we hold about you, correct it, delete it, or withdraw your consent to us using it. Send your request to ${EMAIL} or WhatsApp ${WHATSAPP}. We will respond within 30 days. ${OWNER} also handles any complaint about how your information has been used.`,
  },
  {
    icon: "LifeBuoy",
    title: "8. Websites we build for clients",
    desc: "Websites we build for our clients are run by those clients. Any information their visitors or customers provide on those sites belongs to, and is handled by, the client under the client's own privacy policy. We do not access that data.",
  },
  {
    icon: "ShieldAlert",
    title: "9. Children",
    desc: "Our services are meant for businesses and adults. We do not knowingly collect personal information from anyone under 18. If you believe a child has sent us their details, contact us and we will delete them.",
  },
  {
    icon: "RefreshCw",
    title: "10. Changes to this policy",
    desc: "We may update this policy when our services or the tools we use change. The date at the top of this page shows when it was last updated.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="14 September 2026"
      intro="This policy explains what personal information Wepzite collects when you visit this website or work with us, how we use it, who we share it with, and the choices you have."
      clauses={clauses}
    />
  );
}
