import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description:
    "Website design, app development, e-commerce, local SEO, WhatsApp automation and branding for businesses across Tamil Nadu.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <Services />
    </main>
  );
}
