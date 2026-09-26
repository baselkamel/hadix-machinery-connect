import { createFileRoute } from "@tanstack/react-router";
import { CheckItem, ContactBlock, PageIntro, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AL•HADIX | Motion Engineering" },
    { name: "description", content: "A specialized industrial machinery and engineering consultancy startup connecting businesses with the right expertise." },
    { property: "og:title", content: "About AL•HADIX" }, { property: "og:description", content: "Specialized industrial machinery and engineering consultancy." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: About,
});

function About() { return <><PageIntro eyebrow="About us" title="About AL•HADIX" text="A focused engineering and software startup built to make industrial machinery decisions clearer and operations more efficient." /><section className="bg-card py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8"><SectionHeading eyebrow="Our role" title="Technical guidance between requirement and solution." text="AL•HADIX is a specialized industrial machinery, engineering consultancy, and automation software startup. We help businesses identify suitable machinery solutions and streamline their operations by connecting them with relevant manufacturers, suppliers, and technical specialists." /><div className="border border-border bg-light-blue p-7 sm:p-10"><h3 className="text-2xl font-semibold text-deep-blue">Focused by design</h3><ul className="mt-7 space-y-5 text-sm leading-6 text-muted-foreground"><CheckItem>We understand the machinery requirement and application.</CheckItem><CheckItem>We identify relevant manufacturers, suppliers, and technical specialists.</CheckItem><CheckItem>We provide independent engineering and technical guidance.</CheckItem><CheckItem>We deliver automation software that streamlines business processes.</CheckItem><CheckItem>We support testing and commissioning when required.</CheckItem></ul></div></div></section><ContactBlock /></> }