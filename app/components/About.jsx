"use client";
import { useEffect, useRef } from "react";

const links = [
  { name: "GitHub", href: "https://github.com/MarkPrins18" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mark-prins-602bb61a1/" },
];

export default function About() {
  const ref = useRef(null);

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
      id="about"
      className="px-6 md:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 border-b border-faint items-start opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="lg:sticky lg:top-24">
        <h2
          className="font-playfair font-black text-3xl md:text-4xl tracking-tight mb-6 lg:mb-8 text-ink"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Over mij
        </h2>
        <div className="flex flex-row lg:flex-col gap-6 lg:gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-widest uppercase text-mid no-underline flex items-center gap-2 group hover:text-ink transition-colors"
            >
              <span className="hidden lg:inline opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
              {l.name}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-3xl">
        <p className="text-base md:text-[1.05rem] text-mid leading-[1.75] mb-8">
          Mijn passie voor development begon eenvoudig: ik hield van het
          oplossen van complexe puzzels. Na mijn opleiding tot MBO Software
          Developer ben ik meteen de praktijk ingegaan. Al snel ontdekte ik dat
          techniek pas echt interessant wordt als een gebruiker er ook
          daadwerkelijk iets aan heeft. Het gaat niet om wat ik leuk vind, maar
          om wat de gebruiker nodig heeft.
        </p>

        <p className="text-base md:text-[1.05rem] text-mid leading-[1.75] mb-8">
          De afgelopen jaren heb ik veel gewerkt met PHP en WordPress. Daarnaast
          heb ik een SEO-cursus gevolgd, waardoor ik weet hoe je een site
          technisch goed opzet zodat hij ook daadwerkelijk gevonden wordt.
        </p>

        <p className="text-base md:text-[1.05rem] text-mid leading-[1.75] mb-8">
          Sinds juli vorig jaar verdiep ik me in moderne frontend-technieken. Ik
          beheers nu de basis van React en Next.js en vind het geweldig om mijn
          ervaring met PHP te combineren met deze nieuwe frameworks.
        </p>

        <blockquote className="border-l-[3px] border-ink pl-6 my-10 italic text-mid text-sm md:text-base leading-relaxed">
          Ik ben proactief, leer snel en sta altijd open om mijn technische
          skills te verbeteren en nieuwe dingen te leren.
        </blockquote>

        <p className="text-base md:text-[1.05rem] text-mid leading-[1.75]">
          Buiten werk zit ik ook niet stil: ik ga wekelijks naar de sportschool,
          maak muziek of speel games op mijn pc.
        </p>
      </div>
    </section>
  );
}
