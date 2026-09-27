import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Code2,
  Cog,
  FlaskConical,
  Handshake,
  Mail,
  Menu,
  Network,
  Phone,
  SearchCheck,
  Settings2,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/al-hadix-logo.png";

export const services = [
  { title: "Software", text: "We provide automation software solutions that streamline business processes, reduce manual work, and improve operational efficiency. Our services include workflow automation, system integration, and customized software solutions tailored to our clients’ specific needs.", icon: Code2 },
  { title: "Industrial Machinery Consultancy", text: "Helping businesses understand machinery requirements and identify suitable solutions.", icon: Cog },
  { title: "Machinery & Supplier Connections", text: "Connecting businesses with relevant manufacturers and suppliers through our professional network.", icon: Network },
  { title: "Engineering & Technical Consultancy", text: "Engineering guidance shaped around the machinery requirement and its application.", icon: Wrench },
  { title: "Technical Evaluation", text: "Evaluating machinery options for technical fit, application, and suitability.", icon: SearchCheck },
  { title: "Testing & Commissioning", text: "Technical support and access to specialists for testing and commissioning when required.", icon: FlaskConical },
  { title: "Technical Specialist Support", text: "Access to relevant technical specialists when specific expertise is required.", icon: Handshake },
  { title: "Machinery Optimization & Technical Advice", text: "Advice related to machinery performance, operation, and optimization.", icon: CircleGauge },
];

const nav = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Approach", "/approach"], ["Contact", "/contact"],
] as const;

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`relative bg-card ${footer ? "h-36" : "h-36 lg:h-32"}`}>
      <img src={logoUrl} alt="AL•HADIX Motion Engineering" className="h-full w-auto object-contain" />
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 lg:sticky lg:top-0 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto grid h-40 max-w-7xl lg:h-36 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Link to="/" aria-label="AL•HADIX home" className="min-w-0"><Logo /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "text-primary" }} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</Link>)}
          <Button asChild><Link to="/contact">Contact Us <ArrowRight /></Link></Button>
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-card px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border px-2 py-3 font-semibold text-foreground">{label}</Link>)}<Button asChild className="mt-4 h-12"><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></Button></div></nav>}
    </header>
  );
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-3xl"><div className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase ${light ? "text-primary" : "text-brand-blue"}`}><span className="h-px w-9 bg-primary" />{eyebrow}</div><h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-deep-blue"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl leading-7 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="technical-grid relative overflow-hidden bg-deep-blue py-20 text-primary-foreground sm:py-24"><div className="absolute right-0 top-0 h-full w-2 bg-primary" /><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-9 bg-primary" />{eyebrow}</div><h1 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">{title}</h1><p className="mt-5 max-w-2xl leading-7 text-primary-foreground/70">{text}</p></div></div></section>;
}

export function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;
  return <article className="group border border-border bg-card p-6 transition-colors hover:border-primary sm:p-7"><div className="mb-8 flex items-start justify-between"><div className="grid h-11 w-11 place-items-center border border-primary/35 bg-light-blue text-primary"><Icon /></div><span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></div><h3 className="text-xl font-semibold text-deep-blue">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p></article>;
}

export const steps = [
  ["UNDERSTAND", "We understand the customer’s machinery requirement and application."],
  ["CONNECT", "We identify suitable manufacturers, suppliers and technical connections."],
  ["EVALUATE & SUPPORT", "We provide technical guidance and involve specialists when required."],
  ["FOLLOW THROUGH", "We support the technical process, including testing and commissioning when required."],
] as const;

export function ProcessSteps() {
  return <div className="mt-12 grid gap-px bg-border lg:grid-cols-4">{steps.map(([title, text], i) => <article key={title} className="relative bg-card p-7"><div className="mb-8 flex items-center gap-3"><span className="font-display text-3xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span><span className="h-px flex-1 bg-border" /><ChevronRight className="size-4 text-brand-blue" /></div><h3 className="text-sm font-bold text-deep-blue">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>;
}

export function ContactBlock() {
  return <section className="bg-deep-blue py-20 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:px-8"><div><SectionHeading eyebrow="Contact" title="Let’s Discuss Your Machinery Requirements." text="Tell us what your operation needs. We’ll help clarify the requirement and identify the right technical path." light /></div><div className="border-l border-primary/50 pl-6 sm:pl-10"><p className="text-sm font-bold uppercase text-primary">Cappadocia, Türkiye</p><div className="mt-8 space-y-6"><ContactLine country="Türkiye" number="+90 507 962 32 91" tel="+905079623291" /><ContactLine country="Jordan" number="+962 7 9849 2379" tel="+962798492379" /><EmailLine /></div></div></div></section>;
}

function ContactLine({ country, number, tel }: { country: string; number: string; tel: string }) {
  return <div className="grid gap-3 border-t border-primary-foreground/20 pt-5 sm:grid-cols-[1fr_auto]"><div><p className="text-xs text-primary-foreground/60">{country}</p><a href={`tel:${tel}`} className="mt-1 block font-display text-xl font-semibold hover:text-primary">{number}</a></div><Button asChild variant="outline" className="border-primary text-primary hover:bg-primary"><a href={`https://wa.me/${tel.replace("+", "")}`} target="_blank" rel="noreferrer"><Phone /> WhatsApp</a></Button></div>;
}

function EmailLine() {
  return <div className="grid gap-3 border-t border-primary-foreground/20 pt-5 sm:grid-cols-[1fr_auto]"><div><p className="text-xs text-primary-foreground/60">Email</p><a href="mailto:info@alhadix.com" className="mt-1 block font-display text-xl font-semibold hover:text-primary">info@alhadix.com</a></div><Button asChild variant="outline" className="border-primary text-primary hover:bg-primary"><a href="mailto:info@alhadix.com"><Mail /> Send Email</a></Button></div>;
}

export function Footer() {
  return <footer className="border-t border-primary-foreground/10 bg-deep-blue py-12 text-primary-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-[1.4fr_1fr_1fr]"><div><Logo footer /><p className="mt-4 max-w-xs text-sm text-primary-foreground/65">Industrial machinery, engineering consultancy, and automation software.</p></div><div><p className="text-xs font-bold uppercase text-primary">Navigate</p><div className="mt-4 grid grid-cols-2 gap-3 text-sm">{nav.map(([label, to]) => <Link key={to} to={to} className="text-primary-foreground/70 hover:text-primary">{label}</Link>)}</div></div><div><p className="text-xs font-bold uppercase text-primary">Contact</p><div className="mt-4 space-y-2 text-sm text-primary-foreground/70"><p>Cappadocia, Türkiye</p><a className="block hover:text-primary" href="tel:+905079623291">+90 507 962 32 91</a><a className="block hover:text-primary" href="tel:+962798492379">+962 7 9849 2379</a><a className="block hover:text-primary" href="mailto:info@alhadix.com">info@alhadix.com</a></div></div></div><p className="pt-6 text-xs text-primary-foreground/50">© AL•HADIX. All rights reserved.</p></div></footer>;
}

export function CheckItem({ children }: { children: ReactNode }) { return <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span>{children}</span></li>; }