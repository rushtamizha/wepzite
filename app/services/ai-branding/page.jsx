import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/servicePages";

const data = getServicePage("ai-branding");

export const metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/services/ai-branding" },
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
