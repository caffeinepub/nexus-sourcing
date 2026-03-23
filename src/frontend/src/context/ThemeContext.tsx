import { createContext, useContext, useEffect, useRef, useState } from "react";

interface ThemeContextValue {
  isDark: boolean;
  isTransitioning: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: true,
  isTransitioning: false,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("nexus-theme");
    return stored ? stored === "dark" : true;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
    localStorage.setItem("nexus-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggle = () => {
    if (isTransitioning) return;

    // Start transition: add class for CSS color transitions
    document.documentElement.classList.add("theme-transitioning");
    setIsTransitioning(true);

    // Change theme immediately so CSS transitions animate the color shift
    setIsDark((prev) => !prev);

    // After 2s, clean up
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
      setIsTransitioning(false);
    }, 2000);
  };

  return (
    <ThemeContext.Provider value={{ isDark, isTransitioning, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
