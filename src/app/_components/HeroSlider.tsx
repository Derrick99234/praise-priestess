"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type HeroSliderImage = {
  src: string;
  alt: string;
};

export default function HeroSlider({
  images,
  intervalMs = 4200,
  label = "Artist photos",
  className,
}: {
  images: readonly HeroSliderImage[];
  intervalMs?: number;
  label?: string;
  className?: string;
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [pointerStartX, setPointerStartX] = useState<number | null>(null);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    if (intervalMs <= 0) return;
    if (isPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    ) {
      return;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches
    ) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, isPaused, safeImages.length]);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % safeImages.length);

  if (safeImages.length === 0) return null;

  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl border border-white/10 bg-black/25",
        className ?? "",
      ].join(" ")}
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }}
      onPointerDown={(e) => {
        setPointerStartX(e.clientX);
      }}
      onPointerUp={(e) => {
        if (pointerStartX === null) return;
        const delta = e.clientX - pointerStartX;
        setPointerStartX(null);
        if (Math.abs(delta) < 40) return;
        if (delta > 0) goPrev();
        else goNext();
      }}
    >
      <div className="relative h-[64svh] min-h-[520px]">
        {safeImages.map((img, idx) => (
          <div
            key={img.src}
            className={[
              "absolute inset-0 transition-opacity duration-700",
              idx === activeIndex ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              priority={idx === 0}
              className="object-cover object-top"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(840px_circle_at_80%_70%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/45"
            aria-label="Previous photo"
          >
            <span aria-hidden>←</span>
          </button>

          <div className="flex min-w-0 flex-1 items-center justify-center">
            <div className="flex w-full max-w-[520px] gap-2 overflow-x-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {safeImages.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "relative h-10 w-14 shrink-0 overflow-hidden rounded-xl border transition",
                    idx === activeIndex
                      ? "border-white/70 bg-white/10"
                      : "border-white/15 bg-black/25 hover:border-white/35",
                  ].join(" ")}
                  aria-label={`Go to photo ${idx + 1}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                  {idx === activeIndex ? (
                    <span className="pointer-events-none absolute inset-0 ring-2 ring-white/50" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/45"
            aria-label="Next photo"
          >
            <span aria-hidden>→</span>
          </button>
        </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/80">
            <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 backdrop-blur">
              {activeIndex + 1} / {safeImages.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
