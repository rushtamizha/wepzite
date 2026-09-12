import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, districts } from "@/data/districtsData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------------------------------------------------------------------
// SITE-WIDE METADATA — this is the fallback every page inherits unless
// it sets its own (your district pages already override title/description
// via generateMetadata/export const metadata — this is what search
// engines see for any page that doesn't, e.g. /, /services, /pricing).
//
// ⚠️ TODO before launch:
// - Replace the Google Search Console verification code below with your
//   real one (Search Console → Settings → Ownership verification → HTML tag).
// - Add real social profile URLs to `sameAs` in the Organization schema.
// - Confirm /og/default.jpg exists at 1200x630px in /public/og/.
// - Confirm favicon/icon files exist in /public/ (see `icons` below).
// ---------------------------------------------------------------------

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Wepzite — Website Design & Development Company in Tamil Nadu",
    template: "%s | Wepzite",
  },
  description: `Wepzite builds websites and AI-branded visuals for businesses across Tamil Nadu . Google Business Profile setup`,
  keywords: [
    "website design company Tamil Nadu",
    "web development company Tamil Nadu",
    "Next.js developer Tamil Nadu",
    "website design company Chennai",
    "website design company Coimbatore",
    "website design company Madurai",
    "website design company Theni",
    "app development company Tamil Nadu",
    "ecommerce website development Tamil Nadu",
    "GMB setup Tamil Nadu",
    "Google Ads agency Tamil Nadu",
    "Meta ads agency Tamil Nadu",
    "logo banner poster design Tamil Nadu",
    "WhatsApp automation for business",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.domain }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.domain,
    siteName: siteConfig.companyName,
    title: "Wepzite — Website Design & Development Company in Tamil Nadu",
    description:
      "Next.js websites, apps, e-commerce, AI branding, GMB setup, Google Ads & Meta Ads — for businesses across Tamil Nadu.Packages from ₹2,999.",
    images: [
      {
        url: "/https://res.cloudinary.com/deamsuypj/image/upload/v1789117379/sbttours.com_rkjpfb.png",
        width: 1200,
        height: 630,
        alt: "Wepzite — Website Design & Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wepzite — Website Design & Development Company in Tamil Nadu",
    description:
      "Next.js websites, apps, e-commerce, AI branding, GMB setup, Google Ads & Meta Ads — for businesses across Tamil Nadu.",
    images: ["/https://res.cloudinary.com/deamsuypj/image/upload/v1789117379/sbttours.com_rkjpfb.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu",
  },
  verification: {
    // TODO: replace with your real Search Console HTML-tag verification code
    google: "WZ3lArZgFuE1KvmL5ybnlHNfwUzIsu8wGySj_0FTL7A",
  },
};

// ---------------------------------------------------------------------
// SITE-WIDE JSON-LD — Organization + WebSite.
// This is separate from the ProfessionalService schema on each district
// page: this describes the company as a whole (once, site-wide); the
// district pages describe a specific local service instance of it.
// ---------------------------------------------------------------------
function buildSiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.companyName,
    url: siteConfig.domain,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    logo: `${siteConfig.domain}/logo.png`, // TODO: confirm actual logo path
    // TODO: add your real social profile URLs here, e.g.:
    // sameAs: [
    //   "https://www.instagram.com/wepzite",
    //   "https://www.linkedin.com/company/wepzite",
    //   "https://twitter.com/wepzite",
    // ],
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.companyName,
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    inLanguage: "en-IN",
  };

  return [organization, website];
}

export default function RootLayout({ children }) {
  const jsonLdBlocks = buildSiteJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* {jsonLdBlocks.map((block, i) => (
          <Script
            key={i}
            id={`jsonld-site-${block["@type"]}-${i}`}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))} */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-672055830"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-672055830');
          `}
        </Script>
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1798014498234622');
    fbq('track', 'PageView');
  `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1798014498234622&ev=PageView&noscript=1"
          />
        </noscript>

        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
