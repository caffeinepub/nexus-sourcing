import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import { Globe, Shield, TrendingUp, Zap } from "lucide-react";
import { useEffect } from "react";

const stats = [
  { icon: Globe, label: "Countries Covered", value: "60+" },
  { icon: Shield, label: "Verified Suppliers", value: "2,400+" },
  { icon: Zap, label: "Orders Fulfilled", value: "18,000+" },
  { icon: TrendingUp, label: "Client Retention", value: "94%" },
];

const services = [
  {
    title: "Product Sourcing",
    description:
      "Identify, evaluate, and onboard suppliers across global markets with precision.",
  },
  {
    title: "Import / Export Assistance",
    description:
      "Navigate customs, documentation, and regulatory compliance seamlessly.",
  },
  {
    title: "Supplier Coordination",
    description:
      "Dedicated liaison management between your business and international vendors.",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous pre-shipment inspections and supplier audits to protect your brand.",
  },
];

const differentiators = [
  {
    title: "Global Supplier Network",
    description:
      "Access to a vetted network of 2,400+ suppliers across 60 countries.",
  },
  {
    title: "Transparent Communication",
    description:
      "Real-time updates and dedicated account managers at every stage.",
  },
  {
    title: "End-to-End Management",
    description:
      "From initial inquiry to doorstep delivery — we handle it all.",
  },
];

export function Home() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "NEXUS Sourcing — Global Sourcing. Delivered.";
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.96 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-6 font-body">
            Import · Export · Sourcing
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight mb-8">
            GLOBAL SOURCING.
            <br />
            <span className="text-primary">DELIVERED.</span>
          </h1>
          <p className="reveal reveal-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 font-body">
            NEXUS connects businesses to verified global suppliers — managing
            every step from sourcing to delivery with precision and full
            transparency.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="home.primary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03]"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              data-ocid="home.secondary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
            >
              Submit Inquiry
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-[0.3em] uppercase font-body text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center gap-3`}
              >
                <stat.icon size={20} className="text-primary" />
                <span className="font-display font-black text-3xl text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs tracking-wider uppercase text-muted-foreground font-body">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="reveal mb-14">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-3 font-body">
            What We Do
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Comprehensive Sourcing Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} group bg-card border border-border p-6 transition-all duration-250 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
            >
              <div className="w-8 h-px bg-primary mb-5 transition-all duration-200 group-hover:w-12" />
              <h3 className="font-display font-semibold text-base text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {s.description}
              </p>
            </div>
          ))}
        </div>
        <div className="reveal mt-8">
          <Link
            to="/services"
            data-ocid="home.services.link"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold tracking-wide transition-colors duration-200 font-body"
          >
            View all services →
          </Link>
        </div>
      </section>

      {/* Why NEXUS teaser */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="reveal mb-14">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-3 font-body">
              Our Advantage
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Why Businesses Choose NEXUS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className={`reveal reveal-delay-${i + 1} group border-l-2 border-border pl-6 py-4 transition-all duration-200 hover:border-primary`}
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10">
            <Link
              to="/why-nexus"
              data-ocid="home.whynexus.link"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold tracking-wide transition-colors duration-200 font-body"
            >
              Learn more about NEXUS →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="reveal relative bg-card border border-primary/30 p-10 sm:p-16 text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(oklch(0.577 0.245 27.325) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <p className="relative text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Ready to Source?
          </p>
          <h2 className="relative font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
            Start Your Sourcing Journey Today
          </h2>
          <p className="relative text-muted-foreground mb-10 max-w-xl mx-auto font-body">
            Tell us what you need and our team will respond within 24 hours with
            a tailored sourcing proposal.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="home.cta.primary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03]"
            >
              Request a Quote
            </Link>
            <Link
              to="/how-it-works"
              data-ocid="home.cta.secondary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
