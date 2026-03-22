import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = !!target.closest(
        "a, button, [role='button'], input, textarea, select",
      );
    };

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
        if (isHoveringRef.current) {
          cursorRef.current.setAttribute("data-hover", "true");
        } else {
          cursorRef.current.removeAttribute("data-hover");
        }
      }
      rafRef.current = requestAnimationFrame(render);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    rafRef.current = requestAnimationFrame(render);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: "transform" }}
    >
      <svg
        role="img"
        aria-label="Crosshair cursor"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0 0 3px oklch(0.577 0.245 27.325 / 0.6))",
        }}
      >
        <line
          x1="16"
          y1="2"
          x2="16"
          y2="11"
          stroke="oklch(0.577 0.245 27.325)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="21"
          x2="16"
          y2="30"
          stroke="oklch(0.577 0.245 27.325)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="16"
          x2="11"
          y2="16"
          stroke="oklch(0.577 0.245 27.325)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="16"
          x2="30"
          y2="16"
          stroke="oklch(0.577 0.245 27.325)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="1.5" fill="oklch(0.577 0.245 27.325)" />
        <circle
          cx="16"
          cy="16"
          r="5"
          stroke="oklch(0.577 0.245 27.325 / 0.35)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
}
