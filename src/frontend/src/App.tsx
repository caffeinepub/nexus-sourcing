import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { GoToTop } from "@/components/GoToTop";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/context/ThemeContext";
import { useTheme } from "@/context/ThemeContext";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { HowItWorks } from "@/pages/HowItWorks";
import { Industries } from "@/pages/Industries";
import { Services } from "@/pages/Services";
import { WhyNexus } from "@/pages/WhyNexus";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const queryClient = new QueryClient();

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-primary z-[9999] pointer-events-none transition-none"
      style={{ width: `${progress}%` }}
    />
  );
}

function ScrollAndLoadManager({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const prevPathRef = useRef(pathname);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      onNavigate();
    }
  });

  return null;
}

function RootLayout() {
  const [loading, setLoading] = useState(true);
  const { isTransitioning } = useTheme();

  const handleNavigate = () => {
    setLoading(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <ScrollProgressBar />
      <ScrollAndLoadManager onNavigate={handleNavigate} />
      <CustomCursor />
      <div
        className={`min-h-screen flex flex-col bg-background${
          isTransitioning ? " earthquake" : ""
        }`}
      >
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
      <GoToTop />
      <ThemeToggle />
    </QueryClientProvider>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});
const howItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/how-it-works",
  component: HowItWorks,
});
const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: Industries,
});
const whyNexusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why-nexus",
  component: WhyNexus,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  howItWorksRoute,
  industriesRoute,
  whyNexusRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

void Link;

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
