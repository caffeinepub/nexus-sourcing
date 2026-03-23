import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      data-ocid="theme.toggle"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        background: isDark ? "oklch(0.18 0 0)" : "oklch(0.90 0 0)",
        border: isDark
          ? "2px solid oklch(0.3 0 0)"
          : "2px solid oklch(0.75 0 0)",
      }}
    >
      {isDark ? (
        <Sun
          size={22}
          style={{ color: "oklch(0.85 0.18 80)" }}
          className="transition-all duration-300"
        />
      ) : (
        <Moon
          size={22}
          style={{ color: "oklch(0.35 0.06 250)" }}
          className="transition-all duration-300"
        />
      )}
    </button>
  );
}
