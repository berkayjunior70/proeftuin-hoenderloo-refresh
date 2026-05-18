import { createFileRoute, Link } from "@tanstack/react-router";
import heroPizza from "@/assets/hero-pizza.jpg";
import garden from "@/assets/garden.jpg";
import minigolf from "@/assets/minigolf.jpg";
import hightea from "@/assets/hightea.jpg";
import speeltuin from "@/assets/speeltuin.jpg";
import klompenpad from "@/assets/klompenpad.jpg";
import { Pizza, Flag, Sandwich, TreePine, Users, Footprints } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De ProefTuin Hoenderloo — Pizza, natuur & gezelligheid" },
      { name: "description", content: "Houtoven pizza's, minigolf, high tea en eindeloos genieten midden in de Veluwse natuur." },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Sandwich, title: "Lunch, borrel & diner" },
  { icon: Flag, title: "18 holes minigolf" },
  { icon: Pizza, title: "Houtovengebakken pizza's" },
  { icon: TreePine, title: "Eindeloos spelen" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={heroPizza} alt="Houtoven pizza in de tuin" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col justify-end pb-20">
          <span className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase mb-6">Midden in de Veluwe</span>
          <h1 className="text-primary-foreground text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            Puur natuurlijk<br/><em className="not-italic text-accent">genieten</em>.
          </h1>
          <p className="text-primary-foreground/90 mt-8 max-w-xl text-lg leading-relaxed">
            Verrassende Italiaanse gerechten, houtoven pizza's met een knapperige korst en eindeloos spelen in het groen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/menu" className="px-7 py-4 rounded-full bg-accent text-accent-foreground text-sm uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-[var(--shadow-soft)]">Bekijk menu</Link>
            <Link to="/contact" className="px-7 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors">Reserveren</Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {highlights.map((h) => (
          <div key={h.title} className="text-center group">
            <div className="mx-auto h-20 w-20 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <h.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
            </div>
            <p className="mt-4 font-display text-lg">{h.title}</p>
          </div>
        ))}
      </section>

      {/* DE PROEFTUIN */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-primary/70">Welkom</span>
          <h2 className="mt-4 text-5xl md:text-6xl">De ProefTuin</h2>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
            <p>Bij een bezoek aan De ProefTuin in Hoenderloo valt de <strong className="text-primary">prachtige omgeving</strong> direct op. Gelegen midden in de Veluwse natuur, is dit dé plek om te ontspannen met leuke activiteiten, zoals minigolfen of een wandeling op het welbekende klompenpad.</p>
            <p>Wist je dat we ook een <strong className="text-primary">SpeelTuin</strong> en <strong className="text-primary">CrossTuin</strong> hebben? Ook voor kinderen is er dus genoeg te beleven.</p>
            <p>Onze keuken biedt verrassende en verfijnde Italiaanse gerechten, bereid met verse seizoensgebonden ingrediënten en <strong className="text-primary">huisgemaakte producten</strong>. Kom zeker onze houtoven gebakken pizza's eens proeven — met een echte knapperige korst.</p>
          </div>
        </div>
        <div className="relative">
          <img src={garden} alt="Onze tuin" width={1600} height={1067} loading="lazy" className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-full object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-[var(--shadow-card)] max-w-xs hidden md:block">
            <p className="text-3xl font-display text-primary">4.4 ★</p>
            <p className="text-xs text-muted-foreground mt-1">Gebaseerd op 1312 Google reviews</p>
          </div>
        </div>
      </section>

      {/* FEATURED CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard img={minigolf} eyebrow="Nieuw geopend" title="Onze vernieuwde GolfTuin" body="Met trots verwelkomen we je in onze vernieuwde GolfTuin. Een fijne plek om te ontspannen en samen een leuke tijd te beleven. Entree €9,50 voor volwassenen en €7,50 voor kinderen t/m 12 jaar." to="/activiteiten" />
          <FeatureCard img={hightea} eyebrow="Vanaf 2 personen" title="High Tea in het groen" body="Geniet van een gezellige middag met onze uitgebreide high tea — verse thee, hartige en zoete gerechten. Ook perfect voor het vieren van een babyshower." to="/high-tea" />
          <FeatureCard img={speeltuin} eyebrow="Voor jong & oud" title="Speel & CrossTuin" body="Onze speeltuin en crossbaan houden de kinderen bezig, terwijl jij heerlijk op het terras uitkijkt over het groen." to="/activiteiten" />
          <FeatureCard img={klompenpad} eyebrow="12 kilometer" title="Het Plaggenstekerspad" body="Wandel door weilanden, bos, heide en stuifzand. Langs de mooie Helderingkerk, de Heldringput en een echte plaggenhut." to="/activiteiten" />
        </div>
      </section>

      {/* PIZZA VAN DE MAAND */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs tracking-[0.4em] uppercase opacity-70">Pizza van de maand</span>
          <h2 className="mt-4 text-5xl md:text-6xl">Funghi Superiore</h2>
          <p className="mt-8 max-w-2xl mx-auto text-lg opacity-90 leading-relaxed">
            Een smaakvolle pizza met mozzarella, champignons, bresaola, rode ui, lavas, Pecorino Romano D.O.P. en zwarte peper.
          </p>
          <p className="mt-6 text-4xl font-display text-accent">€19,50</p>
          <Link to="/menu" className="mt-10 inline-block px-8 py-4 rounded-full bg-accent text-accent-foreground text-sm uppercase tracking-wider hover:scale-[1.02] transition-transform">Bekijk onze pizza's</Link>
        </div>
      </section>

      {/* GROEPEN */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <Users className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 text-5xl">De perfecte locatie voor groepen</h2>
        <p className="mt-6 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
          Naast eten en drinken bieden wij ook diverse indoor en outdoor activiteiten, zoals Jongens tegen de Meiden, Wie is de Mol, boogschieten en Highland Games. Perfect voor groepen, teamuitjes en een complete dag bij de ProefTuin.
        </p>
        <Link to="/groepen" className="mt-10 inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-wider">Bekijk arrangementen</Link>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/70">Wat gasten zeggen</span>
          <h2 className="mt-4 text-4xl md:text-5xl">4.4 ★ op Google</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border">
              <div className="text-accent mb-3">★★★★★</div>
              <p className="text-foreground/80 leading-relaxed italic">"{r.text}"</p>
              <p className="mt-6 text-sm font-medium text-primary">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center gap-6">
          <Footprints className="h-10 w-10 text-primary" />
          <h2 className="text-3xl md:text-4xl">Kom langs en proef de Veluwe</h2>
          <p className="text-foreground/70 max-w-xl">Reserveer een tafel of haal je favoriete pizza op.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-wider">Reserveren</Link>
            <a href="https://deproeftuin-afhaal.waiterz.nl/" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">Afhalen</a>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ img, eyebrow, title, body, to }: { img: string; eyebrow: string; title: string; body: string; to: string }) {
  return (
    <Link to={to} className="group block rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-8">
        <span className="text-xs tracking-[0.3em] uppercase text-accent">{eyebrow}</span>
        <h3 className="mt-3 text-2xl">{title}</h3>
        <p className="mt-3 text-foreground/70 leading-relaxed">{body}</p>
        <span className="mt-5 inline-block text-sm uppercase tracking-wider text-primary group-hover:underline">Meer info →</span>
      </div>
    </Link>
  );
}

const reviews = [
  { name: "Hennyossel", text: "Heel lekker gegeten en gedronken. Lekkere pizza Salame Napoli! Leuke locatie en zeer vriendelijk personeel. Een echte aanrader!" },
  { name: "Leonoor Borregaard", text: "Beste pizza's ooit, echt heerlijk. Leuke plek, goede en zeer vriendelijke bediening en heerlijke verse thee." },
  { name: "ardjuna kishna", text: "Een heerlijke kindvriendelijke plek waar je ook nog eens echt goed kan eten. Een prachtig onderhouden tuin met speeltuin en minigolfbaan." },
];
