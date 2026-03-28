"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wrench } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber transition-colors duration-200 group-hover:bg-amber-hover">
            <Wrench size={16} className="text-black" strokeWidth={2.5} />
          </span>
          <span className="font-display font-bold text-base md:text-lg leading-none">
            <span className="text-fg">Manhattan</span>
            <span className="text-amber"> Auto</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted hover:text-fg transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:2127574366"
          className="hidden md:inline-flex items-center gap-2 bg-amber hover:bg-amber-hover text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          (212) 757-4366
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-fg-muted hover:text-fg transition-colors duration-200 p-1"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-surface border-b border-border`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-fg-muted hover:text-fg hover:bg-card transition-colors duration-200 px-3 py-3 rounded-lg text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:2127574366"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-amber hover:bg-amber-hover text-black font-semibold text-sm px-5 py-3 rounded-lg text-center transition-colors duration-200"
          >
            Call (212) 757-4366
          </a>
        </nav>
      </div>
    </header>
  );
}
