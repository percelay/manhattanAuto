export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <p className="font-semibold text-sm text-text mb-1">
              Manhattan Auto Repair Inc.
            </p>
            <p className="text-sm text-muted">552 W 48th Street</p>
            <p className="text-sm text-muted">New York, NY 10036</p>
          </div>

          <div>
            <p className="text-sm text-muted mb-1">
              <a
                href="tel:2127574366"
                className="hover:text-text transition-colors duration-150"
              >
                (212) 757-4366
              </a>
            </p>
            <p className="text-sm text-muted">
              <a
                href="mailto:Manhattanauto11@gmail.com"
                className="hover:text-text transition-colors duration-150"
              >
                Manhattanauto11@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Mon–Fri: 8:00 am – 5:00 pm</p>
            <p className="text-sm text-muted">Sat: 8:00 am – 1:00 pm</p>
            <p className="text-sm text-muted">Sun: Closed</p>
          </div>

          <nav className="flex flex-col gap-2">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Reviews", "/reviews"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted hover:text-text transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <p className="text-xs text-subtle mt-10">
          &copy; {new Date().getFullYear()} Manhattan Auto Repair Inc.
        </p>
      </div>
    </footer>
  );
}
