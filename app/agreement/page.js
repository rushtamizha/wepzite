import AgreementForm from "@/components/AgreementForm";

/**
 * /agreement — the client service agreement form.
 *
 * Stays a Server Component; the interactive form is the only client boundary.
 *
 * robots is noindex/nofollow on purpose. This is a private contracting surface
 * reached from a WhatsApp link, not a marketing page: indexing it would put a
 * blank agreement form in search results under the brand's own name, compete
 * with the pages that are meant to rank, and invite strangers to fill it in.
 * It is also absent from app/sitemap.js for the same reason.
 */
export const metadata = {
  title: "Client Service Agreement",
  description:
    "Complete and sign your Wepzite client service agreement, then download your signed PDF copy.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "/agreement" },
};

export default function AgreementPage() {
  return <AgreementForm />;
}
