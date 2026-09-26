import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CircuitBoard, Network, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBlock, ProcessSteps, SectionHeading, ServiceCard, services } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AL•HADIX | Industrial Machinery & Engineering Consultancy" },
    { name: "description", content: "AL•HADIX connects businesses with suitable machinery manufacturers, suppliers, and technical specialists." },
    { property: "og:title", content: "AL•HADIX | Motion Engineering" },
    { property: "og:description", content: "Industrial machinery and engineering consultancy for the right technical connections." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <section className="technical-grid relative overflow-hidden bg-light-blue py-16 sm:py-24 lg:py-28">
      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-primary" /><div className="absolute bottom-0 left-1/3 h-1 w-1/4 bg-brand-blue" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl"><p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-brand-blue"><span className="h-px w-10 bg-primary" />Industrial machinery · engineering consultancy · software</p><h1 className="text-4xl font-semibold leading-[1.08] text-deep-blue sm:text-6xl lg:text-7xl">Connecting Industry with the <span className="text-primary">Right Machinery.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">AL•HADIX provides industrial machinery, engineering consultancy, and automation software solutions, helping businesses improve their processes, reduce manual work, and increase operational efficiency.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/contact">Discuss Your Requirement <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/services">Our Services</Link></Button></div></div>
      </div>
    </section>
    <section className="bg-card py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><SectionHeading eyebrow="What we do" title={"Industrial Machinery.\nEngineering Expertise.\nThe Right Connections."} /><div><p className="max-w-2xl leading-7 text-muted-foreground">AL•HADIX helps businesses navigate industrial machinery requirements and improve their operations with automation software, connecting them with suitable manufacturers, suppliers, and technical specialists. Our role is to simplify the process and provide technical guidance when required.</p><div className="mt-10 space-y-8">{[["01","Machinery Solutions","Helping clients identify suitable machinery and connect with relevant manufacturers and suppliers.",Settings2],["02","Engineering Consultancy","Providing technical guidance based on the customer’s requirements and application.",Network],["03","Testing & Commissioning","Providing technical support and access to specialists when required.",CircuitBoard]].map(([n,t,d,Icon]) => { const I=Icon as typeof Settings2; return <div key={String(n)} className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-6"><span className="font-mono text-xs text-primary">{String(n)}</span><div><div className="flex items-center gap-3"><I className="size-5 text-brand-blue"/><h3 className="font-semibold text-deep-blue">{String(t)}</h3></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(d)}</p></div></div>})}</div></div></div></section>
    <section className="bg-background py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="Capabilities" title="Our Services" text="Focused technical support from requirement definition through after-sales guidance." /><Button asChild variant="outline"><Link to="/services">View all services <ArrowRight /></Link></Button></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}</div></div></section>
    <section className="bg-card py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Our approach" title="A clear technical path." text="A practical four-step approach that keeps the requirement, connections, and technical fit in focus." /><ProcessSteps /></div></section>
    <ContactBlock />
  </>;
}
