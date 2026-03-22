import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Building,
  Cpu,
  Heart,
  Layers,
  Settings,
  Shirt,
  ShoppingBag,
  Wheat,
} from "lucide-react";
import { useEffect } from "react";

const industries = [
  {
    icon: Cpu,
    title: "Electronics",
    description:
      "Consumer electronics, components, semiconductors, and industrial control systems sourced from verified Asian and European manufacturers.",
    examples: [
      "PCBs & Components",
      "Consumer Devices",
      "Industrial Controls",
      "LED Products",
    ],
  },
  {
    icon: Settings,
    title: "Industrial Equipment",
    description:
      "Heavy machinery, manufacturing equipment, tools, and precision instruments for industrial operations worldwide.",
    examples: [
      "CNC Machinery",
      "Pneumatic Tools",
      "Safety Equipment",
      "Material Handling",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Consumer Goods",
    description:
      "Branded and white-label consumer products including household goods, personal care, and lifestyle products.",
    examples: [
      "Household Items",
      "Personal Care",
      "Sports & Fitness",
      "Pet Products",
    ],
  },
  {
    icon: Layers,
    title: "Raw Materials",
    description:
      "Steel, aluminum, plastics, rubber, and other industrial raw materials sourced at competitive global market rates.",
    examples: [
      "Steel & Metals",
      "Plastics & Polymers",
      "Rubber & Composites",
      "Chemicals",
    ],
  },
  {
    icon: Wheat,
    title: "Agricultural Products",
    description:
      "Food commodities, agricultural inputs, and processed food products sourced with full traceability and food safety compliance.",
    examples: [
      "Grains & Cereals",
      "Edible Oils",
      "Dried Fruits",
      "Agricultural Inputs",
    ],
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    description:
      "Fabric, garments, uniforms, and accessories manufactured in certified facilities meeting international labor standards.",
    examples: [
      "Fabric & Yarn",
      "Garments & Uniforms",
      "Technical Textiles",
      "Accessories",
    ],
  },
  {
    icon: Heart,
    title: "Medical Supplies",
    description:
      "Medical devices, consumables, PPE, and hospital equipment sourced from ISO-certified and FDA-registered facilities.",
    examples: [
      "Disposables & PPE",
      "Diagnostic Equipment",
      "Surgical Instruments",
      "Rehabilitation Aids",
    ],
  },
  {
    icon: Building,
    title: "Construction Materials",
    description:
      "Building materials, hardware, flooring, and construction chemicals for commercial and infrastructure projects.",
    examples: [
      "Steel & Rebar",
      "Flooring & Tiles",
      "Hardware & Fixtures",
      "Insulation Materials",
    ],
  },
];

export function Industries() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Industries — NEXUS Sourcing";
  }, []);

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Industries
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Sectors We Serve
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            NEXUS has deep sourcing expertise across a broad range of product
            categories and industrial sectors — bringing specialized knowledge
            to every engagement.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              data-ocid={`industries.item.${i + 1}`}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-card border border-border p-6 transition-all duration-250 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
            >
              <ind.icon size={22} className="text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {ind.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-body mb-5">
                {ind.description}
              </p>
              <div className="space-y-1">
                {ind.examples.map((ex) => (
                  <div
                    key={ex}
                    className="flex items-center gap-2 text-xs text-muted-foreground font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
