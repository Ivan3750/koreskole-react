"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/app/lib/api";
import "@/app/i18n";

type Testimonial = {
  id: number;
  first_name: string;
  last_name: string;
  review_text: string;
  review_date: string;
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
    transform: `translateX(${offset * 55}%) translateY(${
      offset !== 0 ? 12 : 0
    }px) scale(${offset === 0 ? 1 : 0.88})`,
    opacity: offset === 0 ? 1 : 0.45,
    zIndex: offset === 0 ? 10 : 4,
    filter: offset === 0 ? "none" : "blur(1px)",
    pointerEvents: offset === 0 ? "auto" : "none",
    transition: `transform ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1),
                 opacity ${ANIM_MS}ms ease,
                 filter ${ANIM_MS}ms ease`,
  };
};

const exitStyle = (dir: Direction): React.CSSProperties => ({
  transform: `translateX(${
    dir === "left" ? "-28%" : "28%"
  }) scale(0.93)`,
  opacity: 0,
  transition: `transform ${ANIM_MS - 40}ms cubic-bezier(0.4,0,0.2,1),
               opacity ${ANIM_MS - 60}ms ease`,
});

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => {
      const filled = i < rating;

      return (
        <Star
          key={i}
          className="w-4 h-4 fill-current"
          style={{
            color: filled
              ? "var(--color-yellow)"
              : "var(--color-border)",
            opacity: filled ? 1 : 0.3,
          }}
        />
      );
    })}
  </div>
);

const Avatar = ({ name }: { name: string }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0"
    style={{
      backgroundColor: "var(--color-yellow-bg)",
      color: "var(--color-yellow)",
    }}
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
    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110 active:scale-95"
    style={{
      borderColor: "var(--color-border)",
      color: "var(--color-text-secondary)",
      backgroundColor: "var(--color-bg-elevated)",
    }}
  >
    {children}
  </button>
);

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState<Direction | null>(null);

  const isAnimating = useRef(false);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    if (params?.lang) {
      i18n.changeLanguage(params.lang as string);
    }
  }, [params?.lang, i18n]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${BASE_URL}/reviews.php`);

      if (!res.ok) return;

      const data = await res.json();

      if (!data?.reviews || !Array.isArray(data.reviews)) return;

      setTestimonials(data.reviews);
    } catch {
      // silent fail
    }
  };

  const total = testimonials.length;

  const goTo = useCallback(
    (next: number, dir: Direction) => {
      if (isAnimating.current || total === 0) return;

      isAnimating.current = true;
      setAnimDir(dir);

      setTimeout(() => {
        setActive(next);
        setAnimDir(null);
        isAnimating.current = false;
      }, ANIM_MS);
    },
    [total]
  );

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total, "right");
  }, [active, total, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % total, "left");
  }, [active, total, goTo]);

  useEffect(() => {
    if (total === 0) return;

    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, next, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;

    const delta = e.clientX - dragStartX.current;

    if (Math.abs(delta) > DRAG_THRESHOLD_PX) {
      delta < 0 ? next() : prev();
    }

    dragStartX.current = null;
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="py-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{
              color: "var(--color-yellow)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
            }}
          >
            {t("testimonials.label")}
          </span>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {t("testimonials.title")}
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div
          className="relative flex items-center justify-center select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div className="relative w-full max-w-md mx-auto" style={{ height: 300 }}>
            {testimonials.map((item, index) => {
              const offset = getOffset(index, active, total);
              const isActive = offset === 0;

              return (
                <div
                  key={item.id}
                  className="absolute inset-0 rounded-2xl p-7 border flex flex-col justify-between transition-all"
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    borderColor: isActive
                      ? "var(--color-yellow)"
                      : "var(--color-border)",
                    ...(isActive && animDir
                      ? exitStyle(animDir)
                      : cardStyle(offset)),
                  }}
                  onClick={() =>
                    !isActive && (offset > 0 ? next() : prev())
                  }
                >
                  <span
                    className="absolute top-4 right-5 text-6xl opacity-[0.08]"
                    style={{ color: "var(--color-yellow)" }}
                  >
                    "
                  </span>

                  <Stars rating={item.rating} />

                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.review_text}
                  </p>

                  <div className="flex items-center gap-3">
                    <Avatar name={item.first_name} />

                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.first_name} {item.last_name}
                      </p>

                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {item.review_date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <NavButton onClick={prev} label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </NavButton>

          <div className="flex gap-1.5 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "left" : "right")}
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  backgroundColor:
                    i === active
                      ? "var(--color-yellow)"
                      : "var(--color-border)",
                  opacity: i === active ? 1 : 0.45,
                }}
              />
            ))}
          </div>

          <NavButton onClick={next} label="Next">
            <ChevronRight className="w-4 h-4" />
          </NavButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;