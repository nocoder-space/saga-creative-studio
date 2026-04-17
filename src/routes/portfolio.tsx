import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";
import caseChicken from "@/assets/case-chicken.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Saga Creative Agency" },
      { name: "description", content: "Studi kasus dan karya pilihan Saga Creative untuk brand lokal & UMKM berkembang." },
      { property: "og:title", content: "Portfolio Saga Creative" },
      { property: "og:description", content: "Karya pilihan: branding, content, dan performance." },
      { property: "og:image", content: caseChicken },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  { img: p1, tag: "Content", title: "Content shoot harian untuk brand UMKM" },
  { img: p2, tag: "Branding", title: "Eksplorasi identitas visual brand baru" },
  { img: p3, tag: "Production", title: "Behind the scene konten pemilik usaha" },
] as const;

function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Portfolio</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Karya yang lahir dari <em className="not-italic text-sage">kolaborasi nyata</em>.
        </h1>
      </section>

      {/* FEATURED */}
      <section className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl chamfer-bl border border-border">
              <img src={caseChicken} alt="Ab Chicken Rajagaluh" className="h-[520px] w-full object-cover" width={1600} height={1200} />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-foreground">Featured Case</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Ab Chicken Rajagaluh</h2>
            <p className="mt-4 text-muted-foreground">
              Membangun kehadiran digital yang konsisten untuk brand kuliner lokal di Rajagaluh —
              dari identitas visual, konten harian, hingga distribusi yang relevan dengan audiens lokal.
            </p>
            <div className="mt-6">
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">Strategi</span>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Konten foto & video produk yang konsisten",
                  "Copywriting + caption menjual",
                  "Setup channel & distribusi konten lokal",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-sage" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                ["Konten", "Konsisten"],
                ["Visual", "Rapi"],
                ["Channel", "Aktif"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-card p-4">
                  <SagaLines className="text-primary" />
                  <div className="mt-2 font-display text-lg font-bold text-primary">{v}</div>
                  <div className="text-xs text-muted-foreground">{k}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground italic">
              *Metrik detail tersedia atas permintaan klien.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Proyek lainnya</h2>
          <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Diskusi proyek <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card chamfer-tr">
              <div className="relative h-60 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
              </div>
              <div className="p-5">
                <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-sage">{p.tag}</span>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-primary">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
