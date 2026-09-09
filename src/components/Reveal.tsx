"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger, in ms */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Fades content up the first time it scrolls into view.
 *
 * The hidden starting state lives in CSS behind `html.js`, which an inline
 * script in the layout sets before first paint. That way the animation still
 * runs, but if JavaScript never loads the content is simply visible rather
 * than stuck at opacity 0.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without observer support there is no way to know when this scrolls in,
    // so show it rather than leaving it stuck at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Anything already on screen at mount should not wait for a scroll event
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
