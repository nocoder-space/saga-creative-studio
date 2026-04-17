import { SagaLines } from "./SagaLines";

export function SectionLabel({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "lime" }) {
  return (
    <div className="flex items-center gap-3">
      <SagaLines className={tone === "lime" ? "text-lime" : "text-primary"} />
      <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  );
}
