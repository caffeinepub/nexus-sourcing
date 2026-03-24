import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Globe, Phone, TrendingUp, Users } from "lucide-react";
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

const stats = [
  { icon: Calendar, value: "10+", label: "Years in Operation" },
  { icon: Globe, value: "60+", label: "Countries Active" },
  { icon: Users, value: "2,400+", label: "Verified Suppliers" },
  { icon: TrendingUp, value: "94%", label: "Client Retention Rate" },
];

export function About() {
  useScrollAnimation();
  const { isDark } = useTheme();

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
              Our Story
            </p>
            <h2 className="reveal reveal-delay-1 font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
              A Decade of Global Sourcing Excellence
            </h2>
            <div className="space-y-4 mb-10">
              <p className="reveal reveal-delay-2 text-muted-foreground leading-relaxed font-body">
                Founded over a decade ago, NEXUS Trading Company was built to
                bridge the gap between international suppliers and businesses
                seeking reliable, cost-effective procurement solutions.
              </p>
              <p className="reveal reveal-delay-3 text-muted-foreground leading-relaxed font-body">
                Today, we serve clients across manufacturing, retail,
                technology, healthcare, and construction — managing complex
                multi-country supply chains with the discipline and precision
                that global trade demands.
              </p>
            </div>
            <div className="reveal reveal-delay-4 flex items-end gap-5 border-l-2 border-primary pl-6 py-2">
              <div className="flex-1">
                <img
                  src={
                    isDark
                      ? "/assets/uploads/Afaq-Signature-White-1.png"
                      : "/assets/uploads/layer_1-019d1e54-2aaf-7068-98be-dfdc5b55f8b3-1.jpg"
                  }
                  alt="Afaq Mehdi signature"
                  className="h-16 object-contain mb-3"
                  style={{
                    mixBlendMode: isDark ? "screen" : "multiply",
                    opacity: 0.9,
                  }}
                />
                <p className="font-display font-bold text-lg text-foreground">
                  Afaq Mehdi
                </p>
                <p className="text-sm text-primary font-body tracking-wide">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-5 mt-8">
              <a
                href="tel:+923001352214"
                data-ocid="about.primary_button"
                className="inline-flex items-center gap-3 bg-primary hover:bg-[#FF2A2A] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-red-glow font-body"
              >
                <Phone className="w-4 h-4" />
                +92 300 1352214
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-xl p-7 hover:border-primary hover:shadow-red-glow-sm transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <div className="font-display font-black text-4xl text-primary mb-1">
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
            <blockquote className="reveal reveal-delay-1 relative font-display font-bold text-2xl sm:text-3xl text-foreground leading-relaxed">
              <span className="absolute -top-4 -left-2 text-7xl text-primary/20 font-serif leading-none select-none">
                &ldquo;
              </span>
              To simplify global trade for businesses worldwide — delivering
              quality, speed, and transparency at every step of the supply
              chain.
              <span className="absolute -bottom-8 -right-2 text-7xl text-primary/20 font-serif leading-none select-none">
                &rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
              Our Vision
            </p>
            <h2 className="reveal reveal-delay-1 font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Shaping the Future of Global Commerce
            </h2>
            <p className="reveal reveal-delay-2 text-muted-foreground leading-relaxed font-body">
              We envision a world where any business — regardless of size or
              location — can tap into global supply chains with confidence. By
              combining technology, local expertise, and decades of trade
              experience, NEXUS is building the infrastructure for the next era
              of international commerce.
            </p>
          </div>
          <div className="reveal reveal-delay-2 rounded-xl overflow-hidden border border-border">
            <img
              src="/assets/generated/business-handshake.dim_800x600.jpg"
              alt="Global business vision"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
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
        </div>
      </section>
    </main>
  );
}
