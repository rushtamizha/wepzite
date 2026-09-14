/**
 * Content for the client agreement at /agreement.
 *
 * Kept as data, not JSX, because the same clauses have to render twice — once
 * as the on-screen scrollable document and once into the generated PDF. One
 * source means the signed PDF and the terms the client actually scrolled
 * through can never be different documents.
 */

// ---------------------------------------------------------------------------
// LEGAL PARTY DETAILS
// ---------------------------------------------------------------------------
// ⚠️ These print onto a signed contract, so they need to be exactly right.
// Every value below was reconciled against what the site already publishes,
// and the site does not agree with itself:
//
//  - Entity name: /terms, /privacy-policy and /payment-and-refund-policy all
//    say "wepzite Technologies". `siteConfig.companyName` says "Wepzite" and
//    `siteConfig.legalName` (used by app/layout.js) is not defined at all.
//  - Email: utils/site.js has "wepzitedev@gmailcom" (no dot) and
//    districtsData.js has "wepzitedev@gmail.com.com" (doubled). Both invalid.
//  - Phone: districtsData.js PHONE is +91-96026850192, while the WhatsApp
//    number actually linked everywhere is 919626850192. Different numbers.
//
// The working WhatsApp number is used below because it is the one on every
// live link. CONFIRM THE ENTITY NAME, EMAIL AND PHONE BEFORE ISSUING A REAL
// AGREEMENT — a contract naming the wrong party or an unreachable address is
// a problem no amount of styling fixes.
export const agreementParty = {
  legalName: "Eswaran K ",
  tradingName: "Wepzite",
  slogan: "Premium Websites",
  whatsapp: "+91 96268 50192",
  email: "wepzitedev@gmail.com", // TODO: confirm — repo has two invalid spellings
  website: "Wepzite.in",
  jurisdiction: "Tamil Nadu, India",
  governingLaw: "the laws of India",
};

// ---------------------------------------------------------------------------
// THE CLAUSES
// ---------------------------------------------------------------------------
// Clauses 05–08 (client delays, renewal, refunds, ownership and the footer
// credit) are also stated on /terms and /payment-and-refund-policy. Change all
// three together: a client will quote whichever version favours them.
export const agreementTerms = [
  {
    n: "01",
    title: "Scope of Work",
    body: "Wepzite will deliver the selected package according to published package inclusions.",
  },
  {
    n: "02",
    title: "Project Value",
    body: "Includes Total Project Cost, Advance Payment Received, and Remaining Balance Due on Delivery.",
  },
  {
    n: "03",
    title: "Timeline",
    body: "Delivery within the agreed working days after advance payment and required content/assets submission.",
  },
  {
    n: "04",
    title: "Revisions",
    body: "Limited to the selected package. Extra revisions are chargeable.",
  },
  {
    n: "05",
    title: "Client Responsibilities",
    body: "Client must provide accurate information, share content and assets, and give timely feedback. Delays from the client extend delivery time. If the Client does not respond for 15 days the project is paused, and if there is no response 30 days after the last contact the project is closed and the advance is not refunded.",
  },
  {
    n: "06",
    title: "Payments",
    body: "Full balance required before final handover. A renewal fee equal to the package price is due every year to keep the website live, hosted and supported; if it is not paid within 7 days of the due date, the website is suspended. Maintenance services are billed monthly in advance.",
  },
  {
    n: "07",
    title: "Refund Policy",
    body: "The advance is refunded in full if the project is cancelled within 7 days of payment and before work has started, or if Wepzite is unable to take up the project. Once work has started, or after 7 days, payments are non-refundable.",
  },
  {
    n: "08",
    title: "Intellectual Property",
    body: "Wepzite retains ownership of the source code and design. After full payment, and while renewals are paid, the Client has a licence to use the website for their business; the Client's own content remains theirs. Removing the \"Developed by wepzite.in\" footer credit without written permission makes a fee of three times the project value payable. Wepzite may showcase work in its portfolio.",
  },
  {
    n: "09",
    title: "Confidentiality",
    body: "Both parties must keep shared business information confidential.",
  },
  {
    n: "10",
    title: "Domains & Third-Party Services",
    body: "Unless specified, domain costs, hosting costs, payment gateway fees, and API charges are paid by the client.",
  },
  {
    n: "11",
    title: "Liability",
    body: "Wepzite's liability is limited to the total project value.",
  },
  {
    n: "12",
    title: "Governing Law",
    body: "Governed by Indian law.",
  },
  {
    n: "13",
    title: "Electronic Signature",
    body: "Digital signatures are recognized under the Information Technology Act, 2000.",
  },
];

/** Delivery timelines offered in the form's dropdown. */
export const deliveryTimelines = [
  "7 working days",
  "10 working days",
  "14 working days",
  "21 working days",
  "30 working days",
  "45 working days",
];
