import { useState } from "react";
import { User, Terminal, Zap, MapPin, Sparkles, Rocket, type LucideIcon } from "lucide-react";

type Bubble = {
  id: string;
  label: string;
  icon: LucideIcon;
  content: string;
};

const bubbles: Bubble[] = [
  {
    id: "who",
    label: "who i am",
    icon: User,
    content:
      "AI Engineer fresh out of KG Reddy (B.Tech CSE + Data Science, 8.36 GPA). I bridge the gap between 'AI prototype' and 'shipped product.'",
  },
  {
    id: "stack",
    label: "my stack",
    icon: Terminal,
    content:
      "Python · FastAPI · React · LangChain · OpenAI / Azure OpenAI · SQLAlchemy · MySQL · Docker · APScheduler · Guardrails AI · YOLOv5 · Whisper.",
  },
  {
    id: "work",
    label: "how i work",
    icon: Zap,
    content:
      "I like systems that are boring in the best way — reliable, auditable, well-scoped. I build with AI coding tools heavily but own the architecture decisions.",
  },
  {
    id: "where",
    label: "where i am",
    icon: MapPin,
    content:
      "Based in Hyderabad, India. Open to remote-first roles globally. Comfortable coordinating across time zones.",
  },
  {
    id: "fun",
    label: "fun fact",
    icon: Sparkles,
    content:
      "I once generated over a million tokens of synthetic training data using GPT-4o and LLaMA 3 — basically making AI do its own homework.",
  },
  {
    id: "want",
    label: "what i want",
    icon: Rocket,
    content:
      "To build AI products that solve real problems at production scale — not demos that die in a repo.",
  },
];

export function About() {
  const [active, setActive] = useState<string | null>(null);
  const activeBubble = bubbles.find((b) => b.id === active);

  return (
    <div
      className="w-full h-full flex items-center px-6 md:px-10 lg:px-16 py-20"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <span
            className="uppercase text-[11px]"
            style={{ color: "var(--accent)", letterSpacing: "0.18em" }}
          >
            About me
          </span>
          <h2
            className="font-semibold"
            style={{
              color: "var(--highlight)",
              fontSize: "clamp(22px, 3vw, 28px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            I turn AI research into things that actually ship.
          </h2>

          <div
            className="flex flex-col gap-4 text-[13px] md:text-[14px]"
            style={{ color: "var(--muted)", lineHeight: 1.8 }}
          >
            <p>
              I'm an AI Engineer based in Hyderabad, specializing in LLM orchestration,
              conversational agents, and production-grade backends. B.Tech in Computer Science (Data
              Science) — GPA 8.36.
            </p>
            <p>
              At Bradsol, I built a FastAPI backend with a 19-table schema, JWT auth, DB-driven
              RBAC, and OTP login serving real users across multiple service centers.
            </p>
            <p>
              At FewShotPrep, I built conversational AI agents and generated 1M+ JSONL tokens using
              GPT-4o and LLaMA 3 for training pipelines.
            </p>
            <p>
              I believe the best AI engineers build end-to-end — from raw data to deployed,
              production-grade tools people actually use.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {bubbles.map((b) => {
              const Icon = b.icon;
              const isActive = active === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setActive(b.id)}
                  className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.04]"
                  style={{
                    backgroundColor: isActive
                      ? "color-mix(in oklab, var(--accent3) 60%, transparent)"
                      : "color-mix(in oklab, var(--accent3) 25%, transparent)",
                    border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                    color: isActive ? "var(--highlight)" : "var(--muted)",
                    padding: "8px 16px",
                    fontSize: "12px",
                  }}
                >
                  <Icon size={14} />
                  {b.label}
                </button>
              );
            })}
          </div>

          <div
            className="w-full"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "16px 20px",
              minHeight: "64px",
            }}
          >
            {activeBubble ? (
              <div className="flex flex-col gap-2">
                <span
                  className="uppercase text-[10px]"
                  style={{ color: "var(--dim)", letterSpacing: "0.14em" }}
                >
                  {activeBubble.label}
                </span>
                <p
                  className="text-[13px]"
                  style={{ color: "var(--muted)", lineHeight: 1.7 }}
                >
                  {activeBubble.content}
                </p>
              </div>
            ) : (
              <p
                className="italic text-[13px]"
                style={{ color: "var(--dim)" }}
              >
                tap a bubble ↑
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
