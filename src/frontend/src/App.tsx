import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
} from "@tanstack/react-router";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
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

// Suppress unused import warning — Link is used implicitly via TanStack Router
void Link;

export default function App() {
  return <RouterProvider router={router} />;
}
