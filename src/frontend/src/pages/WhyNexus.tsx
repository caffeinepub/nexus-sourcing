import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  DollarSign,
  Globe,
  MessageSquare,
  Package,
  Shield,
} from "lucide-react";
import { useEffect } from "react";

const features = [
  {
    icon: Globe,
    title: "Global Supplier Network",
    headline: "Access 2,400+ Verified Suppliers Across 60 Countries",
    description:
      "Our supplier network spans six continents, with deep relationships built over a decade. Every supplier undergoes a rigorous vetting process covering financial stability, production capacity, certifications, and quality management systems. When you source through NEXUS, you're accessing a pre-qualified ecosystem — not starting from scratch.",
    stats: [
      "60+ countries covered",
      "2,400+ vetted suppliers",
      "10-year average relationship duration",
    ],
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    headline: "Real-Time Updates. No Surprises.",
    description:
      "Every client receives a dedicated account manager as their single point of contact. We provide structured milestone updates, proactive risk alerts, and full visibility into supplier status — so you're never left wondering where your order stands. Our communication standards are built around your timeline, not ours.",
    stats: [
      "Dedicated account manager",
      "<4 hour response SLA",
      "Milestone-based reporting",
    ],
  },
  {
    icon: Package,
    title: "End-to-End Management",
    headline: "One Partner. Zero Gaps.",
    description:
      "From the moment you submit an inquiry to the moment goods arrive at your facility, NEXUS manages every step. Supplier selection, negotiation, production monitoring, quality inspection, logistics coordination, customs clearance — handled. You focus on your business; we handle the supply chain.",
    stats: [
      "Full supply chain coverage",
      "Single point of responsibility",
      "Integrated logistics coordination",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    headline: "Competitive Pricing Through Collective Leverage",
    description:
      "Our consolidated purchasing volume and long-standing supplier relationships give us negotiating leverage that individual buyers rarely achieve. We pass those efficiencies directly to our clients — consistently delivering 10-25% cost improvements over self-managed sourcing, without compromising quality.",
    stats: [
      "10-25% typical cost savings",
      "Volume-based leverage",
      "Transparent fee structure",
    ],
  },
  {
    icon: Shield,
    title: "Compliance Expertise",
    headline: "Navigate Regulations with Confidence",
    description:
      "International trade is governed by an evolving web of regulations, tariffs, sanctions, and product standards. Our compliance team monitors regulatory changes across all markets we operate in — ensuring your imports and exports remain fully compliant and protected from costly delays or penalties.",
    stats: [
      "Multi-jurisdiction compliance",
      "Sanctions & AML screening",
      "Real-time regulatory monitoring",
    ],
  },
];

export function WhyNexus() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Why NEXUS — NEXUS Sourcing";
  }, []);

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Why NEXUS
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            The NEXUS
            <br />
            Advantage
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            There are many sourcing agents. NEXUS is different. Here's why
            leading businesses trust us with their most critical supply chain
            operations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-ocid={`why.item.${i + 1}`}
              className={`reveal reveal-delay-${(i % 3) + 1} grid lg:grid-cols-[1fr_2fr] gap-12 items-start pb-20 border-b border-border last:border-0 last:pb-0`}
            >
              <div>
                <f.icon size={28} className="text-primary mb-5" />
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
                  {f.title}
                </h2>
                <ul className="space-y-2 mt-6">
                  {f.stats.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-sm text-muted-foreground font-body"
                    >
                      <span className="w-4 h-px bg-primary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                  {f.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="reveal font-display font-bold text-3xl text-foreground mb-6">
            Experience the NEXUS difference
          </h2>
          <div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="why.primary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03]"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              data-ocid="why.secondary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
