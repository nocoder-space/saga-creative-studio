import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SagaLines } from "./SagaLines";
import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Saga Creative — anak desa dengan standar nasional. Membantu brand dan UMKM
              tampil lebih kuat, lebih rapi, dan lebih siap berkembang.
            </p>
            <div className="mt-6 text-primary-foreground/70">
              <SagaLines className="text-lime" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-lime">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/about", "About"],
                ["/services", "Services"],
                ["/portfolio", "Portfolio"],
                ["/pricing", "Pricing"],
                ["/process", "Process"],
                ["/insights", "Insights"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-primary-foreground/80 hover:text-lime transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-lime">
              Kontak
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85">
              <li>Email: sagacore279@gmail.com</li>
              <li>Lokasi: Desa Pajajar, Rajagaluh, Majalengka</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://instagram.com/SagaCreative_" target="_blank" rel="noreferrer"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-lime hover:text-lime-foreground hover:border-lime transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/@Sagacore09" target="_blank" rel="noreferrer"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-lime hover:text-lime-foreground hover:border-lime transition">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com/@SagaCreative_" target="_blank" rel="noreferrer"
                 className="inline-flex h-10 items-center justify-center rounded-full border border-primary-foreground/20 px-4 text-xs font-semibold hover:bg-lime hover:text-lime-foreground hover:border-lime transition">
                TikTok
              </a>
              <a href="https://threads.net/@Sagaone" target="_blank" rel="noreferrer"
                 className="inline-flex h-10 items-center justify-center rounded-full border border-primary-foreground/20 px-4 text-xs font-semibold hover:bg-lime hover:text-lime-foreground hover:border-lime transition">
                Threads
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Saga Creative Agency. All rights reserved.</p>
          <p className="font-display tracking-widest uppercase">From Local to National</p>
        </div>
      </div>
    </footer>
  );
}
