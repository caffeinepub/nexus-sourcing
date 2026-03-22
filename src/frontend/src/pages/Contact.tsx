import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
};

export function Contact() {
  useScrollAnimation();

  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact — NEXUS Sourcing";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="pt-16">
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="reveal text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-4 font-body">
            Get in Touch
          </p>
          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Start a Conversation
          </h1>
          <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            Tell us about your sourcing requirement. Our team responds within 24
            hours with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <div className="reveal space-y-8">
              <div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-body mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@nexussourcing.com"
                        className="text-sm text-foreground hover:text-primary transition-colors font-body"
                      >
                        info@nexussourcing.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-body mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+18000000000"
                        className="text-sm text-foreground hover:text-primary transition-colors font-body"
                      >
                        +1 (800) 000-0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-body mb-1">
                        Office
                      </p>
                      <p className="text-sm text-foreground font-body">
                        1 Trade Center Plaza
                        <br />
                        New York, NY 10007
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Response time:{" "}
                  <span className="text-foreground">
                    Within 24 business hours
                  </span>
                  <br />
                  Available:{" "}
                  <span className="text-foreground">Mon–Fri, 9am–6pm EST</span>
                </p>
              </div>

              <div className="border border-border p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-body">
                  WhatsApp
                </p>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  For urgent inquiries, reach us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp.button"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <CheckCircle size={48} className="text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Inquiry Submitted
                </h3>
                <p className="text-muted-foreground font-body max-w-sm">
                  Thank you. A member of our sourcing team will respond to your
                  inquiry within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.dialog"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-body"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      data-ocid="contact.input"
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-body"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      data-ocid="contact.input"
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-body"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      data-ocid="contact.input"
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-body"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      data-ocid="contact.input"
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="requirement"
                    className="text-xs uppercase tracking-wider text-muted-foreground font-body"
                  >
                    Product Requirement *
                  </Label>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    required
                    rows={6}
                    value={form.requirement}
                    onChange={handleChange}
                    placeholder="Describe the product(s) you need to source: specifications, quantity, target price, delivery timeline, destination country, etc."
                    data-ocid="contact.textarea"
                    className="bg-card border-border focus:border-primary rounded-none resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  data-ocid="contact.submit_button"
                  className="w-full sm:w-auto px-10 py-3 text-xs font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-none transition-all duration-200 hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
