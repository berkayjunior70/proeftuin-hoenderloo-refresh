import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-primary-foreground/80 leading-relaxed">
            Midden in de Veluwse natuur. Houtoven gebakken pizza's, minigolf, high tea en eindeloos spelen voor jong en oud.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-4 opacity-80">Bezoek</h4>
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            Krimweg 23<br/>7351 AS Hoenderloo<br/>Nederland
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-4 opacity-80">Ontdek</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/menu" className="hover:text-primary-foreground">Menu</Link></li>
            <li><Link to="/groepen" className="hover:text-primary-foreground">Groepen</Link></li>
            <li><Link to="/high-tea" className="hover:text-primary-foreground">High Tea</Link></li>
            <li><Link to="/activiteiten" className="hover:text-primary-foreground">Activiteiten</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} De ProefTuin Hoenderloo</span>
          <span>Puur natuurlijk genieten in de Veluwe</span>
        </div>
      </div>
    </footer>
  );
}
