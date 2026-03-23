import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      className="fixed z-[9990] transition-all duration-300 rounded-full bg-card border border-border shadow-lg hover:border-primary hover:shadow-red-glow hover:-translate-y-1"
      style={{
        bottom: "160px",
        right: "24px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <ChevronUp size={24} className="text-primary" />
    </button>
  );
}
