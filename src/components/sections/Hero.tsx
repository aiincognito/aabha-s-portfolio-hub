import { useSnap } from "../SnapScroll";
import { StatRow } from "../StatCounter";
import { ProfileCard } from "../ProfileCard";

export function Hero({ sectionIds }: { sectionIds: string[] }) {
  const { goTo } = useSnap();
  const nav = (id: string) => {
    const i = sectionIds.indexOf(id);
    if (i >= 0) goTo(i);
  };

  return (
    <div className="w-full h-full flex items-center pt-20 pb-10 px-6 md:px-10 lg:px-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1.5 text-[11px]"
            style={{
              backgroundColor: "rgba(0,230,118,0.08)",
              border: "1px solid rgba(0,230,118,0.25)",
              color: "#00E676",
            }}
          >
            <span
              className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#00E676" }}
            />
            Available for freelance work
          </div>

          <h1
            className="font-semibold"
            style={{
              fontSize: "clamp(2rem, 9vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block" style={{ color: "var(--highlight)" }}>
              AABHA BOOB
            </span>
            <span className="block" style={{ color: "var(--accent)", fontSize: "0.9em" }}>
              AI ENGINEER
            </span>
          </h1>

          <p
            className="max-w-[480px] text-[14px] md:text-[15px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I build LLM pipelines, conversational agents, and production-grade backends — then ship
            them as tools that actually work at scale.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => nav("contact")}
              className="text-[13px] font-semibold rounded-full px-5 py-3 transition-transform hover:scale-[1.02] w-full sm:w-auto"
              style={{ backgroundColor: "var(--highlight)", color: "var(--bg)" }}
            >
              Start a project →
            </button>
            <button
              onClick={() => nav("demos")}
              className="text-[13px] font-semibold rounded-full px-5 py-3"
              style={{
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                backgroundColor: "transparent",
              }}
            >
              View demos
            </button>
            <button
              onClick={() => nav("about")}
              className="text-[13px] font-semibold rounded-full px-5 py-3"
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted)",
                backgroundColor: "transparent",
              }}
            >
              About me
            </button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "1M+ tokens processed",
              "19-table schema shipped",
              "Hyderabad · Remote globally",
            ].map((p) => (
              <span
                key={p}
                className="text-[11px] rounded-full px-3 py-1.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <StatRow />
        </div>

        <div id="hero-card-slot" className="hidden md:block">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
