"use client";

import { useEffect, useRef, useState } from "react";
import HeroScrollText, { type HeroChapter } from "@/components/motion/HeroScrollText";

/**
 * Fallback cinematic hero used when the Veo motion pipeline is unavailable and
 * no scrub frames exist. Pins a full-screen stage and cross-dissolves the
 * live-generated scene keyframes as the user scrolls, driving the SAME live
 * `progress` into HeroScrollText (>=3 chapters). Not a static/gradient hero —
 * it scrubs through real generated imagery.
 */
export default function HeroKeyframes({
  images,
  chapters,
}: {
  images: string[];
  chapters: HeroChapter[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const n = images.length;
  const scrollHint = 1 - Math.min(1, progress / 0.06);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {images.map((src, i) => {
          // Cross-dissolve: each image owns a band of the progress range.
          const center = n > 1 ? i / (n - 1) : 0;
          const span = n > 1 ? 1 / (n - 1) : 1;
          const dist = Math.abs(progress - center);
          const opacity = i === 0 && progress <= center ? 1 : Math.max(0, 1 - dist / span);
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity,
                transform: `scale(${1.05 + progress * 0.08})`,
                transition: "opacity 0.2s linear",
              }}
            />
          );
        })}

        <div className="pointer-events-none absolute inset-0">
          <HeroScrollText
            progress={progress}
            chapters={chapters}
            position="bottom-left"
            textColor="#f4fbfa"
            accentColor="#A8D9D0"
            accentTextColor="#0E3A47"
          />
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60"
            style={{ opacity: scrollHint }}
          >
            Scroll ↓
          </div>
        </div>
      </div>
    </section>
  );
}
