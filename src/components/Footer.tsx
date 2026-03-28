import { Wrench, MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber">
                <Wrench size={16} className="text-black" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold text-base leading-none">
                <span className="text-fg">Manhattan</span>
                <span className="text-amber"> Auto</span>
              </span>
            </a>
            <p className="text-fg-muted text-sm leading-relaxed max-w-xs">
              The mechanics at our shop have over 60 years of experience between
              them. Dedicated to providing high-quality repairs to keep you safe
              and happy.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-fg font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-fg-muted hover:text-amber transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-fg font-bold text-sm mb-4 uppercase tracking-wider">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://maps.google.com/?q=552+W+48th+Street+New+York+NY+10036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-fg-muted hover:text-fg transition-colors duration-200 text-sm"
                >
                  <MapPin size={14} className="text-amber shrink-0 mt-0.5" />
                  552 W 48th Street, New York, NY 10036
                </a>
              </li>
              <li>
                <a
                  href="tel:2127574366"
                  className="flex items-center gap-2.5 text-fg-muted hover:text-fg transition-colors duration-200 text-sm"
                >
                  <Phone size={14} className="text-amber shrink-0" />
                  (212) 757-4366
                </a>
              </li>
              <li>
                <a
                  href="mailto:Manhattanauto11@gmail.com"
                  className="flex items-center gap-2.5 text-fg-muted hover:text-fg transition-colors duration-200 text-sm break-all"
                >
                  <Mail size={14} className="text-amber shrink-0" />
                  Manhattanauto11@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-fg-subtle text-xs">
            &copy; {new Date().getFullYear()} Manhattan Auto Repair Inc. All rights
            reserved.
          </p>
          <p className="text-fg-subtle text-xs">
            Mon–Fri: 8am–5pm &nbsp;·&nbsp; Sat: 8am–1pm &nbsp;·&nbsp; Sun: Closed
          </p>
        </div>
      </div>
    </footer>
  );
}
