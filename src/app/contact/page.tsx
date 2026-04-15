import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact — Manhattan Auto Repair Inc.",
  description:
    "552 W 48th Street, New York, NY 10036. (212) 757-4366. Mon–Fri 8am–5pm, Sat 8am–1pm.",
};

export default function ContactPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-5">
        <section className="py-12 md:py-16">
          <h1 className="text-2xl font-semibold text-text mb-10">Contact</h1>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-2">
                  Address
                </p>
                <a
                  href="https://maps.google.com/?q=552+W+48th+Street+New+York+NY+10036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text transition-colors duration-150 leading-relaxed"
                >
                  552 W 48th Street
                  <br />
                  New York, NY 10036
                </a>
              </div>

              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-2">
                  Phone
                </p>
                <a
                  href="tel:2127574366"
                  className="text-sm text-muted hover:text-text transition-colors duration-150"
                >
                  (212) 757-4366
                </a>
              </div>

              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href="mailto:Manhattanauto11@gmail.com"
                  className="text-sm text-muted hover:text-text transition-colors duration-150"
                >
                  Manhattanauto11@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-3">
                  Hours
                </p>
                <table className="text-sm text-muted border-collapse">
                  <tbody>
                    {[
                      ["Mon–Fri", "8:00 am – 5:00 pm"],
                      ["Sat", "8:00 am – 1:00 pm"],
                      ["Sun", "Closed"],
                    ].map(([day, time]) => (
                      <tr key={day}>
                        <td className="pr-8 py-1 font-medium text-text">
                          {day}
                        </td>
                        <td className="py-1">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-subtle uppercase tracking-wider mb-2">
                  NYS Inspections — Walk-Ins
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Mon–Fri: 8:00 am – 3:00 pm
                  <br />
                  Sat: 8:30 am – 11:30 am
                  <br />
                  No appointment necessary.
                </p>
              </div>
            </div>

            {/* Photos — uncropped */}
            <div className="flex flex-col gap-3">
              <Image
                src="/DSC02874.JPG"
                alt="Shop floor"
                width={5152}
                height={3864}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src="/DSC02882.JPG"
                alt="Registered Motor Vehicle Repair Shop — Official NYS Emissions Inspection Station"
                width={5152}
                height={3864}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
