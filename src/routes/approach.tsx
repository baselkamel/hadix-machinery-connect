import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock, PageIntro, ProcessSteps, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/approach")({
  head: () => ({ meta: [
    { title: "Our Approach | AL•HADIX Motion Engineering" },
    { name: "description", content: "How AL•HADIX understands, connects, evaluates, and supports industrial machinery requirements." },
    { property: "og:title", content: "Our Approach | AL•HADIX" }, { property: "og:description", content: "A clear technical path from machinery requirement to follow-through." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Approach,
});
function Approach() { return <><PageIntro eyebrow="Our approach" title="A clear path from requirement to technical support." text="Our process keeps the application and technical requirement at the center of every connection and recommendation." /><section className="bg-card py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Four steps" title="Simple, focused, and technical." text="We adapt the depth of our involvement to the requirement, bringing in specialist knowledge when it is genuinely needed." /><ProcessSteps /></div></section><ContactBlock /></> }