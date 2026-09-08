import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/servicePages";

const data = getServicePage("whatsapp-automation");

export const metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/services/whatsapp-automation" },
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
