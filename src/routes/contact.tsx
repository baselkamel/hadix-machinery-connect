import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact AL•HADIX | Discuss Your Machinery Requirement" },
    { name: "description", content: "Contact AL•HADIX in Cappadocia, Türkiye to discuss an industrial machinery or engineering consultancy requirement." },
    { property: "og:title", content: "Contact AL•HADIX" }, { property: "og:description", content: "Let’s discuss your machinery requirements." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Contact,
});
const contacts = [{country:"Türkiye", display:"+90 507 962 32 91", tel:"+905079623291"},{country:"Jordan", display:"+962 7 9849 2379", tel:"+962798492379"}];
function Contact() { return <><PageIntro eyebrow="Contact" title="Let’s Discuss Your Machinery Requirements." text="Share your machinery requirement, software question, or technical inquiry with us. WhatsApp is available on both numbers." /><section className="bg-background py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><div><div className="grid h-12 w-12 place-items-center border border-primary bg-card text-primary"><MapPin /></div><h2 className="mt-6 text-2xl font-semibold text-deep-blue">Cappadocia, Türkiye</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Industrial machinery, engineering consultancy, and automation software.</p><a href="mailto:info@alhadix.com" className="mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold text-deep-blue hover:text-primary"><Mail className="size-5 text-brand-blue" /> info@alhadix.com</a></div><div className="grid gap-4 sm:grid-cols-2">{contacts.map(c=><article key={c.country} className="border border-border bg-card p-7"><p className="text-xs font-bold uppercase text-brand-blue">{c.country}</p><a className="mt-5 block font-display text-2xl font-semibold text-deep-blue hover:text-primary" href={`tel:${c.tel}`}>{c.display}</a><div className="mt-8 grid gap-3"><Button asChild size="lg"><a href={`https://wa.me/${c.tel.replace("+","")}`} target="_blank" rel="noreferrer"><Phone /> WhatsApp</a></Button><Button asChild size="lg" variant="outline"><a href={`tel:${c.tel}`}>Call {c.country}</a></Button></div></article>)}</div></div></section></> }