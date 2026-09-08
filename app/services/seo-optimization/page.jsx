import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/servicePages";

const data = getServicePage("seo-optimization");

export const metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/services/seo-optimization" },
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
