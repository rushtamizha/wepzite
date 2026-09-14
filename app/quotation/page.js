import QuotationForm from "@/components/QuotationForm";

/**
 * /quotation — builds a branded PDF quotation to send to an enquiry.
 *
 * Unlike /agreement, the person filling this in is Wepzite, not the client:
 * nothing is signed by the enquirer, and the PDF carries only Wepzite's
 * signature. It is noindex/nofollow and left out of app/sitemap.js and the nav
 * for the same reason the agreement is — a blank price-quote form under the
 * brand's own name is not a page to rank or to hand strangers.
 */
export const metadata = {
  title: "Quotation Generator",
  description: "Build and download a Wepzite project quotation as a PDF.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "/quotation" },
};

export default function QuotationPage() {
  return <QuotationForm />;
}
