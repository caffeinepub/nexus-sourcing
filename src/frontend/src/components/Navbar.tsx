import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/industries", label: "Industries" },
  { href: "/why-nexus", label: "Why NEXUS" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (prevPathRef.current !== pathname) {
    prevPathRef.current = pathname;
    setOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/NEXUS-logo-White-1.png"
            alt="NEXUS Trading Company"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid="nav.link"
                  className={`px-3 py-2 text-sm tracking-wide font-body transition-colors duration-200 relative group ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-primary transition-all duration-200 ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact"
          data-ocid="nav.primary_button"
          className="hidden lg:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] rounded-lg"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-b border-border rounded-b-2xl shadow-lg">
          <ul className="flex flex-col py-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid="nav.link"
                    className={`block px-6 py-3 text-sm font-body transition-colors duration-200 ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="px-6 pt-3">
              <Link
                to="/contact"
                data-ocid="nav.primary_button"
                className="block text-center py-2 text-xs font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground rounded-lg"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
