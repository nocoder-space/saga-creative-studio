interface Props {
  className?: string;
  count?: number;
}

export function SagaLines({ className = "text-primary", count = 3 }: Props) {
  return (
    <div className={`flex flex-col gap-1 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="block h-[3px] rounded-full bg-current"
          style={{ width: `${40 - i * 6}px` }}
        />
      ))}
    </div>
  );
}
