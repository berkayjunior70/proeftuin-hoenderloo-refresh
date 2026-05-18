import { createFileRoute, Link } from "@tanstack/react-router";
import hightea from "@/assets/hightea.jpg";

export const Route = createFileRoute("/high-tea")({
  head: () => ({
    meta: [
      { title: "High Tea — De ProefTuin Hoenderloo" },
      { name: "description", content: "Een uitgebreide high tea middenin de Veluwse natuur. Vanaf 2 personen." },
    ],
  }),
  component: HighTeaPage,
});

function HighTeaPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[420px]">
        <img src={hightea} alt="High Tea" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col justify-end pb-12">
          <span className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase mb-4">Vanaf 2 personen</span>
          <h1 className="text-primary-foreground text-5xl md:text-7xl">High Tea</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 space-y-6 text-lg text-foreground/85 leading-relaxed">
        <p>Bij De ProefTuin beleef je vanaf 2 personen een gezellige middag met ons uitgebreide high tea arrangement. Op een locatie middenin de natuur geniet je van verse thee met verschillende hartige en zoete gerechten.</p>
        <p>De high tea is ook heel geschikt voor het vieren van een <strong className="text-primary">babyshower</strong>, vrijgezellenfeest of een dagje met vriendinnen.</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 grid md:grid-cols-3 gap-6">
        {[
          { title: "Hartig", items: ["Mini quiches", "Belegde sandwiches", "Soep van de dag"] },
          { title: "Zoet", items: ["Verse scones", "Patisserie", "Petit-fours"] },
          { title: "Verse thee", items: ["Diverse smaken", "Onbeperkt", "Bijpassend bij elk gerecht"] },
        ].map((c) => (
          <div key={c.title} className="bg-secondary p-8 rounded-2xl">
            <h3 className="text-2xl text-primary mb-4">{c.title}</h3>
            <ul className="space-y-2 text-foreground/80">
              {c.items.map((i) => <li key={i}>· {i}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-wider">Reserveer je high tea</Link>
      </section>
    </>
  );
}
