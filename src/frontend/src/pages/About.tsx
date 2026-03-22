import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const values = [
  {
    title: "Reliability",
    description:
      "We hold ourselves to the highest standards of consistency and accountability. When we commit to a timeline or specification, we deliver — without exception.",
  },
  {
    title: "Global Reach",
    description:
      "With active supplier relationships across 60+ countries, we bring the world's manufacturing capacity to your doorstep. No geography is out of reach.",
  },
  {
    title: "Personalized Service",
    description:
      "Every client receives a dedicated account manager. We build long-term partnerships, not transactional relationships. Your success is our benchmark.",
  },
];

export function About() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "About — NEXUS Trading Company";
  }, []);

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            About Us
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Built on Trust.
            <br />
            Driven by Results.
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            NEXUS Trading Company was founded on the belief that international
            trade should be accessible, transparent, and efficient for
            businesses of every size.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
              Our Story
            </p>
            <h2 className="reveal reveal-delay-1 font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
              A Decade of Global Sourcing Excellence
            </h2>
            <div className="space-y-4">
              <p className="reveal reveal-delay-2 text-muted-foreground leading-relaxed font-body">
                Founded over a decade ago by a team of seasoned trade
                specialists, NEXUS Trading Company was built to bridge the gap
                between international suppliers and businesses seeking reliable,
                cost-effective procurement solutions.
              </p>
              <p className="reveal reveal-delay-3 text-muted-foreground leading-relaxed font-body">
                Today, we serve clients across manufacturing, retail,
                technology, healthcare, and construction — managing complex
                multi-country supply chains with the discipline and precision
                that global trade demands.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2 space-y-4">
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src="/assets/generated/business-handshake.dim_800x600.jpg"
                alt="Business partnership handshake"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years in Operation" },
                { value: "60+", label: "Countries Active" },
                { value: "2,400+", label: "Verified Suppliers" },
                { value: "94%", label: "Client Retention Rate" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-red-glow-sm transition-all duration-300"
                >
                  <div className="font-display font-black text-3xl text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-body">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
              Our Mission
            </p>
            <blockquote className="reveal reveal-delay-1 font-display font-bold text-2xl sm:text-3xl text-foreground leading-relaxed">
              "To simplify global trade for businesses worldwide — delivering
              quality, speed, and transparency at every step of the supply
              chain."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="reveal mb-14">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-3 font-body">
            What We Stand For
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Our Core Values
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`reveal reveal-delay-${i + 1} group bg-gradient-to-br from-card to-card/60 border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-red-glow`}
            >
              <div className="w-8 h-px bg-primary mb-6 transition-all duration-200 group-hover:w-14" />
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
