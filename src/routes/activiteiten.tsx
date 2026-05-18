import { createFileRoute } from "@tanstack/react-router";
import minigolf from "@/assets/minigolf.jpg";
import speeltuin from "@/assets/speeltuin.jpg";
import klompenpad from "@/assets/klompenpad.jpg";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/activiteiten")({
  head: () => ({
    meta: [
      { title: "Activiteiten — De ProefTuin Hoenderloo" },
      { name: "description", content: "Minigolf, speeltuin, crossbaan, wandelen op het klompenpad en groepsactiviteiten." },
    ],
  }),
  component: Page,
});

const activities = [
  {
    img: minigolf,
    title: "De GolfTuin",
    body: "Met trots verwelkomen we je in onze vernieuwde GolfTuin. Een fijne plek om te ontspannen, te genieten van de omgeving en samen een leuke tijd te beleven. Entree €9,50 voor volwassenen en €7,50 voor kinderen t/m 12 jaar.",
  },
  {
    img: speeltuin,
    title: "Speel- & CrossTuin",
    body: "Ook voor de jonge buitengenieter is er genoeg te beleven. Er is een speeltuin en crossbaan aanwezig waar kinderen vrijblijvend mogen spelen. Ideaal — want als (groot)ouder kun je zelf heerlijk op het terras zitten met uitzicht over het groen.",
  },
  {
    img: klompenpad,
    title: "Het Plaggenstekerspad",
    body: "Het klompenpad is een wandelroute van 12 kilometer door het landschap van Hoenderloo. Je wandelt door weilanden, bos, heide, lanen en stuifzand en langs de mooie Helderingkerk, de Heldringput en een echte plaggenhut.",
  },
  {
    img: garden,
    title: "Indoor & outdoor groepsactiviteiten",
    body: "Boogschieten, Highland Games, Jongens tegen de Meiden, Wie is de Mol en meer. Perfect voor groepen, teamuitjes en een complete dag bij De ProefTuin.",
  },
];

function Page() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={garden} alt="Activiteiten" width={1600} height={1067} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col justify-end pb-12">
          <span className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase mb-4">Beleef de Veluwe</span>
          <h1 className="text-primary-foreground text-5xl md:text-7xl">Activiteiten</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        {activities.map((a, i) => (
          <div key={a.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img src={a.img} alt={a.title} loading="lazy" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-primary/70">0{i + 1}</span>
              <h2 className="mt-3 text-4xl md:text-5xl">{a.title}</h2>
              <p className="mt-6 text-foreground/80 leading-relaxed text-lg">{a.body}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
