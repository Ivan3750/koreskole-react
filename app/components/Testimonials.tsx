"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import "@/app/i18n";


type Testimonial = {
  name: string;
  age: number;
  text: string;
  rating: number;
};

type Direction = "left" | "right";


const AUTOPLAY_MS = 4500;
const DRAG_THRESHOLD_PX = 40;
const ANIM_MS = 360;


const getOffset = (index: number, active: number, total: number) => {
  const raw = ((index - active) % total + total) % total;
  return raw > total / 2 ? raw - total : raw;
};

const cardStyle = (offset: number): React.CSSProperties => {
  if (Math.abs(offset) > 1) return { display: "none" };
  return {
    transform: `translateX(${offset * 60}%) translateY(${offset !== 0 ? 10 : 0}px) scale(${offset === 0 ? 1 : 0.89})`,
    opacity: offset === 0 ? 1 : 0.45,
    zIndex: offset === 0 ? 10 : 4,
    filter: offset === 0 ? "none" : "blur(1px)",
    pointerEvents: offset === 0 ? "auto" : "none",
    transition: `transform ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1),
                 opacity   ${ANIM_MS}ms ease,
                 filter    ${ANIM_MS}ms ease`,
  };
};

const exitStyle = (dir: Direction): React.CSSProperties => ({
  transform: `translateX(${dir === "left" ? "-28%" : "28%"}) scale(0.93)`,
  opacity: 0,
  transition: `transform ${ANIM_MS - 40}ms cubic-bezier(0.4,0,0.2,1),
               opacity   ${ANIM_MS - 60}ms ease`,
});

 
const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className="w-3.5 h-3.5 fill-current"
        style={{
          color: i < rating ? "var(--color-yellow)" : "var(--color-border)",
          opacity: i < rating ? 1 : 0.35,
        }}
      />
    ))}
  </div>
);

const Avatar = ({ name }: { name: string }) => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0"
    style={{ backgroundColor: "var(--color-yellow-bg)", color: "var(--color-yellow)" }}
  >
    {name.charAt(0)}
  </div>
);

const NavButton = ({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:scale-110 active:scale-95"
    style={{
      borderColor: "var(--color-border)",
      color: "var(--color-text-secondary)",
      backgroundColor: "var(--color-bg-elevated)",
    }}
  >
    {children}
  </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();

  useEffect(() => {
    if (params?.lang) i18n.changeLanguage(params.lang as string);
  }, [params?.lang, i18n]);

  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];
  const total = testimonials.length;

  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState<Direction | null>(null);
  const isAnimating = useRef(false);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback((next: number, dir: Direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setAnimDir(dir);
    setTimeout(() => {
      setActive(next);
      setAnimDir(null);
      isAnimating.current = false;
    }, ANIM_MS);
  }, []);

  const prev = useCallback(() => goTo((active - 1 + total) % total, "right"), [active, total, goTo]);
  const next = useCallback(() => goTo((active + 1) % total, "left"), [active, total, goTo]);

  // Autoplay - resets on every slide change
  useEffect(() => {
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Pointer swipe (mouse + touch via pointer events)
  const onPointerDown = (e: React.PointerEvent) => { dragStartX.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > DRAG_THRESHOLD_PX) delta < 0 ? next() : prev();
    dragStartX.current = null;
  };

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: "var(--color-bg-layout)" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span
            className="font-semibold text-xs uppercase tracking-widest"
            style={{ color: "var(--color-yellow)" }}
          >
            {t("testimonials.label")}
          </span>
          <h2
            className="font-display text-2xl md:text-3xl font-bold mt-2 mb-3"
            style={{ color: "var(--color-text)" }}
          >
            {t("testimonials.title")}
          </h2>
          <p className="normal-text text-sm">{t("testimonials.subtitle")}</p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          aria-roledescription="carousel"
          aria-label={t("testimonials.label")}
        >
          <div className="relative w-full max-w-sm mx-auto" style={{ height: 200 }}>
            {testimonials.map((item, index) => {
              const offset = getOffset(index, active, total);
              const isActive = offset === 0;

              return (
                <div
                  key={index}
                  className="absolute inset-0 rounded-xl p-5 border flex flex-col justify-between transition-all"
                  aria-hidden={!isActive}
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    borderColor: isActive ? "var(--color-yellow)" : "var(--color-border)",
                    cursor: isActive ? "default" : "pointer",
                    ...(isActive && animDir ? exitStyle(animDir) : cardStyle(offset)),
                  }}
                  onClick={() => !isActive && (offset > 0 ? next() : prev())}
                >
                  {/* Decorative quote mark */}
                  <span
                    className="absolute top-3 right-4 text-5xl font-serif leading-none opacity-[0.08] pointer-events-none"
                    style={{ color: "var(--color-yellow)" }}
                    aria-hidden
                  >
                    "
                  </span>

                  <Stars rating={item.rating} />

                  <p
                    className="text-xs leading-relaxed mb-4 line-clamp-3"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.text}
                  </p>

                  <div className="flex items-center gap-2.5">
                    <Avatar name={item.name} />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--color-text)" }}>
                        {item.name}
                      </p>
                      <p className="text-[11px]" style={{ color: "var(--color-text-secondary)" }}>
                        {item.age} {t("testimonials.years")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls: prev / dots / next */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <NavButton onClick={prev} label="Previous">
            <ChevronLeft className="w-3.5 h-3.5" />
          </NavButton>

          <div className="flex gap-1.5 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "left" : "right")}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  backgroundColor: i === active ? "var(--color-yellow)" : "var(--color-border)",
                  opacity: i === active ? 1 : 0.45,
                }}
              />
            ))}
          </div>

          <NavButton onClick={next} label="Next">
            <ChevronRight className="w-3.5 h-3.5" />
          </NavButton>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;