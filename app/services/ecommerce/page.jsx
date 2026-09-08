import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/servicePages";

const data = getServicePage("ecommerce");

export const metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/services/ecommerce" },
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
