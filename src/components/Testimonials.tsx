import { Star, ExternalLink } from "lucide-react";

const featured = {
  quote:
    "I've owned and serviced a car in Manhattan for over 5 years, and this is the best auto repair shop in the entire city! Azzie and Richard are incredibly friendly, empathetic, knowledgable, honest, efficient and professional.",
  author: "Lubo Karadashkov",
};

const testimonials = [
  {
    quote:
      "Ozzy is an absolute legend. Inspected a used car for me and walked me through all the things he was seeing. Friendly. Helpful. Competent. Grateful for him and his team!",
    author: "Rebecca Jewell Rowley",
  },
  {
    quote:
      "Ozzy and his dad Ami are the best! They are fast, friendly, and really good at what they do. Highly Highly recommend!",
    author: "Rebecca Jewell Rowley",
  },
  {
    quote:
      "The absolute best service ever I highly recommend this guy's. I'm from Texas and I have to say one of the best mechanics and people I've ever met in my life. Thank you for making me feel at home you guys.",
    author: "Anonymous",
  },
  {
    quote:
      "I have to say Ozzy is the man So is his father too Great shop to take your car in got into an accident with my Subaru and he made everything go away was a great experience. Might be the best mechanic in Manhattan. & He's really trustworthy !!!!!!!",
    author: "Anonymous",
  },
  {
    quote:
      "Was involved in a minor collision with my BMW and I'm grateful for this place. My car was fixed in a total of 9 days, Rich and his team works hard and I got my car back quickly. Car doesn't even look like it was in an accident 😍.",
    author: "Dorissa White",
  },
  {
    quote:
      "My bloody car stopped running (shut off while driving) on the road just when I entered Manhattan from the Lincoln tunnel. They looked and my car and fixed the issue within a day. They are great 10/10 affordable and sincere.",
    author: "Michael Jara '20",
  },
  {
    quote:
      "Brakes went out on our 2005 van while visiting Manhattan on business. It was un-drivable. I called this business, they sent a tow truck within an hour and had extensive repairs done 24 hours later. They saved our trip for us.",
    author: "Matt Handy",
  },
  {
    quote:
      "Manhattan Auto is hands down the best around here! I bought my own shocks for my 2016 Ford Explorer, and they had no problem installing them for me. If you want honest service, go to Manhattan Auto instead!",
    author: "Whernandez Hernandez",
  },
  {
    quote:
      "These guys are magicians. A third of the cost of the dealership and about three times as fast. They diagnosed my problem immediately and had me out by the end of the day. Always a great experience.",
    author: "David Wind",
  },
  {
    quote:
      "Came in for a standard inspection, no appointment and they serviced immediately. Saved them as my go-to for all future inspections.",
    author: "Eric B",
  },
  {
    quote:
      "my car broke down the second i got to my hotel on 51st (4pm friday) for my less than 2 day trip and they towed it and had it fixed for me before noon on saturday. they were so kind and helpful.",
    author: "Dalani Brown",
  },
  {
    quote:
      "Had a car part on the turnpike hit and damage my oil pan. They towed us within an hour, ordered the part, and had my car repaired by noon the next day. Drove home safely after that.",
    author: "Kaelyn Rodriguez",
  },
  {
    quote:
      "Our breaks failed just as we drove into the city. After some frantic calling, we were able to limp the car over to Manhattan Auto Repair on a Saturday morning. Amazingly, they found parts and had our car ready by 1pm that same day.",
    author: "Alexandra London-Thompson",
  },
  {
    quote:
      "Ozzy snd Richard worked in record time to service our car. We had nasty rat damage in our engine and their team did a great job restoring our engine.",
    author: "Ellen Freshman",
  },
];

const GOOGLE_URL =
  "https://www.google.com/search?q=manhattan+auto+repair+inc&rlz=1C5CHFA_enUS969US969&oq=manhattan+auto+repair+inc&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIHCAYQABjvBTIGCAcQRRg80gEINTUzM2oxajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89c2584e67ce6241:0x444c405b40545713,1,,,,";
const YELP_URL = "https://www.yelp.com/biz/manhattan-auto-repair-new-york-3";

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-amber fill-amber"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="break-inside-avoid mb-5 bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-6 transition-colors duration-200 shadow-card">
      <StarRow />
      <blockquote className="mt-4 mb-5">
        <p className="text-fg-muted text-sm leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <cite className="not-italic text-fg font-semibold text-sm">
        — {author}
      </cite>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-bg py-20 md:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-gradient-to-l from-amber to-transparent" />
            <span className="text-amber text-xs font-bold tracking-widest uppercase">
              Reviews
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-amber to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-none text-fg mb-4">
            Trusted by New York
            <span className="text-amber"> Drivers</span>
          </h2>
          <p className="text-fg-muted text-base md:text-lg leading-relaxed">
            Don&apos;t take our word for it — hear from the New Yorkers and
            visitors who trust us with their vehicles.
          </p>
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2.5 bg-surface border border-border rounded-full px-5 py-2.5">
            <StarRow />
            <span className="text-fg text-sm font-semibold">
              5-Star Google Reviews
            </span>
          </div>
          <div className="flex items-center gap-2.5 bg-surface border border-border rounded-full px-5 py-2.5">
            <StarRow />
            <span className="text-fg text-sm font-semibold">
              5-Star Yelp Reviews
            </span>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="relative bg-surface border border-amber/25 rounded-2xl p-8 md:p-12 mb-12 shadow-amber-glow overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute top-6 right-8 font-display font-black text-9xl md:text-[10rem] leading-none text-amber/8 select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative max-w-3xl">
            <StarRow count={5} />
            <blockquote className="mt-5 mb-6">
              <p className="text-fg text-xl md:text-2xl font-medium leading-relaxed">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </blockquote>
            <cite className="not-italic flex items-center gap-3">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber font-bold text-base">
                {featured.author}
              </span>
            </cite>
          </div>
        </div>

        {/* Reviews masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author + t.quote.slice(0, 20)} {...t} />
          ))}
        </div>

        {/* Review platform CTAs */}
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {/* Google */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-6 md:p-8 transition-colors duration-200 shadow-card"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Google G */}
                <span className="font-display font-black text-2xl leading-none bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
                  G
                </span>
                <span className="text-fg font-bold text-lg">
                  Google Reviews
                </span>
              </div>
              <StarRow />
              <p className="text-fg-muted text-sm mt-2">
                Read all our reviews on Google
              </p>
            </div>
            <ExternalLink
              size={20}
              className="text-fg-subtle group-hover:text-amber transition-colors duration-200 shrink-0"
            />
          </a>

          {/* Yelp */}
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-card hover:bg-card-hover border border-border hover:border-border-bright rounded-2xl p-6 md:p-8 transition-colors duration-200 shadow-card"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Yelp burst */}
                <span className="font-display font-black text-2xl leading-none text-[#d32323]">
                  y
                </span>
                <span className="text-fg font-bold text-lg">
                  Yelp Reviews
                </span>
              </div>
              <StarRow />
              <p className="text-fg-muted text-sm mt-2">
                Read all our reviews on Yelp
              </p>
            </div>
            <ExternalLink
              size={20}
              className="text-fg-subtle group-hover:text-amber transition-colors duration-200 shrink-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
