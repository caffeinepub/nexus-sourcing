import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const products = [
  {
    code: "NTC-100",
    title: "Rice",
    image: "/assets/generated/rice-ntc100.dim_600x400.jpg",
    description:
      "Premium long-grain and basmati rice sourced from top-tier agricultural regions. Available in bulk and retail packaging with full food safety compliance and export certification.",
    varieties: [
      "Basmati Rice",
      "Long-Grain White Rice",
      "Parboiled Rice",
      "Brown Rice",
    ],
  },
  {
    code: "NTC-101",
    title: "Edible Oils",
    image: "/assets/generated/oils-ntc101.dim_600x400.jpg",
    description:
      "High-quality edible oils refined to international standards. Sourced from certified suppliers with full traceability, suitable for food manufacturing and retail distribution.",
    varieties: ["Sunflower Oil", "Palm Oil", "Canola Oil", "Soybean Oil"],
  },
  {
    code: "NTC-102",
    title: "Fresh Fruits",
    image: "/assets/generated/fruits-ntc102.dim_600x400.jpg",
    description:
      "Seasonal and tropical fresh fruits sourced from verified farms with stringent quality controls. Cold-chain logistics ensure freshness from origin to destination.",
    varieties: [
      "Mangoes",
      "Citrus Fruits",
      "Apples & Pears",
      "Tropical Varieties",
    ],
  },
  {
    code: "NTC-103",
    title: "Dried Fruits",
    image: "/assets/generated/dried-fruits-ntc103.dim_600x400.jpg",
    description:
      "Premium sun-dried and processed dried fruits including dates, apricots, raisins, and figs. Packed in hygienic conditions meeting international export standards.",
    varieties: [
      "Dates & Figs",
      "Dried Apricots",
      "Raisins",
      "Mixed Nuts & Dried Berries",
    ],
  },
];

export function Industries() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Products — NEXUS Trading Company";
  }, []);

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Agricultural Products
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            What We Source
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            NEXUS specializes in sourcing premium agricultural commodities from
            certified suppliers across global markets — ensuring quality,
            compliance, and competitive pricing at every step.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <div
              key={product.code}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-mono font-bold px-3 py-1 rounded-full tracking-widest">
                  {product.code}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body mb-5">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {product.varieties.map((v) => (
                    <div
                      key={v}
                      className="flex items-center gap-2 text-xs text-muted-foreground font-body"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
