/**
 * Single source of truth for the business contact details.
 *
 * The WhatsApp number used to be hard-coded in six different components
 * (and left as the literal string "YOUR_NUMBER_HERE" in the service pages,
 * which sent visitors to a dead wa.me link). Import from here instead.
 */
export const BUSINESS_WHATSAPP = "919626850192";
export const BUSINESS_EMAIL = "contact@wepzite.in";
export const BUSINESS_SITE = "https://wepzite.in";

/** Opens WhatsApp with a pre-filled message. */
export function openWhatsApp(message) {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${text}`, "_blank");
}
