"use client";
import { useEffect, useRef } from "react";
import skills from "@/data/skills.json";

export default function SkillsSplit() {
  const sectionRef = useRef();
  const feRef = useRef();

  useEffect(() => {
    const secObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.classList.add("opacity-100", "translate-y-0");
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) secObs.observe(sectionRef.current);

    const pillObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll("[data-pill]").forEach((p, i) => {
            p.style.transition = `opacity .35s ${i * 0.03}s, transform .35s ${i * 0.03}s`;
            requestAnimationFrame(() => {
              p.style.opacity = "1";
              p.style.transform = "none";
            });
          });
        }
      },
      { threshold: 0.1 },
    );
    if (feRef.current) pillObs.observe(feRef.current);

    return () => {
      secObs.disconnect();
      pillObs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="border-b border-faint opacity-0 translate-y-6 transition-all duration-700 ease-out overflow-hidden"
    >
      <div className="px-6 md:px-10 pt-20 pb-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
        <div>
          <h2
            className="font-playfair font-black tracking-[-0.025em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Mijn vaardigheden
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-faint">
        <div
          ref={feRef}
          className="p-6 bg-paper border-b lg:border-b-0 lg:border-r border-faint relative overflow-hidden"
        >
          <div className="font-mono text-[0.75rem] tracking-[.1em] uppercase text-[#4a6fa5] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4a90e2]" />
            Frontend
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((s) => (
              <span
                key={s.id}
                data-pill
                style={{ opacity: 0, transform: "translateY(10px)" }}
                className={`font-mono text-[0.75rem] px-4 py-2 border-[1.5px] cursor-default transition-all duration-200 ${s.hot ? "border-[#c7d9f5] bg-[#eef4fd] text-[#2a5a9e]" : "border-faint bg-white text-ink"}`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-term-bg font-mono flex flex-col text-[0.65rem] md:text-[0.7rem]">
          <div className="px-3 py-2 bg-term-bar flex items-center gap-2 border-b border-[#1e1e1a]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="p-5 overflow-x-auto">
            <div className="text-[#22c55e] mb-4 flex items-center gap-2 uppercase tracking-widest text-[0.65rem]">
              <span className="w-2 h-2 rounded-full bg-term-green shadow-[0_0_6px_#39ff7a]" />
              Backend
            </div>
            {skills.backend.map((line) => (
              <div key={line.id} className="mb-3">
                <div className="flex flex-wrap items-baseline gap-x-2 leading-snug text-term-green">
                  <span className="text-term-dim">{line.prompt}</span>
                  <span className="text-term-cmd">{line.cmd}</span>
                  {line.flag && (
                    <span className="text-term-flag">{line.flag}</span>
                  )}
                  {line.arg && (
                    <span className="text-term-green">{line.arg}</span>
                  )}
                </div>
                <div className="text-term-out pl-3 opacity-80 mt-1 italic text-[0.6rem]">
                  {line.output}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-term-dim">$</span>
              <span className="w-2 h-4 bg-term-green animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
