import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project and we'll come back with a timeline and a price. Websites, apps, SEO and branding for businesses across Tamil Nadu.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  // Section supplies its own vertical rhythm; the pt here only clears the fixed navbar.
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}
