import { Link } from "@tanstack/react-router";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/industries", label: "Industries" },
  { href: "/why-nexus", label: "Why NEXUS" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src="/assets/uploads/NEXUS-logo-White-1.png"
              alt="NEXUS Trading Company"
              className="h-8 w-auto object-contain mb-3"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your trusted partner for global import-export sourcing and supply
              chain management.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid="nav.link"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              contact@nexustrading.com.pk
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              +92 300 1352214
            </p>
            <Link
              to="/contact"
              data-ocid="footer.primary_button"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-lg"
            >
              Submit Inquiry
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {year} NEXUS Trading Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
