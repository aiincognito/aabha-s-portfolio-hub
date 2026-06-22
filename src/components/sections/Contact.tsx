import { Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aabha-boob-0b49b0246",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Aabha-Boob",
    icon: Github,
  },
  {
    label: "+91 78159 72631",
    href: "tel:+917815972631",
    icon: Phone,
  },
];

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/aabha-boob-0b49b0246" },
  { label: "GitHub", href: "https://github.com/Aabha-Boob" },
  { label: "Email", href: "mailto:abhaboob8@gmail.com" },
];

export function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full h-full flex flex-col px-6 md:px-10 py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 700px at 50% 50%, rgba(130,77,105,0.08), transparent)",
          zIndex: 0,
        }}
      />

      {/* Main content — centered vertically */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center gap-6 max-w-xl w-full">
          {/* Eyebrow with flanking lines */}
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-[1px] w-6"
              style={{ backgroundColor: "var(--border)" }}
            />
            <span
              className="uppercase text-[11px]"
              style={{ color: "var(--accent)", letterSpacing: "0.18em" }}
            >
              Get in touch
            </span>
            <span
              className="inline-block h-[1px] w-6"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>

          {/* Headline — responsive */}
          <h2
            className="font-semibold md:text-[clamp(2.5rem,6vw,4rem)]"
            style={{
              color: "var(--highlight)",
              fontSize: "clamp(1.75rem, 9vw, 2.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Have a project in mind?
          </h2>

          {/* Subtext */}
          <p
            className="text-[14px] max-w-[440px]"
            style={{ color: "var(--muted)", lineHeight: 1.7 }}
          >
            AI pipelines, automation systems, or a full LLM-powered product — I'd love to hear about it. Based in Hyderabad, working globally.
          </p>

          {/* Availability strip */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] px-4 py-3"
            style={{
              backgroundColor: "rgba(130,77,105,0.05)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              color: "var(--muted)",
            }}
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Available now · Taking new projects
            </span>
            <span className="hidden sm:inline" style={{ color: "var(--border)" }}>
              |
            </span>
            <span>Responds in &lt; 24 hrs</span>
            <span className="hidden sm:inline" style={{ color: "var(--border)" }}>
              |
            </span>
            <span>Remote · any timezone</span>
          </div>

          {/* Primary CTA */}
          <a
            href="mailto:abhaboob8@gmail.com"
            className="inline-flex items-center justify-center text-[14px] font-semibold transition-transform hover:scale-[1.03] w-full sm:w-auto"
            style={{
              backgroundColor: "var(--highlight)",
              color: "var(--bg)",
              borderRadius: "10px",
              padding: "14px 32px",
            }}
          >
            abhaboob8@gmail.com →
          </a>

          {/* Contact link pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    padding: "8px 16px",
                    fontSize: "12px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-0 text-[11px]"
        style={{
          color: "var(--muted)",
          borderTop: "0.5px solid var(--border)",
          paddingTop: "1.5rem",
        }}
      >
        <span>&copy; 2026 Aabha Boob — AI Engineer, Hyderabad</span>

        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          Open to work
        </span>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:underline"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
