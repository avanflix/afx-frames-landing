"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`reveal ${visible ? "show" : ""}`}
      >
        {children}
      </div>

<style jsx>{`
  .reveal {
    opacity: 0;
    transform:
      translateY(120px)
      scale(0.92)
      rotateX(12deg);
    transition:
      opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.2s ease;
    transform-origin: center top;
    will-change: transform, opacity, filter;
  }

  .reveal.show {
    opacity: 1;
    transform:
      translateY(0)
      scale(1)
      rotateX(0deg);
    filter: blur(0);
  }
`}</style>
    </>
  );
}