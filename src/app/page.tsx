import Image from "next/image";
import Link from "next/link";

const featuredReviews = [
  {
    quote:
      "These guys are magicians. A third of the cost of the dealership and about three times as fast. They diagnosed my problem immediately and had me out by the end of the day. Always a great experience.",
    author: "David Wind",
  },
  {
    quote:
      "Brakes went out on our 2005 van while visiting Manhattan on business. It was un-drivable. I called this business, they sent a tow truck within an hour and had extensive repairs done 24 hours later. They saved our trip for us.",
    author: "Matt Handy",
  },
  {
    quote:
      "I've owned and serviced a car in Manhattan for over 5 years, and this is the best auto repair shop in the entire city! Azzie and Richard are incredibly friendly, empathetic, knowledgable, honest, efficient and professional.",
    author: "Lubo Karadashkov",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — cropped slightly top/bottom, nav buttons top, text bottom */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src="/C89CF81B-17CF-430E-9860-AE334AD92BEE_1_201_a.jpeg"
          alt="Manhattan Auto Repair Inc. — 552 W 48th Street, New York"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Nav buttons — top */}
        <div className="absolute top-[8%] left-0 right-0 flex justify-center gap-3 md:gap-4 px-4">
          {[
            ["Services", "/services"],
            ["Reviews", "/reviews"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="bg-white text-red text-xs md:text-sm font-semibold border-2 border-red px-4 py-2 hover:bg-red hover:text-white transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Text — bottom center */}
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center px-6">
          <div className="text-center max-w-2xl">
            <p className="text-white font-bold text-sm md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,1)] mb-3">
              The mechanics at our shop have over 60 years of experience between
              them. They are dedicated to providing high-quality repairs to keep
              you safe and happy.
            </p>
            <p className="text-white font-bold text-sm md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,1)] mb-3">
              We provide 12-month warranties with all of our services for your
              peace of mind.
            </p>
            <p className="text-white font-bold text-sm md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
              Our shop only uses parts from reputable brands to ensure that your
              vehicle is always ready to drive.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5">

        {/* Shop photos */}
        <section className="py-12 border-b border-border">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/shopguy1.jpg"
                alt="Mechanic at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/DSC02875.JPG"
                alt="Vehicle on lift"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/DSC02876.JPG"
                alt="Official NYS inspection station"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
          </div>
        </section>

        {/* Services overview */}
        <section className="py-12 border-b border-border">
          <h2 className="text-lg font-semibold text-text mb-6">Services</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {[
              "NYS Inspections — walk-ins welcome",
              "Comprehensive Diagnostics",
              "Preventative Maintenance",
              "Full-Service Auto Repair",
              "Towing & Tire Services",
            ].map((s) => (
              <li key={s} className="text-sm text-muted">
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="text-sm text-red hover:text-red-hover transition-colors duration-150"
          >
            See all services &rarr;
          </Link>
        </section>

        {/* Reviews */}
        <section className="py-12 border-b border-border">
          <h2 className="text-lg font-semibold text-text mb-6">
            What people say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {featuredReviews.map((r) => (
              <div key={r.author} className="border-t border-border pt-4">
                <p className="text-sm text-muted leading-relaxed mb-3">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="text-xs text-subtle font-medium">— {r.author}</p>
              </div>
            ))}
          </div>
          <Link
            href="/reviews"
            className="text-sm text-red hover:text-red-hover transition-colors duration-150"
          >
            Read all reviews &rarr;
          </Link>
        </section>

        {/* Hours */}
        <section className="py-12">
          <h2 className="text-lg font-semibold text-text mb-6">Hours</h2>
          <table className="text-sm text-muted border-collapse">
            <tbody>
              {[
                ["Mon–Fri", "8:00 am – 5:00 pm"],
                ["Sat", "8:00 am – 1:00 pm"],
                ["Sun", "Closed"],
              ].map(([day, time]) => (
                <tr key={day}>
                  <td className="pr-10 py-1 font-medium text-text">{day}</td>
                  <td className="py-1">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-muted mt-4">
            Walk-ins for NYS inspections: Mon–Fri 8am–3pm, Sat 8:30am–11:30am.
            No appointment needed.
          </p>
        </section>
      </div>
    </>
  );
}
