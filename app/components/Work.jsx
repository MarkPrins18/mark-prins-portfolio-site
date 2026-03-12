"use client";
import { useEffect, useRef } from "react";
import projects from "@/data/projects.json";
import ProjectThumb from "./ProjectThumb";

export default function Work() {
  const ref = useRef();

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
      id="work"
      className="px-6 md:px-10 py-20 lg:py-28 border-b border-faint opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="flex items-baseline justify-between mb-10 md:mb-12 border-b-2 border-ink pb-4">
        <h2
          className="font-playfair font-black tracking-[-0.025em]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Mijn werk
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:gap-24">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-paper flex flex-col hover:bg-[#fffefb] transition-colors duration-300 overflow-hidden no-underline text-ink"
          >
            <div className="aspect-video overflow-hidden border-b border-faint flex-shrink-0 relative">
              <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <ProjectThumb type={p.thumb} title={p.title} />
              </div>
            </div>

            <div className="py-8 md:px-2 flex flex-col">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-mono text-[0.6rem] text-mid uppercase tracking-widest">
                  {p.num}
                </span>
                <span className="text-red opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-xl">
                  ↗
                </span>
              </div>
              <h3 className="font-playfair font-bold text-xl md:text-2xl tracking-[-0.02em] mb-3">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-mid leading-relaxed italic mb-6 max-w-2xl">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[.06em] text-mid border border-faint px-2 py-1 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
