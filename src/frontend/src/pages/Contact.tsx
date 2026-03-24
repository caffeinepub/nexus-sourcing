import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
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
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Contact — NEXUS Trading Company";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace with your key from https://web3forms.com (free, no sign-up required)
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Inquiry from NEXUS Trading Website",
          from_name: form.name,
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          requirement: form.requirement,
          to_email: "afaq@nexustrading.com.pk",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(
          "Submission failed. Please try again or contact us via WhatsApp.",
        );
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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
                        href="mailto:contact@nexustrading.com.pk"
                        className="text-sm text-foreground hover:text-primary transition-colors font-body"
                      >
                        contact@nexustrading.com.pk
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
                        href="tel:+923001352214"
                        className="text-sm text-foreground hover:text-primary transition-colors font-body"
                      >
                        +92 300 1352214
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
                        Shop 19, Basement Madina Bara Center
                        <br />
                        Shah Alam Market, Lahore, Pakistan
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
                  <span className="text-foreground">Mon–Fri, 9am–6pm PKT</span>
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-body">
                  WhatsApp
                </p>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  For urgent inquiries, reach us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/923001352214"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp.button"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] rounded-lg"
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
                <p className="text-xs text-muted-foreground font-body mt-6 opacity-60">
                  Powered by{" "}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    Web3Forms
                  </a>
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
                      className="bg-card border-border focus:border-primary rounded-lg"
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
                      className="bg-card border-border focus:border-primary rounded-lg"
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
                      className="bg-card border-border focus:border-primary rounded-lg"
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
                      placeholder="+92 300 0000000"
                      data-ocid="contact.input"
                      className="bg-card border-border focus:border-primary rounded-lg"
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
                    className="bg-card border-border focus:border-primary rounded-lg resize-none"
                  />
                </div>

                {error && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-start gap-3 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3"
                  >
                    <AlertCircle
                      size={16}
                      className="text-red-400 mt-0.5 shrink-0"
                    />
                    <p className="text-sm text-red-400 font-body">{error}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    data-ocid="contact.submit_button"
                    className="w-full sm:w-auto px-10 py-3 text-xs font-semibold tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                  <p className="text-xs text-muted-foreground font-body opacity-60">
                    Powered by{" "}
                    <a
                      href="https://web3forms.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary transition-colors"
                    >
                      Web3Forms
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="reveal">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary mb-3 font-body">
            Find Us
          </p>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            Our Location
          </h2>
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://maps.google.com/maps?q=NEXUS+Trading+Company,+Shop+19,+Basement+Madina+Bara+Center,+Shah+Alam+Market,+Lahore&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="NEXUS Trading Company Location — Shop 19, Basement Madina Bara Center, Shah Alam Market, Lahore"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-xl border border-primary/30 bg-card p-4 mt-4 flex items-start gap-3">
            <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-display font-semibold text-foreground text-sm mb-1">
                NEXUS Trading Company
              </p>
              <p className="text-foreground text-sm font-semibold font-body">
                Shop 19, Basement Madina Bara Center, Shah Alam Market, Lahore,
                Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
