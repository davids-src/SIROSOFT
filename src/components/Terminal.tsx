"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalProps {
  lines: string[];
}

interface DisplayedLine {
  text: string;
  done: boolean;
}

// Soronkénti typewriter effekt zöld terminál panelen.
export const Terminal = ({ lines }: TerminalProps) => {
  const [displayed, setDisplayed] = useState<DisplayedLine[]>([]);
  const [current, setCurrent] = useState("");
  const lineIdx = useRef(0);
  const charIdx = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayed(lines.map((t) => ({ text: t, done: true })));
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const li = lineIdx.current;
      if (li >= lines.length) {
        timer = setTimeout(() => {
          setDisplayed([]);
          setCurrent("");
          lineIdx.current = 0;
          charIdx.current = 0;
          tick();
        }, 3500);
        return;
      }
      const line = lines[li];
      if (charIdx.current <= line.length) {
        setCurrent(line.slice(0, charIdx.current));
        charIdx.current += 1;
        timer = setTimeout(tick, 28);
      } else {
        setDisplayed((d) => [...d, { text: line, done: true }]);
        setCurrent("");
        lineIdx.current += 1;
        charIdx.current = 0;
        timer = setTimeout(tick, 420);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-testid="hero-terminal"
      className="overflow-hidden rounded-lg border border-line bg-[#08080A] shadow-2xl"
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#1AE87B]" />
        <span className="h-3 w-3 rounded-full bg-[#2A2A35]" />
        <span className="h-3 w-3 rounded-full bg-[#2A2A35]" />
        <span className="ml-3 font-mono text-xs text-muted">sirosoft — build.sh</span>
      </div>
      <div className="min-h-[260px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {displayed.map((l, i) => (
          <div key={i} className="text-[#1AE87B]">
            {l.text}
          </div>
        ))}
        {lineIdx.current < lines.length && (
          <div className="text-[#1AE87B]">
            {current}
            <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-[#1AE87B] animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
};
