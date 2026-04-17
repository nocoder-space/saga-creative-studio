import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-saga.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${light ? "bg-cream" : "bg-primary"}`}>
        <img src={logo} alt="Saga Creative" className={`h-6 w-6 ${light ? "" : "invert"}`} />
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${light ? "text-cream" : "text-primary"}`}>
        Saga<span className="text-sage">Creative</span>
      </span>
    </Link>
  );
}
