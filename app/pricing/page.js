import PricingAndContact from "@/components/PricingAndContact";

export const metadata = {
  title: "Wbsite Development Cost In Wepzite",
  description:
    "Fixed-rate website, app and SEO packages with everything listed up front. Configure a package and see your total before you talk to us.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <PricingAndContact />
    </main>
  );
}
