import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Gemini_Generated_Image_np0cw4np0cw4np0c.png"
        alt="Manhattan Auto Repair Inc. — 552 W 48th Street, New York"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

      {/* Amber accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber via-amber/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-amber text-xs font-semibold tracking-widest uppercase">
              552 W 48th Street, New York, NY
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-none tracking-tight text-fg mb-6">
            Quality Repairs
            <br />
            <span className="text-gradient-amber">with Years of</span>
            <br />
            Experience
          </h1>

          {/* Pull Quote */}
          <blockquote className="relative pl-5 border-l-2 border-amber mb-10 max-w-xl">
            <p className="text-fg-muted text-base md:text-lg leading-relaxed italic">
              &ldquo;These guys are magicians. A third of the cost of the
              dealership and about three times as fast. They diagnosed my problem
              immediately and had me out by the end of the day. Always a great
              experience.&rdquo;
            </p>
            <cite className="block mt-2 text-amber text-sm font-semibold not-italic">
              — David Wind
            </cite>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-hover text-black font-bold text-sm md:text-base px-7 py-4 rounded-lg transition-colors duration-200 shadow-amber-glow"
            >
              Book Online for NYS Inspection
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-fg font-semibold text-sm md:text-base px-7 py-4 rounded-lg transition-colors duration-200"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-subtle">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-fg-subtle to-transparent" />
      </div>
    </section>
  );
}
