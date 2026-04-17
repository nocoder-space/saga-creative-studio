import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Instagram, Youtube, MessageCircle, ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { SagaLines } from "@/components/SagaLines";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saga Creative Agency" },
      { name: "description", content: "Hubungi Saga Creative untuk konsultasi gratis. Email sagacore279@gmail.com — Desa Pajajar, Rajagaluh, Majalengka." },
      { property: "og:title", content: "Hubungi Saga Creative" },
      { property: "og:description", content: "Konsultasi gratis untuk brand Anda." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-20">
        <SectionLabel>Kontak</SectionLabel>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl text-balance">
          Mari diskusikan <em className="not-italic text-sage">brand Anda</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Konsultasi gratis, tanpa komitmen. Kami akan bantu petakan langkah pertama yang paling masuk akal.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-7 lg:p-10 chamfer-tr">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-lime-foreground">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-primary">Terima kasih!</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    Pesan Anda sudah kami terima. Tim Saga akan menghubungi dalam 24 jam ke email atau WhatsApp Anda.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nama Brand / UMKM" name="brand" required />
                    <Field label="Nama Kontak" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="WhatsApp" name="wa" required />
                  </div>
                  <SelectField label="Paket yang diminati" name="package" options={["Belum tahu", "Paket Standar — Rp 500.000", "Paket Grow — Rp 700.000", "Paket Premium — Rp 1.500.000"]} />
                  <TextareaField label="Ceritakan tentang brand Anda" name="story" required />
                  <Field label="Budget range (opsional)" name="budget" />
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                  >
                    Kirim Pesan <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="lg:col-span-5 space-y-5">
            <InfoCard icon={<Mail className="h-5 w-5" />} label="Email" value="sagacore279@gmail.com" href="mailto:sagacore279@gmail.com" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} label="Lokasi" value="Desa Pajajar, Rajagaluh, Majalengka" />
            <InfoCard icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="[WHATSAPP NUMBER FROM PROFILE]" />

            <div className="rounded-2xl border border-border bg-cream p-6 chamfer-tr">
              <SagaLines className="text-primary" />
              <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-widest text-primary">
                Sosial Media
              </h3>
              <div className="mt-4 grid gap-3">
                <Social icon={<Instagram className="h-4 w-4" />} label="Instagram" handle="@SagaCreative_" href="https://instagram.com/SagaCreative_" />
                <Social icon={<MessageCircle className="h-4 w-4" />} label="TikTok" handle="@SagaCreative_" href="https://tiktok.com/@SagaCreative_" />
                <Social icon={<Youtube className="h-4 w-4" />} label="YouTube" handle="@Sagacore09" href="https://youtube.com/@Sagacore09" />
                <Social icon={<MessageCircle className="h-4 w-4" />} label="Threads" handle="@Sagaone" href="https://threads.net/@Sagaone" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Saga Creative Location"
                src="https://www.google.com/maps?q=Pajajar%20Rajagaluh%20Majalengka&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="border-0 border-b-2 border-border bg-transparent py-2.5 text-sm outline-none transition focus:border-lime"
      />
    </label>
  );
}

function TextareaField({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="resize-none border-0 border-b-2 border-border bg-transparent py-2.5 text-sm outline-none transition focus:border-lime"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <select
        name={name}
        className="border-0 border-b-2 border-border bg-transparent py-2.5 text-sm outline-none transition focus:border-lime"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">{icon}</span>
      <div>
        <div className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-base font-semibold text-primary">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

function Social({ icon, label, handle, href }: { icon: React.ReactNode; label: string; handle: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition hover:border-primary">
      <span className="flex items-center gap-3 text-sm">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">{icon}</span>
        <span className="font-semibold text-primary">{label}</span>
      </span>
      <span className="text-sm text-muted-foreground">{handle}</span>
    </a>
  );
}
