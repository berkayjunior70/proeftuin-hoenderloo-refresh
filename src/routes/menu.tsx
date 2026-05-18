import { createFileRoute } from "@tanstack/react-router";
import heroPizza from "@/assets/hero-pizza.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — De ProefTuin Hoenderloo" },
      { name: "description", content: "Houtoven pizza's, Italiaanse diner- en lunchgerechten met verse, ambachtelijke ingrediënten." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string; tag?: "veg" | "vegan" | "pittig" };

const pizzas: Item[] = [
  { name: "Margherita", desc: "La San Marzano tomatensaus, mozzarella & basilicum", price: "13,50", tag: "veg" },
  { name: "Pizza Verdure", desc: "Tomatensaus, mozzarella, gegrilde courgette, paprika, rode ui, Italiaanse olijven & artisjokken. Ook vegan mogelijk.", price: "17,50", tag: "veg" },
  { name: "Caprese", desc: "Tomatensaus, buffelmozzarella, geconfijte tomaatjes, basilicum & extra vierge olijfolie", price: "19,00", tag: "veg" },
  { name: "Sicilia", desc: "Tomatensaus, ansjovis, oregano, kappertjes & Italiaanse olijven", price: "17,50" },
  { name: "Tonno", desc: "Datterini tomaten, mozzarella, yellowfin tonijnfilet, zoetzure ui, citroenpeper & citroenolie", price: "19,50" },
  { name: "Salmone", desc: "Tomatensaus, mozzarella, spinazie, huisgerookte zalm, roomkaas & zwarte peper", price: "19,50" },
  { name: "Salame Napoli", desc: "Tomatensaus, mozzarella, Napolitaanse salami & Grana padano", price: "15,50" },
  { name: "Prosciutto e Funghi", desc: "Tomatensaus, mozzarella, gebakken champignons, ham & Grana padano", price: "17,50" },
  { name: "Spianata e Gorgonzola", desc: "Tomatensaus, mozzarella, spianata piccante & gorgonzola", price: "18,00", tag: "pittig" },
  { name: "Calabria", desc: "Tomatensaus, mozzarella, n'duja, spianata piccante, rode ui, olijven & Grana padano", price: "19,00", tag: "pittig" },
  { name: "Calzone", desc: "Tomatensaus, mozzarella, ham, salami, champignons, rode ui & Italiaanse olijven", price: "19,50" },
  { name: "Burrata al Tartufo", desc: "Tomatensaus, cherrytomaatjes, Grana padano, Prosciutto di Parma D.O.P., truffelburrata, balsamico glaze & rucola", price: "22,50", featured: true } as Item & { featured?: boolean },
];

const pizzaBianca: Item[] = [
  { name: "Bianca Formaggi", desc: "Mozzarella, gorgonzola, provola, Grana padano & zwarte peper", price: "18,50", tag: "veg" },
  { name: "Pera Gorgonzola", desc: "Mozzarella, peer, gorgonzola, Grana padano, honing, walnoten & zwarte peper", price: "18,50", tag: "veg" },
  { name: "Bianca Geitenkaas & Spinazie", desc: "Mozzarella, spinazie, geitenkaas, honing, walnoten & blauwe bessen", price: "19,50", tag: "veg" },
  { name: "Salsiccia Friarielli", desc: "Friarielli, mozzarella, gerookte provola, Siciliaanse venkelworst & rode peper", price: "19,50" },
  { name: "Bianca Nerano", desc: "Courgettecrème, provola, Grana padano, Siciliaanse venkelworst, courgette chips & basilicum", price: "19,50" },
];

const starters: Item[] = [
  { name: "Broodplankje", desc: "Brood van eigen deeg met aioli & olijven", price: "8,50", tag: "veg" },
  { name: "Marinara", desc: "Versgebakken focaccia met tomatensaus, knoflook & oregano", price: "9,50", tag: "veg" },
  { name: "Calamari", desc: "Versgesneden pijlstaartinktvis met huisgemaakte aioli", price: "13,00" },
  { name: "Tortello di Salmone Affumicato", desc: "Huisgemaakte tortello met huisgerookte zalm, dille & citroen en bisque van langoustines", price: "14,50" },
  { name: "Croquetjes Prosciutto di Parma D.O.P.", desc: "Twee croquetten met picante tomatenmarmelade & geroosterde paprika", price: "13,50", tag: "pittig" },
  { name: "Manzo di Duo Tonnato", desc: "Gegrilde bavettesteak met groene tonijnmayonaise & N'duja", price: "13,50" },
  { name: "Carne Crudo", desc: "Italiaanse steak tartaar met zongedroogde tomaten, ansjovis, olijven, Parmigiano Reggiano & kappertjes", price: "14,00" },
  { name: "Bomba Caprese", desc: "Bombe van burrata & tomaat met rucola, balsamico en pijnboompitjes", price: "14,50", tag: "veg" },
];

const mains: Item[] = [
  { name: "Gerecht van de dag", desc: "Wisselende dagspecialiteit van de chef", price: "24,50" },
  { name: "Tagliatella Verde alla Nerano", desc: "Spinaziepasta met saus van courgette, courgette chips, Parmigiano Reggiano, Pecorino Romano & huisgerookte zalm", price: "25,00", tag: "pittig" },
  { name: "Risotto Nero di Seppia", desc: "Risotto met inkt van sepia & pijlstaartinktvis, gebakken rode kool, langoustine-bisque & gegrilde Argentijnse garnalen", price: "26,00" },
  { name: "Rigatoni di Catania", desc: "Rigatoni met pistache, stracciatellasaus & gebrande pistachenootjes. Keuze uit gegrilde bavette of gamba's (combi +€8,50)", price: "24,00" },
  { name: "Gerookte Italiaanse Buffel Ribeye", desc: "200 gr huisgerookte buffelribeye met stracciatella, N'duja, prei en pistachenootjes", price: "32,50", tag: "pittig" },
  { name: "Fusilloni con Ragù di Agnello Bianco", desc: "Fusilloni met blanke ragù van lamsvlees & artisjokken, schuim van Pecorino Romano & zoete aardappel chips met Ras el Hanout", price: "26,50" },
  { name: "Lasagna alla Napoletana", desc: "Lasagne met San Marzano tomatensaus, Italiaanse venkelworst, gehaktballetjes, guanciale & Parmigiano Reggiano", price: "25,00", tag: "pittig" },
  { name: "Tagliatella alla Campania", desc: "Tagliatella van biet met fiarelli, gebrande geitenkaas, walnoten, blauwe bessen en honing", price: "24,50", tag: "veg" },
];

const desserts: Item[] = [
  { name: "Crostata di Frutta", desc: "Zandtaartje met roodfruit jam, bakkersroom, vers fruit & vanille-ijs", price: "11,00" },
  { name: "Huisgemaakte Tiramisù", desc: "Met ei, mascarpone en lange vingers in espresso-amaretto (alcoholvrij)", price: "11,00" },
  { name: "Ricordo di Primavera", desc: "Vanille-ijs, amandelcrème, ei, slagroom & cantuccini", price: "11,00" },
  { name: "Piemonte al Dolce", desc: "Glaasje met koekcrumble, dulce de leche & Italiaanse merengue", price: "11,00" },
  { name: "Panna Cotta", desc: "Panna cotta met roodfruit jam & verse vruchten", price: "11,00" },
  { name: "Kinder Dessert", desc: "Vanille-ijs opgemaakt als clown met vers fruit en lekkernijen", price: "7,50" },
];

const lunchPinsa: Item[] = [
  { name: "Salmone", desc: "Huisgerookte zalm met rucola, avocado & honing-mosterddressing", price: "15,00" },
  { name: "Carpaccio", desc: "Met truffelmayonaise, rucola, Parmigiano Reggiano & pijnboompitten", price: "15,00" },
  { name: "Speck & Geitenkaas", desc: "Warme geitenkaas, krokante parmaham, tijm & honing", price: "15,00" },
  { name: "Prosciutto di Parma D.O.P.", desc: "Rucola, parmaham, burratacrème, tomaatjes & olijfolie", price: "15,00" },
  { name: "Paddenstoelen & Taleggio", desc: "Gebakken paddenstoelen met knoflook, peterselie, ui, rucola & taleggiocrème", price: "15,00", tag: "veg" },
];

const lunchPanuzzo: Item[] = [
  { name: "Calamari", desc: "Gefrituurde pijlstaartinktvis, mesclun & aioli", price: "15,00" },
  { name: "Tonno", desc: "Huisgemaakte tonijnsalade met paprika, rode ui, olijven & rucola", price: "15,00" },
  { name: "Mortadella", desc: "Italiaanse worst met burratacrème, citroenmayonaise, tomaatjes & pistache", price: "15,00" },
  { name: "Salami Napoli", desc: "Grove salami met paprika, ui, olijf & truffelmayonaise", price: "15,00" },
  { name: "Napolitana", desc: "Huisgemaakte Napolitaanse gehaktballetjes in tomatensaus", price: "15,00" },
  { name: "Caprese", desc: "Buffelmozzarella, rucola, tomaatjes & huisgemaakte pesto", price: "15,00", tag: "veg" },
  { name: "Verdure", desc: "Tomaat, paprika, courgette, artisjokken, olijven & olijfolie-balsamicodressing", price: "15,00", tag: "vegan" },
];

const ilPranzo: Item[] = [
  { name: "Zuppa di Pomodoro", desc: "Italiaanse tomatensoep met ricotta", price: "12,50", tag: "veg" },
  { name: "Tagliatelle alla Bolognese", desc: "Traditioneel met tomaatjes en basilicum", price: "14,50" },
  { name: "Tagliatelle Verdure", desc: "Gegrilde groenten in traditionele tomatensaus", price: "14,50", tag: "veg" },
  { name: "Insalata Tonno", desc: "Verse salade met tonijn, tomaat, paprika, rode ui en Italiaanse olijven", price: "15,00" },
  { name: "Insalata di Verdure", desc: "Verse salade met gegrilde groenten & olijfolie-balsamicodressing", price: "14,50", tag: "vegan" },
];

const sideSalads: Item[] = [
  { name: "Tonno", price: "6,50" },
  { name: "Caprese", price: "6,50", tag: "veg" },
  { name: "Verde", price: "6,50", tag: "veg" },
];

const bambini: Item[] = [
  { name: "Kinderpasta Bolognese", price: "8,50" },
  { name: "Friet met snack", price: "8,50" },
  { name: "Pizza Margherita", desc: "Tomatensaus, mozzarella & basilicum", price: "9,00", tag: "veg" },
  { name: "Pizza Salame Napoli", desc: "Tomatensaus, mozzarella, salami napoli & Grana padano", price: "11,50" },
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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
          Verrassende en verfijnde Italiaanse gerechten, bereid met verse seizoensingrediënten en huisgemaakte producten. Onze pizza's komen vers uit de houtoven.
        </p>
      </section>

      <MenuSection title="Pizza's" items={pizzas} />
      <MenuSection title="Pizza Bianca" items={pizzaBianca} />

      <Divider label="Diner · vanaf 17:00" />

      <MenuSection title="Voorgerechten" items={starters} />
      <MenuSection title="Hoofdgerechten" items={mains} />
      <MenuSection title="Dessert" items={desserts} />

      <Divider label="Lunch · tot 16:00" />

      <MenuSection title="Pinsa · krokant gebakken focaccia" items={lunchPinsa} />
      <MenuSection title="Panuzzo · dubbel gevouwen focaccia" items={lunchPanuzzo} />
      <MenuSection title="Il Pranzo" items={ilPranzo} />

      <Divider label="Erbij & voor de kids" />

      <MenuSection title="Side Salads" items={sideSalads} />
      <MenuSection title="Menu Bambini" items={bambini} />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center space-y-3">
        <p className="text-sm text-muted-foreground italic">
          🌿 vegetarisch · 🌶️ pittig · Extra toppings of glutenvrij? Wij houden graag rekening met uw wensen. Heeft u allergieën? Laat het ons weten.
        </p>
        <p className="text-xs text-muted-foreground">Het D.O.P. (Denominazione di Origine Protetta) label garandeert traditionele herkomst uit een specifiek Italiaans gebied. Wijzigingen voorbehouden.</p>
      </section>
    </>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-center gap-6">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs tracking-[0.4em] uppercase text-primary">{label}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </section>
  );
}

function MenuSection({ title, items }: { title: string; items: (Item & { featured?: boolean })[] }) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-12">
      <h2 className="text-4xl mb-10 text-primary">{title}</h2>
      <div className="divide-y divide-border">
        {items.map((i) => (
          <div key={i.name} className={`py-6 flex justify-between gap-8 ${i.featured ? "bg-accent/10 -mx-6 px-6 rounded-xl" : ""}`}>
            <div>
              <h3 className="text-xl flex items-center gap-3 flex-wrap">
                {i.name}
                {i.tag === "veg" && <span className="text-[10px]">🌿</span>}
                {i.tag === "vegan" && <span className="text-[10px] uppercase tracking-widest text-primary">vegan</span>}
                {i.tag === "pittig" && <span className="text-[10px]">🌶️</span>}
                {i.featured && <span className="text-[10px] uppercase tracking-widest bg-accent text-accent-foreground px-2 py-0.5 rounded-full">Specialiteit</span>}
              </h3>
              {i.desc && <p className="mt-1 text-foreground/70 text-sm leading-relaxed">{i.desc}</p>}
            </div>
            <span className="text-xl font-display text-primary shrink-0">€{i.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
