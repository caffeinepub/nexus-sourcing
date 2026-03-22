import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  CheckSquare,
  FileText,
  Scale,
  Search,
  Truck,
  Users,
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Search,
    title: "Product Sourcing",
    description:
      "We identify and evaluate global suppliers that match your exact product specifications, quality standards, and budget requirements. Our team performs rigorous vetting before any supplier recommendation.",
    features: [
      "Supplier identification & shortlisting",
      "Factory audits",
      "Sample procurement",
      "Cost benchmarking",
    ],
  },
  {
    icon: FileText,
    title: "Import / Export Assistance",
    description:
      "Navigating international trade regulations can be complex. We handle documentation, customs clearance, tariff classification, and regulatory compliance so you can focus on your business.",
    features: [
      "Customs documentation",
      "Tariff & HS code classification",
      "Import/export licensing",
      "Duty optimization",
    ],
  },
  {
    icon: Users,
    title: "Supplier Coordination",
    description:
      "Acting as your dedicated liaison, we manage communication, negotiations, and relationship management with suppliers across multiple countries and time zones.",
    features: [
      "Dedicated supplier liaison",
      "Price negotiation",
      "Contract management",
      "Dispute resolution",
    ],
  },
  {
    icon: CheckSquare,
    title: "Quality Assurance",
    description:
      "Pre-shipment inspections, factory audits, and quality control processes ensure your products meet specifications before they leave the supplier's facility.",
    features: [
      "Pre-shipment inspections",
      "Factory audits",
      "Product testing coordination",
      "Quality reporting",
    ],
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description:
      "We coordinate with freight forwarders, shipping lines, and last-mile carriers to ensure your goods move from origin to destination efficiently and cost-effectively.",
    features: [
      "Freight coordination",
      "Shipping consolidation",
      "Incoterms advisory",
      "Shipment tracking",
    ],
  },
  {
    icon: Scale,
    title: "Trade Compliance",
    description:
      "Stay compliant with international trade laws, sanctions, and import/export restrictions. Our compliance team keeps your operations protected from regulatory risk.",
    features: [
      "Sanctions screening",
      "Compliance audits",
      "Regulatory advisory",
      "Trade policy monitoring",
    ],
  },
];

export function Services() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Services — NEXUS Sourcing";
  }, []);

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Services
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Full-Spectrum
            <br />
            Trade Services
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            From first contact with a supplier to final delivery, NEXUS provides
            end-to-end services that eliminate the complexity of global trade.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-ocid={`services.item.${i + 1}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-card border border-border p-8 transition-all duration-250 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
            >
              <s.icon size={24} className="text-primary mb-5" />
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-muted-foreground font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="reveal font-display font-bold text-3xl text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="reveal reveal-delay-1 text-muted-foreground mb-8 font-body">
            Tell us about your sourcing requirement and we'll respond within 24
            hours.
          </p>
          <Link
            to="/contact"
            data-ocid="services.cta.primary_button"
            className="reveal reveal-delay-2 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03]"
          >
            Submit Your Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
