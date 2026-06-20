import { useState } from "react";
import { useSnap } from "./SnapScroll";

const links = [
  { label: "About", id: "about" },
  { label: "Demos", id: "demos" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function Nav({ sectionIds }: { sectionIds: string[] }) {
  const { goTo } = useSnap();
  const [open, setOpen] = useState(false);

  const nav = (id: string) => {
    const i = sectionIds.indexOf(id);
    if (i >= 0) goTo(i);
    setOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[998] h-16 flex items-center px-6 md:px-10"
        style={{
          backgroundColor: "color-mix(in oklab, var(--bg) 90%, transparent)",
          backdropFilter: "blur(12px)",
          borderBottom: "0.5px solid var(--border)",
        }}
      >
        <button
          onClick={() => nav("hero")}
          className="font-semibold text-[15px]"
          style={{ color: "var(--highlight)" }}
        >
          ab.dev
        </button>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => nav(l.id)}
              className="text-[13px] transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => nav("contact")}
            className="text-[12px] font-semibold rounded-full px-5 py-2"
            style={{ backgroundColor: "var(--highlight)", color: "var(--bg)" }}
          >
            Hire me
          </button>
        </nav>

        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-5 h-[1.5px]" style={{ backgroundColor: "var(--text)" }} />
          <span className="block w-5 h-[1.5px]" style={{ backgroundColor: "var(--text)" }} />
          <span className="block w-5 h-[1.5px]" style={{ backgroundColor: "var(--text)" }} />
        </button>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[997] md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-16 left-0 right-0 flex flex-col gap-1 p-6"
            style={{ backgroundColor: "var(--bg2)", borderBottom: "0.5px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => nav(l.id)}
                className="text-left py-3 text-[15px]"
                style={{ color: "var(--text)" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => nav("contact")}
              className="mt-3 text-[13px] font-semibold rounded-full px-5 py-3"
              style={{ backgroundColor: "var(--highlight)", color: "var(--bg)" }}
            >
              Hire me
            </button>
          </div>
        </div>
      )}
    </>
  );
}
