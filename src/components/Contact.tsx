import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ClipboardCheck,
} from "lucide-react";

const hours = [
  { day: "Mon–Fri", time: "08:00 am – 05:00 pm" },
  { day: "Sat", time: "08:00 am – 01:00 pm" },
  { day: "Sun", time: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="divider-amber" />
            <span className="text-amber text-xs font-bold tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-none text-fg">
            Visit Manhattan
            <br />
            <span className="text-amber">Auto Repair</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <a
              href="https://maps.google.com/?q=552+W+48th+Street+New+York+NY+10036"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-5 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/15 transition-colors duration-200">
                <MapPin size={18} className="text-amber" />
              </div>
              <div>
                <p className="text-fg-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-fg font-medium text-sm leading-relaxed">
                  552 W 48th Street
                  <br />
                  New York, NY 10036, US
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:2127574366"
              className="group flex items-start gap-4 bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-5 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/15 transition-colors duration-200">
                <Phone size={18} className="text-amber" />
              </div>
              <div>
                <p className="text-fg-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="text-fg font-medium text-sm">(212) 757-4366</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:Manhattanauto11@gmail.com"
              className="group flex items-start gap-4 bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-5 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/15 transition-colors duration-200">
                <Mail size={18} className="text-amber" />
              </div>
              <div>
                <p className="text-fg-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-fg font-medium text-sm break-all">
                  Manhattanauto11@gmail.com
                </p>
              </div>
            </a>

            {/* Walk-in inspection callout */}
            <div className="flex items-start gap-4 bg-amber/10 border border-amber/25 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center shrink-0">
                <ClipboardCheck size={18} className="text-amber" />
              </div>
              <div>
                <p className="text-amber font-bold text-sm mb-1">
                  Walk-Ins for NYS Inspections
                </p>
                <p className="text-amber/70 text-xs leading-relaxed">
                  Mon–Fri: 8am–3pm
                  <br />
                  Sat: 8:30am–11:30am
                  <br />
                  No appointment necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Hours + Image */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Hours card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center">
                  <Clock size={17} className="text-amber" />
                </div>
                <h3 className="text-fg font-bold text-base">Business Hours</h3>
              </div>
              <div className="flex flex-col gap-2">
                {hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
                  >
                    <span className="text-fg font-medium text-sm">{row.day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        row.time === "Closed" ? "text-fg-subtle" : "text-amber"
                      }`}
                    >
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shop image */}
            <div className="relative rounded-2xl overflow-hidden h-56 md:h-72 shadow-card">
              <Image
                src="/shop2.webp"
                alt="Manhattan Auto Repair exterior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-fg font-display font-bold text-lg leading-tight">
                  552 W 48th Street
                </p>
                <p className="text-fg-muted text-sm">New York, NY 10036</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
