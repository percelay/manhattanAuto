const stats = [
  { value: "60+", label: "Years Combined Experience" },
  { value: "12-Month", label: "Warranty on All Services" },
  { value: "Walk-In", label: "NYS Inspections Welcome" },
  { value: "Same-Day", label: "Service Available" },
];

export default function StatsBand() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center md:items-start px-0 md:px-10 gap-1 first:pl-0"
            >
              <span className="font-display font-extrabold text-2xl md:text-3xl text-amber leading-none">
                {stat.value}
              </span>
              <span className="text-fg-muted text-xs md:text-sm font-medium tracking-wide text-center md:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
