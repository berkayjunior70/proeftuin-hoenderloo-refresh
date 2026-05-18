import { createFileRoute, Link } from "@tanstack/react-router";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/groepen")({
  head: () => ({
    meta: [
      { title: "Groepen & arrangementen — De ProefTuin Hoenderloo" },
      { name: "description", content: "De ideale plek voor personeelsfeesten, kinderfeestjes, familie-uitjes en teambuilding." },
    ],
  }),
  component: GroepenPage,
});

const arrangementen = [
  { title: "Personeelsfeest", desc: "Een complete dag met eten, drinken en activiteiten voor je team." },
  { title: "Familie-uitje", desc: "Barbecueën onder de safaritent of een uitgebreid Italiaans diner." },
  { title: "Kinderfeestje", desc: "Pizza bakken, minigolf en spelen in onze SpeelTuin." },
  { title: "Babyshower", desc: "Vier het samen met onze uitgebreide high tea midden in de natuur." },
  { title: "Teamuitje", desc: "Boogschieten, Highland Games, Jongens tegen de Meiden of Wie is de Mol." },
  { title: "Bruiloft", desc: "Een sfeervolle locatie voor jullie speciale dag in het groen." },
];

function GroepenPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={garden} alt="Groepen" width={1600} height={1067} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col justify-end pb-12">
          <span className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase mb-4">Vier het samen</span>
          <h1 className="text-primary-foreground text-5xl md:text-7xl">Groepen</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-lg text-foreground/80 leading-relaxed">
          Voor groepen zoals personeelsfeesten, kinderfeestjes en familie-uitjes is ProefTuin Hoenderloo de ideale plek. Groepen kunnen ook terecht onder onze mooie <strong className="text-primary">safaritent</strong>, waardoor je alle kanten op kunt.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arrangementen.map((a) => (
          <div key={a.title} className="bg-card p-8 rounded-2xl border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow">
            <h3 className="text-2xl text-primary">{a.title}</h3>
            <p className="mt-3 text-foreground/70 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-4xl">Op maat samengesteld</h2>
        <p className="mt-6 text-foreground/80 leading-relaxed">Vertel ons over je gelegenheid en we stellen graag een passend voorstel op.</p>
        <Link to="/contact" className="mt-8 inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-wider">Offerte aanvragen</Link>
      </section>
    </>
  );
}
