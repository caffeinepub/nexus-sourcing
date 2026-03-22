import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import { Globe, Shield, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Globe,
    label: "Countries Covered",
    value: "60+",
    num: 60,
    suffix: "+",
  },
  {
    icon: Shield,
    label: "Verified Suppliers",
    value: "2,400+",
    num: 2400,
    suffix: "+",
  },
  {
    icon: Zap,
    label: "Orders Fulfilled",
    value: "18,000+",
    num: 18000,
    suffix: "+",
  },
  {
    icon: TrendingUp,
    label: "Client Retention",
    value: "94%",
    num: 94,
    suffix: "%",
  },
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

const coreValues = [
  {
    letter: "N",
    name: "Networking",
    desc: "Building powerful connections across global markets and supply chains for sustainable partnerships.",
  },
  {
    letter: "E",
    name: "Excellence",
    desc: "Delivering the highest standards in every sourcing transaction, from selection to fulfillment.",
  },
  {
    letter: "X",
    name: "eXpertise",
    desc: "Years of hands-on experience navigating complex international trade and supplier networks.",
  },
  {
    letter: "U",
    name: "Uniqueness",
    desc: "Tailored sourcing strategies designed specifically around your business goals and requirements.",
  },
  {
    letter: "S",
    name: "Scalability",
    desc: "Solutions that grow with your business, handling increasing volumes without compromising quality.",
  },
];

function StatItem({
  stat,
  shouldStart,
}: { stat: (typeof stats)[0]; shouldStart: boolean }) {
  const count = useCountUp(stat.num, 2000, shouldStart);
  const displayValue = shouldStart
    ? `${count.toLocaleString()}${stat.suffix}`
    : stat.value;
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <stat.icon size={20} className="text-primary" />
      <span className="font-display font-black text-3xl sm:text-4xl text-foreground">
        {displayValue}
      </span>
      <span className="text-xs tracking-wider uppercase text-muted-foreground font-body">
        {stat.label}
      </span>
    </div>
  );
}

export function Home() {
  useScrollAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    document.title = "NEXUS Trading Company — Global Sourcing. Delivered.";
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="/assets/generated/hero-shipping-port.dim_1600x900.jpg"
          alt="Shipping port at night"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.96 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

        {/* Floating orbs */}
        <div
          className="absolute w-3 h-3 rounded-full bg-primary/30 blur-sm"
          style={{
            top: "20%",
            left: "15%",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full bg-primary/20 blur-sm"
          style={{
            top: "65%",
            left: "8%",
            animation: "float 8s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-primary/20 blur-md"
          style={{
            top: "30%",
            right: "12%",
            animation: "float 7s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full bg-primary/30 blur-sm"
          style={{
            bottom: "25%",
            right: "20%",
            animation: "float 9s ease-in-out infinite",
            animationDelay: "0.8s",
          }}
        />

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
            NEXUS Trading Company connects businesses to verified global
            suppliers — managing every step from sourcing to delivery with
            precision and full transparency.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="home.primary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03] rounded-lg shadow-red-glow"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              data-ocid="home.secondary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200 rounded-lg"
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

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="reveal mb-8">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-2 font-body">
            Our DNA
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            The Values Behind NEXUS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {coreValues.map((v, i) => (
            <div
              key={v.letter}
              className={`reveal reveal-delay-${i + 1} group bg-gradient-to-br from-card to-card/60 border border-border rounded-xl p-5 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-red-glow`}
            >
              <span className="block font-display font-black text-3xl text-primary leading-none mb-2">
                {v.letter}
              </span>
              <h3 className="font-display font-semibold text-sm text-foreground mb-2">
                {v.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-body">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-4 my-8">
        <div
          ref={statsRef}
          className="bg-card border border-border rounded-2xl"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <StatItem stat={stat} shouldStart={statsVisible} />
                </div>
              ))}
            </div>
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
              className={`reveal reveal-delay-${i + 1} group relative bg-card border border-border rounded-xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />
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
      <section className="relative overflow-hidden">
        {/* Global network image banner */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden">
          <img
            src="/assets/generated/global-network-map.dim_1200x600.jpg"
            alt="Global trade network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-3 font-body">
              Our Advantage
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Why Businesses Choose NEXUS
            </h2>
          </div>
        </div>
        <div className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-3 gap-6">
              {differentiators.map((d, i) => (
                <div
                  key={d.title}
                  className={`reveal reveal-delay-${i + 1} group bg-card/50 border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
                >
                  <div className="w-8 h-px bg-primary mb-4 transition-all duration-200 group-hover:w-14" />
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
        </div>
      </section>

      {/* CTA band */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="reveal relative bg-card border border-primary/30 rounded-2xl p-10 sm:p-16 text-center overflow-hidden shadow-red-glow">
          <div
            className="absolute inset-0 opacity-5 rounded-2xl"
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
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03] rounded-lg"
            >
              Request a Quote
            </Link>
            <Link
              to="/how-it-works"
              data-ocid="home.cta.secondary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200 rounded-lg"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
