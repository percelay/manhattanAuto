import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — Manhattan Auto Repair Inc.",
  description:
    "Customer reviews for Manhattan Auto Repair Inc. Read what people say on Google and Yelp.",
};

const reviews = [
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
      "I've owned and serviced a car in Manhattan for over 5 years, and this is the best auto repair shop in the entire city! Azzie and Richard are incredibly friendly, empathetic, knowledgable, honest, efficient and professional.",
    author: "Lubo Karadashkov",
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

export default function ReviewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-5">
      <section className="py-12 md:py-16">
        <h1 className="text-2xl font-semibold text-text mb-2">Reviews</h1>
        <p className="text-sm text-muted mb-8">
          From Google and Yelp. All quotes are from real customers.
        </p>

        {/* Platform links */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted border border-border px-4 py-2 hover:border-text hover:text-text transition-colors duration-150"
          >
            Read on Google
            <ExternalLink size={13} />
          </a>
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted border border-border px-4 py-2 hover:border-text hover:text-text transition-colors duration-150"
          >
            Read on Yelp
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Reviews — CSS masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.author + r.quote.slice(0, 15)}
              className="break-inside-avoid mb-6 border-t border-border pt-4"
            >
              <p className="text-sm text-muted leading-relaxed mb-3">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="text-xs text-subtle font-medium">— {r.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
