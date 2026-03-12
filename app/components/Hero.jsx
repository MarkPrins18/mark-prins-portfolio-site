"use client";
import skills from "@/data/skills.json";

export default function Hero() {
  const go = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 px-6 md:px-10 pt-32 lg:pt-40 pb-16 lg:pb-20 items-center border-b border-faint"
    >
      <div className="lg:pb-[5vh]">
        <p className="font-mono text-[0.7rem] md:text-[0.8rem] tracking-[.2em] uppercase text-mid mb-6 md:mb-8 opacity-0 animate-[fadeUp_.6s_.1s_ease_forwards]">
          Junior Software Developer · Etten-Leur
        </p>

        <h1
          className="font-playfair font-black leading-[1.1] lg:leading-none tracking-[-0.035em] text-ink opacity-0 animate-fadeUp [animation-delay:0.25s]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
        >
          Websites die
          <br />
          gewoon <i className="font-bold text-mid not-italic italic">werken.</i>
        </h1>

        <p className="mt-8 md:mt-10 text-base md:text-[1.05rem] text-mid max-w-[520px] leading-[1.75] opacity-0 animate-fadeUp [animation-delay:0.45s]">
          Met een achtergrond in{" "}
          <span className="text-ink font-medium">PHP en WordPress</span> richt
          ik me op het technisch optimaliseren en onderhouden van online
          platformen. Ik zorg voor een stabiele basis waarbij een goed design en
          vindbaarheid voorop staan.
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center opacity-0 animate-fadeUp [animation-delay:0.6s]">
          <a
            href="#work"
            onClick={go("#work")}
            className="w-full sm:w-auto text-center font-mono text-[0.7rem] tracking-[.08em] uppercase bg-ink text-paper px-6 py-3 border-2 border-ink hover:bg-red hover:border-red transition-colors no-underline"
          >
            Bekijk mijn werk
          </a>
          <a
            href="#contact"
            onClick={go("#contact")}
            className="font-mono text-[0.7rem] tracking-[.08em] uppercase text-mid border-b border-faint pb-0.5 hover:text-ink hover:border-ink transition-colors no-underline"
          >
            Contact opnemen →
          </a>
        </div>
      </div>

      <div className="border-t lg:border-t-0 lg:border-l border-faint pt-10 lg:pt-0 lg:pl-12 lg:pb-[5vh] opacity-0 animate-[fadeIn_.8s_.7s_ease_forwards]">
        <p className="font-mono text-[0.75rem] md:text-[0.8rem] tracking-wide uppercase text-ink mb-4">
          Huidige focus
        </p>
        <div className="flex flex-col border-t border-faint">
          {skills.stack.map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-baseline py-3 border-b border-faint font-mono text-[0.75rem] md:text-[0.8rem]"
            >
              <span className="text-ink">{row.label}</span>
              <span
                className={row.highlight ? "text-green font-bold" : "text-ink"}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
