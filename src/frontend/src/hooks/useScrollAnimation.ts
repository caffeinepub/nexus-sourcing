import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.current?.observe(el);
    }

    return () => observer.current?.disconnect();
  }, []);
}
