export function Logo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const color = variant === "light" ? "var(--primary-foreground)" : "var(--primary)";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C14 14 10 22 10 30c0 8 6 14 14 14s14-6 14-14c0-8-4-16-14-26z" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M24 14v28M19 22l5 5 5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-wide" style={{ color, fontFamily: "var(--font-display)" }}>De ProefTuin</span>
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-70" style={{ color }}>Hoenderloo</span>
      </div>
    </div>
  );
}
