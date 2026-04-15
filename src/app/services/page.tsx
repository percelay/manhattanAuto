import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services — Manhattan Auto Repair Inc.",
  description:
    "NYS inspections, diagnostics, maintenance, full auto repair, tires and towing. Walk-ins welcome for inspections.",
};

const services = [
  {
    title: "NYS Inspections",
    description:
      "We are doing walk-ins for NYS inspections — no appointment is necessary. Monday–Friday 8am–3pm, Saturday 8:30am–11:30am.",
    note: "Walk-ins welcome — no appointment needed.",
  },
  {
    title: "Comprehensive Diagnostics",
    description:
      "Expert troubleshooting for check engine lights, auto vibrations, engine oil lights, auto noise, and no-start issues.",
    note: null,
  },
  {
    title: "Preventative Maintenance",
    description:
      "Keep your car running smoothly with oil changes, wheel alignments, tire pressure monitoring, and general automotive maintenance.",
    note: null,
  },
  {
    title: "Full-Service Auto Repair",
    description:
      "Complete repair services including engine, transmission, brakes, exhaust, lighting, HVAC, steering, suspension, and electrical systems.",
    note: null,
  },
  {
    title: "Towing & Tire Services",
    description:
      "Reliable vehicle and trailer towing, professional tire installation, and wheel and tire repair.",
    note: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Photo header */}
      <div className="w-full h-[40vh] relative overflow-hidden">
        <Image
          src="/DSC02875.JPG"
          alt="Vehicle on lift at Manhattan Auto Repair"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <section className="py-12 md:py-16">
          <h1 className="text-2xl font-semibold text-text mb-10">Services</h1>

          <div className="flex flex-col divide-y divide-border">
            {services.map((s) => (
              <div key={s.title} className="py-8 md:grid md:grid-cols-3 md:gap-10">
                <div className="mb-2 md:mb-0">
                  <h2 className="text-base font-semibold text-text">
                    {s.title}
                  </h2>
                  {s.note && (
                    <p className="text-xs text-red mt-1">{s.note}</p>
                  )}
                </div>
                <p className="text-sm text-muted leading-relaxed md:col-span-2">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Shop interior — full image, no crop */}
        <section className="pb-16">
          <Image
            src="/DSC02876.JPG"
            alt="Official NYS Motor Vehicle Inspection Station — Manhattan Auto Repair"
            width={5152}
            height={3864}
            className="w-full h-auto block"
            sizes="100vw"
          />
        </section>

        {/* 12-month warranty note */}
        <section className="pb-16 border-t border-border pt-8">
          <p className="text-sm text-muted max-w-xl leading-relaxed">
            We provide 12-month warranties with all of our services for your
            peace of mind. Our shop only uses parts from reputable brands to
            ensure that your vehicle is always ready to drive.
          </p>
        </section>
      </div>
    </>
  );
}
