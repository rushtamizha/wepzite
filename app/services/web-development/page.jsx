import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/servicePages";

const data = getServicePage("web-development");

export const metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/services/web-development" },
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
