import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Our Work",
  description:
    "Live websites we've designed and built for travel agencies, photographers, clinics and retailers across Tamil Nadu.",
  alternates: { canonical: "/portfolio" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <Portfolio />
    </main>
  );
}
