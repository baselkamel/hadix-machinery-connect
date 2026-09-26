import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock, PageIntro, SectionHeading, ServiceCard, services } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Industrial Machinery Services | AL•HADIX" },
    { name: "description", content: "Machinery consultancy, supplier connections, technical evaluation, testing, commissioning, and after-sales technical support." },
    { property: "og:title", content: "Industrial Machinery Services | AL•HADIX" }, { property: "og:description", content: "Focused engineering consultancy and technical machinery support." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Services,
});
function Services() { return <><PageIntro eyebrow="Our services" title="Engineering and software support for better decisions." text="From understanding the need to evaluating technical fit, supporting commissioning, and delivering automation software, our role stays practical and focused." /><section className="bg-background py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Capabilities" title="Specialized support, when it matters." /><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}</div></div></section><ContactBlock /></> }