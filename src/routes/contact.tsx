import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & reserveren — De ProefTuin Hoenderloo" },
      { name: "description", content: "Reserveer een tafel, vraag een offerte aan of bezoek ons in Hoenderloo." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <span className="text-xs tracking-[0.4em] uppercase text-primary/70">Tot ziens in de tuin</span>
      <h1 className="mt-4 text-5xl md:text-7xl">Contact</h1>

      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <Item icon={MapPin} title="Adres">
            Krimweg 23<br/>7351 AS Hoenderloo<br/>Nederland
          </Item>
          <Item icon={Phone} title="Telefoon">
            <a href="tel:+31552121234" className="hover:text-primary">055 - 212 12 34</a>
          </Item>
          <Item icon={Mail} title="E-mail">
            <a href="mailto:info@deproeftuinhoenderloo.nl" className="hover:text-primary">info@deproeftuinhoenderloo.nl</a>
          </Item>
          <Item icon={Clock} title="Openingstijden">
            Ma – Zo · 10:00 – 22:00<br/>
            <span className="text-sm text-muted-foreground">Keuken sluit om 21:00</span>
          </Item>
          <div className="flex gap-3 pt-4">
            <a href="https://www.facebook.com/proeftuinhoenderloo" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/deproeftuinhoenderloo/" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-6">
            <a href="https://app.miceoperations.com/widget/3052ecc8f221" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-wider">Offerte aanvragen</a>
            <a href="https://deproeftuin-afhaal.waiterz.nl/" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">Afhalen</a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] min-h-[450px]">
          <iframe
            title="De ProefTuin Hoenderloo"
            src="https://www.google.com/maps?q=Krimweg+23+Hoenderloo&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="h-12 w-12 shrink-0 rounded-full bg-secondary flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-sm uppercase tracking-[0.2em] text-primary/70">{title}</h3>
        <p className="mt-1 text-lg text-foreground/85 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
