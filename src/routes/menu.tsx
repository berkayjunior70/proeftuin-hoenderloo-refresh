import { createFileRoute } from "@tanstack/react-router";
import heroPizza from "@/assets/hero-pizza.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — De ProefTuin Hoenderloo" },
      { name: "description", content: "Houtoven pizza's, verfijnde Italiaanse gerechten en huisgemaakte producten." },
    ],
  }),
  component: MenuPage,
});

const pizzas = [
  { name: "Margherita", desc: "Tomatensaus, mozzarella, basilicum", price: "14,50" },
  { name: "Funghi Superiore", desc: "Mozzarella, champignons, bresaola, rode ui, lavas, Pecorino Romano D.O.P., zwarte peper", price: "19,50", featured: true },
  { name: "Salame Napoli", desc: "Tomatensaus, mozzarella, pittige salami", price: "16,50" },
  { name: "Quattro Formaggi", desc: "Vier soorten Italiaanse kaas, walnoten, honing", price: "17,50" },
  { name: "Prosciutto e Rucola", desc: "Parmaham, rucola, kerstomaat, parmezaan", price: "18,50" },
  { name: "Vegetariana", desc: "Gegrilde groenten, mozzarella, pesto", price: "16,00" },
];

const starters = [
  { name: "Bruschetta", desc: "Geroosterd brood met tomaat & basilicum", price: "8,50" },
  { name: "Burrata", desc: "Romige burrata, geroosterde tomaat, olijfolie", price: "12,50" },
  { name: "Carpaccio", desc: "Dun gesneden rund, parmezaan, pijnboompitten", price: "13,50" },
];

const mains = [
  { name: "Risotto van de chef", desc: "Met seizoensgebonden ingrediënten", price: "21,50" },
  { name: "Tagliata", desc: "Gegrilde entrecote, rucola, parmezaan", price: "26,50" },
  { name: "Pasta van het huis", desc: "Verse pasta, dagelijks wisselend", price: "19,50" },
];

function MenuPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={heroPizza} alt="Menu" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col justify-end pb-12">
          <span className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase mb-4">Onze keuken</span>
          <h1 className="text-primary-foreground text-5xl md:text-7xl">Menu</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
          Verrassende en verfijnde Italiaanse gerechten, bereid met verse seizoensgebonden ingrediënten en huisgemaakte producten.
        </p>
      </section>

      <MenuSection title="Houtoven pizza's" items={pizzas} />
      <MenuSection title="Voorgerechten" items={starters} />
      <MenuSection title="Hoofdgerechten" items={mains} />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-sm text-muted-foreground italic">Het volledige menu en wijnkaart vind je in het restaurant. Wijzigingen voorbehouden.</p>
      </section>
    </>
  );
}

function MenuSection({ title, items }: { title: string; items: { name: string; desc: string; price: string; featured?: boolean }[] }) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16">
      <h2 className="text-4xl mb-10 text-primary">{title}</h2>
      <div className="divide-y divide-border">
        {items.map((i) => (
          <div key={i.name} className={`py-6 flex justify-between gap-8 ${i.featured ? "bg-accent/10 -mx-6 px-6 rounded-xl" : ""}`}>
            <div>
              <h3 className="text-xl flex items-center gap-3">
                {i.name}
                {i.featured && <span className="text-[10px] uppercase tracking-widest bg-accent text-accent-foreground px-2 py-0.5 rounded-full">Van de maand</span>}
              </h3>
              <p className="mt-1 text-foreground/70 text-sm leading-relaxed">{i.desc}</p>
            </div>
            <span className="text-xl font-display text-primary shrink-0">€{i.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
