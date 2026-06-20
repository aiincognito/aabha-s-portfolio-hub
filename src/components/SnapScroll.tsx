import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type SnapCtx = {
  current: number;
  goTo: (i: number) => void;
  count: number;
  enabled: boolean;
};

const Ctx = createContext<SnapCtx | null>(null);
export const useSnap = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useSnap outside provider");
  return c;
};

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function SnapScroll({
  sections,
  sectionIds,
  children,
}: {
  sections: ReactNode[];
  sectionIds: string[];
  children?: ReactNode;
}) {
  const count = sections.length;
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);
  const currentRef = useRef(0);
  const deltaRef = useRef(0);
  const lastWheelRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const animateTo = useCallback(
    (target: number) => {
      target = Math.max(0, Math.min(count - 1, target));
      if (!enabled) {
        const el = document.getElementById(sectionIds[target]);
        el?.scrollIntoView({ behavior: "smooth" });
        setCurrent(target);
        return;
      }
      if (target === currentRef.current) return;
      const track = trackRef.current;
      if (!track) return;
      animatingRef.current = true;
      const startY = -currentRef.current * window.innerHeight;
      const endY = -target * window.innerHeight;
      const startT = performance.now();
      const dur = 800;
      const step = (now: number) => {
        const t = Math.min(1, (now - startT) / dur);
        const e = easeInOutCubic(t);
        const y = startY + (endY - startY) * e;
        track.style.transform = `translate3d(0, ${y}px, 0)`;
        setProgress(((-y / window.innerHeight) / (count - 1)) * 100);
        if (t < 1) requestAnimationFrame(step);
        else {
          currentRef.current = target;
          setCurrent(target);
          animatingRef.current = false;
          deltaRef.current = 0;
        }
      };
      requestAnimationFrame(step);
    },
    [count, enabled, sectionIds],
  );

  const goTo = useCallback((i: number) => animateTo(i), [animateTo]);

  useEffect(() => {
    if (!enabled) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (animatingRef.current) return;
      const now = performance.now();
      if (now - lastWheelRef.current > 60) deltaRef.current = 0;
      lastWheelRef.current = now;
      deltaRef.current += e.deltaY;
      if (Math.abs(deltaRef.current) > 30) {
        animateTo(currentRef.current + (deltaRef.current > 0 ? 1 : -1));
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (animatingRef.current) return;
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        animateTo(currentRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        animateTo(currentRef.current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        animateTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        animateTo(count - 1);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    const onResize = () => {
      const track = trackRef.current;
      if (track) track.style.transform = `translate3d(0, ${-currentRef.current * window.innerHeight}px, 0)`;
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, animateTo, count]);

  return (
    <Ctx.Provider value={{ current, goTo, count, enabled }}>
      {enabled && (
        <div
          className="fixed top-0 left-0 h-[2px] z-[1000] transition-[width] duration-200"
          style={{ width: `${progress}%`, backgroundColor: "var(--accent)" }}
        />
      )}

      {children}

      <div className="snap-container">
        <div
          ref={trackRef}
          className="snap-track"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {sections.map((s, i) => (
            <section key={sectionIds[i]} id={sectionIds[i]} className="snap-section">
              {s}
            </section>
          ))}
        </div>
      </div>

      {enabled && (
        <nav
          aria-label="Section navigation"
          className="fixed right-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-3"
        >
          {sectionIds.map((id, i) => (
            <button
              key={id}
              aria-label={`Go to ${id}`}
              onClick={() => goTo(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? "var(--accent)" : "var(--border)",
                boxShadow: i === current ? "0 0 0 4px rgba(130,77,105,0.15)" : "none",
                transform: i === current ? "scale(1.25)" : "scale(1)",
              }}
            />
          ))}
        </nav>
      )}
    </Ctx.Provider>
  );
}
