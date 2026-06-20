import { useRef } from "react";

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.05s linear";
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s ease";
    el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className="hidden md:flex justify-center">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative w-full max-w-[280px] flex flex-col items-center gap-4"
        style={{
          backgroundColor: "var(--card)",
          border: "0.5px solid var(--border)",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0"
          style={{
            height: "2px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3))",
          }}
        />

        <div
          className="grid place-items-center rounded-full"
          style={{
            width: "80px",
            height: "80px",
            background:
              "linear-gradient(135deg, rgba(130,77,105,0.2), rgba(42,17,75,0.2))",
            border: "1.5px solid var(--accent)",
            color: "var(--highlight)",
            fontSize: "1.6rem",
            fontWeight: 600,
          }}
        >
          AB
        </div>

        <div className="text-center flex flex-col gap-1">
          <div
            className="font-semibold"
            style={{ color: "var(--highlight)", fontSize: "1.2rem" }}
          >
            AABHA BOOB
          </div>
          <div style={{ color: "var(--muted)", fontSize: "0.72rem" }}>
            AI Engineer · B.Tech CS (Data Science)
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{
            backgroundColor: "rgba(0,230,118,0.08)",
            border: "1px solid rgba(0,230,118,0.25)",
            color: "#00E676",
            fontSize: "10.5px",
          }}
        >
          <span
            className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#00E676" }}
          />
          Open to work
        </div>

        <div
          className="w-full flex flex-col gap-2 pt-3"
          style={{ borderTop: "0.5px solid var(--border)" }}
        >
          {[
            ["Response time", "< 24 hrs"],
            ["Location", "Hyderabad · Remote"],
            ["Stack", "LLM · Python · FastAPI"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3">
              <span style={{ color: "var(--dim)", fontSize: "10px" }}>{k}</span>
              <span
                className="text-right"
                style={{
                  color: "var(--highlight)",
                  fontSize: "10.5px",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
