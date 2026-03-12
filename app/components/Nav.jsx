"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projecten", href: "#work" },
  { label: "Over mij", href: "#about" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStuck(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 bg-paper transition-all duration-300 ${
        stuck
          ? "border-b border-faint shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#"
        onClick={go("#home")}
        className="font-playfair font-black text-lg md:text-xl tracking-tight text-ink no-underline"
      >
        Mark Prins
      </a>

      <div className="hidden sm:flex items-center gap-6 md:gap-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={go(l.href)}
            className="font-mono text-[0.75rem] md:text-[0.85rem] tracking-wide uppercase text-ink no-underline hover:text-green transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={go("#contact")}
          className="font-mono text-[0.75rem] md:text-[0.85rem] tracking-wide uppercase text-paper bg-ink px-4 py-2 rounded-sm no-underline hover:bg-green transition-colors"
        >
          Contact
        </a>
      </div>

      <button
        className="sm:hidden flex flex-col justify-between w-6 h-5"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="block h-0.5 w-full bg-ink"></span>
        <span className="block h-0.5 w-full bg-ink"></span>
        <span className="block h-0.5 w-full bg-ink"></span>
      </button>

      <div
        className={`sm:hidden absolute top-full left-0 right-0 bg-paper transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={go(l.href)}
            className="block px-6 py-4 font-mono text-base text-ink uppercase hover:text-green transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={go("#contact")}
          className="block px-6 py-4 font-mono text-base text-paper bg-ink rounded-sm uppercase hover:bg-green transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
