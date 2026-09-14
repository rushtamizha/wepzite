/**
 * Starting content for the quotation builder at /quotation.
 *
 * Every list here only seeds the form: each quotation can add, edit, reorder
 * or remove items before its PDF is made. Change the wording here to change
 * what every new quotation starts from.
 *
 * Keep these in step with data/agreementTerms.js. A quotation that promises
 * something the agreement then contradicts is the first thing a client quotes
 * back when a project goes wrong.
 */

/** Days a new quotation stays valid unless the date is changed. */
export const QUOTATION_VALIDITY_DAYS = 7;

/** One-tap options under the delivery field, in working days. */
export const quotationDeliveryPresets = [7, 10, 14, 21, 30];

export const quotationPaymentPolicy = [
  "50% advance to confirm the project and start work.",
  "Remaining balance payable in full before final handover and go-live.",
  "Payments accepted by UPI or bank transfer (NEFT / IMPS).",
  "Monthly maintenance, where applicable, is billed in advance.",
];

export const quotationTerms = [
  "The quoted price covers only the scope listed above; additional pages or features are quoted separately.",
  "Delivery time starts after the advance is received and all content, images and access details are shared.",
  "Revisions are limited to the selected package; extra revisions are chargeable.",
  "Unless listed in the scope, domain renewals, hosting, payment gateway fees and third-party API charges are paid by the client.",
  "Prices may be revised if this quotation is accepted after its validity date.",
  "A service agreement is signed before work begins, and its terms govern the project.",
];

/** Printed beside the signature: what the enquirer does to go ahead. */
export const quotationNextSteps =
  "To go ahead, confirm on WhatsApp and pay the advance. We will then send the service agreement for signature and start work.";
