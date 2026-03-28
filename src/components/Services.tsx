import Image from "next/image";
import {
  ClipboardCheck,
  Gauge,
  Wrench,
  Cog,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "NYS Inspections",
    description:
      "We are doing walk-ins for NYS inspections — no appointment is necessary. Monday–Friday 8am–3pm, Saturday 8:30am–11:30am.",
    badge: "Walk-Ins Welcome",
  },
  {
    icon: Gauge,
    title: "Comprehensive Diagnostics",
    description:
      "Expert troubleshooting for check engine lights, auto vibrations, engine oil lights, auto noise, and no-start issues.",
    badge: null,
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance",
    description:
      "Keep your car running smoothly with oil changes, wheel alignments, tire pressure monitoring, and general automotive maintenance.",
    badge: null,
  },
  {
    icon: Cog,
    title: "Full-Service Auto Repair",
    description:
      "Complete repair services including engine, transmission, brakes, exhaust, lighting, HVAC, steering, suspension, and electrical systems.",
    badge: null,
  },
  {
    icon: Truck,
    title: "Towing & Tire Services",
    description:
      "Reliable vehicle and trailer towing, professional tire installation, and wheel and tire repair.",
    badge: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="divider-amber" />
              <span className="text-amber text-xs font-bold tracking-widest uppercase">
                Services
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-none text-fg">
              Everything Your
              <br />
              <span className="text-amber">Car Needs</span>
            </h2>
          </div>
          <p className="text-fg-muted max-w-sm text-sm md:text-base leading-relaxed md:text-right">
            From walk-in inspections to complex engine work — we handle it all
            under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isFeatured = i === 0;
            return (
              <div
                key={service.title}
                className={`group relative bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-6 transition-colors duration-200 shadow-card ${
                  isFeatured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-amber/10 border border-amber/25 text-amber text-xs font-semibold px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center mb-5 group-hover:bg-amber/15 transition-colors duration-200">
                  <Icon size={20} className="text-amber" />
                </div>

                {/* Text */}
                <h3 className="font-display font-bold text-xl text-fg mb-2">
                  {service.title}
                </h3>
                <p className="text-fg-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* Image card */}
          <div className="relative rounded-2xl overflow-hidden min-h-48 sm:min-h-64">
            <Image
              src="/engineverticle.webp"
              alt="Engine repair at Manhattan Auto"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="text-amber text-xs font-bold tracking-widest uppercase mb-1">
                Precision Work
              </p>
              <p className="text-fg font-display font-bold text-lg leading-tight">
                Engine &amp; Transmission Specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
