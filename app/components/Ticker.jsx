"use client";

import skills from "@/data/skills.json";

export default function Ticker() {
  const doubled = [...skills.ticker, ...skills.ticker];

  return (
    <div className="ticker-container bg-ink py-4 border-y border-white/5">
      <div className="ticker-content">
        {doubled.map((item, i) => (
          <span key={i} className="flex-shrink-0 flex items-center">
            <span
              className={`font-mono text-[0.65rem] tracking-[.15em] uppercase px-6 ${
                i % 2 === 0 ? "text-paper" : "text-mid"
              }`}
            >
              {item}
            </span>
            <span className="text-red/50 font-mono text-[0.65rem]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
