"use client";
import { useEffect, useRef } from "react";

const socials = [
  { name: "GitHub", href: "https://github.com/MarkPrins18" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mark-prins-602bb61a1/" },
];

export default function Contact() {
  const ref = useRef();
  const encodedEmail = "bWFyay5wcmluc0B6aWdnby5ubA==";

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${atob(encodedEmail)}`;
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.classList.add("opacity-100", "translate-y-0");
      },
      { threshold: 0.05 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="px-6 md:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div>
        <h2
          className="font-playfair font-black tracking-tighter leading-none mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
        >
          Laten we
          <br />
          <i className="italic font-bold text-mid"> praten.</i>
        </h2>
        <p className="text-base md:text-lg text-mid leading-relaxed max-w-md">
          Beschikbaar voor freelancewerk en vaste functies. Ik reageer meestal
          binnen een dag.
        </p>
      </div>

      <div className="w-full">
        <a
          href="#"
          onClick={handleEmailClick}
          className="font-playfair italic text-xl md:text-2xl text-ink no-underline block py-6 border-t-2 border-ink border-b border-faint mb-8 hover:text-green transition-colors"
        >
          mark.prins<span className="hidden">ignore-this</span>@ziggo.nl
        </a>
        <div className="flex flex-col">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center py-4 border-b border-faint no-underline"
            >
              <span className="font-mono text-[0.65rem] md:text-[0.7rem] tracking-widest uppercase text-mid group-hover:text-ink transition-colors">
                {s.name}
              </span>
              <span className="text-mid group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
