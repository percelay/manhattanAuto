import Image from "next/image";
import { ShieldCheck, Star, Wrench } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "12-Month Warranties",
    body: "We provide 12-month warranties with all of our services for your peace of mind.",
  },
  {
    icon: Star,
    title: "Reputable Brand Parts",
    body: "Our shop only uses parts from reputable brands to ensure that your vehicle is always ready to drive.",
  },
  {
    icon: Wrench,
    title: "Stress-Free Experience",
    body: "We're committed to providing a stress-free experience to both new and returning customers.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-card">
              <Image
                src="/shopguy1.jpg"
                alt="Mechanic at Manhattan Auto Repair"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Amber corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border rounded-xl p-4 shadow-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-amber" />
              </div>
              <div>
                <p className="text-fg font-bold text-sm leading-none">
                  Satisfaction Guaranteed
                </p>
                <p className="text-fg-muted text-xs mt-1">
                  On every repair &amp; service
                </p>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-6 -left-4 md:-left-8 bg-amber rounded-xl px-4 py-3 shadow-amber-glow">
              <p className="text-black font-display font-extrabold text-2xl leading-none">
                60+
              </p>
              <p className="text-black/70 text-xs font-semibold mt-0.5">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="divider-amber" />
              <span className="text-amber text-xs font-bold tracking-widest uppercase">
                About
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-none text-fg mb-6">
              Dedicated to Quality.
              <br />
              <span className="text-amber">Committed to You.</span>
            </h2>

            <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-4">
              The mechanics at our shop have over 60 years of experience between
              them. They are dedicated to providing high-quality repairs to keep
              you safe and happy.
            </p>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-10">
              Whether you&apos;re coming in for a routine inspection or a repair
              service, we promise that you will be completely satisfied with our
              work.
            </p>

            {/* Highlight cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 bg-card border border-border hover:border-border-bright rounded-xl p-4 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={17} className="text-amber" />
                    </div>
                    <div>
                      <p className="text-fg font-semibold text-sm mb-1">
                        {item.title}
                      </p>
                      <p className="text-fg-muted text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
