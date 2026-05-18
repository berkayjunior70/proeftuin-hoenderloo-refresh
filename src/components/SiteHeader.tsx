import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/groepen", label: "Groepen" },
  { to: "/high-tea", label: "High Tea" },
  { to: "/activiteiten", label: "Activiteiten" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm tracking-wide uppercase text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <a href="https://deproeftuin-afhaal.waiterz.nl/" target="_blank" rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm tracking-wide uppercase hover:bg-primary/90 transition-all shadow-[var(--shadow-soft)]">
            Afhalen
          </a>
        </nav>
        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80">{n.label}</Link>
            ))}
            <a href="https://deproeftuin-afhaal.waiterz.nl/" target="_blank" rel="noreferrer" className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-center">Afhalen</a>
          </div>
        </div>
      )}
    </header>
  );
}
