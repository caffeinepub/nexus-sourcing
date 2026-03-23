import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const { isDark } = useTheme();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1000);
    const doneTimer = setTimeout(() => onDone(), 1450);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{
        backgroundColor: isDark ? "#2a2a2a" : "#d0d0d0",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.45s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <img
        src={isDark ? "/assets/uploads/2-1.png" : "/assets/uploads/1-2.png"}
        alt="NEXUS"
        style={{
          height: "80px",
          width: "auto",
          animation: "breathe 1.8s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
