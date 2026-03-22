import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Submit your sourcing requirement through our inquiry form or contact us directly. Provide product specifications, target quantity, timeline, and any quality standards.",
    details: [
      "Product specifications",
      "Target quantity & timeline",
      "Budget range (optional)",
      "Destination country",
    ],
  },
  {
    number: "02",
    title: "Sourcing",
    description:
      "Our team immediately begins searching our verified supplier network. We identify 3-5 qualified suppliers, obtain quotes, and conduct initial quality assessments.",
    details: [
      "Supplier identification",
      "Quote collection",
      "Initial quality assessment",
      "Comparative analysis",
    ],
  },
  {
    number: "03",
    title: "Negotiation",
    description:
      "We negotiate pricing, payment terms, lead times, and quality requirements on your behalf — leveraging our relationships and volume buying power to secure optimal terms.",
    details: [
      "Price negotiation",
      "Payment term structuring",
      "Lead time confirmation",
      "Contract execution",
    ],
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "From production monitoring to pre-shipment inspection, customs clearance, and final delivery — we manage the entire logistics chain and keep you updated at every milestone.",
    details: [
      "Production monitoring",
      "Pre-shipment inspection",
      "Customs clearance",
      "Final delivery confirmation",
    ],
  },
];

export function HowItWorks() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "How It Works — NEXUS Trading Company";
  }, []);

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Process
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Simple Process.
            <br />
            Proven Results.
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            Our four-step process transforms your sourcing requirement into a
            delivered product — with complete visibility at every stage.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[200px_1fr] gap-8 py-12 border-b border-border last:border-0 transition-all duration-300 hover:pl-2`}
            >
              <div className="flex items-start gap-4">
                <span className="font-display font-black text-6xl text-border group-hover:text-primary/30 transition-colors duration-300 leading-none select-none">
                  {step.number}
                </span>
              </div>
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="rounded-xl bg-card/30 px-6 py-4 border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-body max-w-xl">
                    {step.description}
                  </p>
                </div>
                <ul className="space-y-2 min-w-[180px]">
                  {step.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-xs text-muted-foreground font-body"
                    >
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold border border-primary/20 shrink-0 leading-none">
                        ›
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="reveal font-display font-bold text-3xl text-foreground mb-6">
            Begin your sourcing process
          </h2>
          <div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="how.primary_button"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.03] rounded-lg"
            >
              Submit an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
