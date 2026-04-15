"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-bg border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between gap-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-semibold text-sm text-text shrink-0"
        >
          Manhattan Auto Repair
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-text transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:2127574366"
          className="hidden md:block text-sm font-medium text-text shrink-0 hover:text-red transition-colors duration-150"
        >
          (212) 757-4366
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted hover:text-text transition-colors duration-150"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-border bg-bg overflow-hidden transition-all duration-200 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:2127574366"
            className="text-sm font-medium text-text border-t border-border pt-4"
          >
            (212) 757-4366
          </a>
        </div>
      </div>
    </header>
  );
}
