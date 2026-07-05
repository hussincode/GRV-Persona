import { useEffect, useRef, useState, type ReactNode } from "react";
import { Sparkles, Users2, Rocket, Trophy } from "lucide-react";

const chapters = [
  {
    icon: Sparkles,
    eyebrow: "01 · Discover",
    title: "Find where you belong",
    body: "Pick from 9 departments — Design, Media, IT, HR and more. Every volunteer starts with a track that matches their strengths.",
  },
  {
    icon: Users2,
    eyebrow: "02 · Build",
    title: "Work with a real team",
    body: "Ship campaigns, run events, edit films, code platforms. Your work goes live in front of thousands, not into a drawer.",
  },
  {
    icon: Rocket,
    eyebrow: "03 · Grow",
    title: "Level up with mentors",
    body: "Workshops from industry pros, one-on-one mentorship, and a curriculum that turns curious students into confident leaders.",
  },
  {
    icon: Trophy,
    eyebrow: "04 · Lead",
    title: "Become the next chapter",
    body: "Alumni become mentors, founders, researchers. GRV isn't a season — it's the launchpad for what you do next.",
  },
];

/**
 * Pinned/sticky story section — the left column stays fixed while the
 * right column scrolls chapters past it. Highlights the chapter whose
 * card is closest to the viewport center.
 */
export function PinnedJourney() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setActive(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={containerRef} className="container-page py-24">
      <div className="mb-14 text-center">
        <div className="eyebrow mx-auto">The Journey</div>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">From volunteer to visionary</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Four chapters. One transformation.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 items-start">
        {/* Sticky left */}
        <div className="lg:sticky lg:top-24 self-start">
          <div className="card-surface p-8 md:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-70 transition-opacity duration-700"
              style={{ background: "radial-gradient(400px 300px at 20% 0%, oklch(0.55 0.19 250 / 0.4), transparent 60%)" }}
            />
            <div className="text-sm font-semibold text-brand tracking-widest">
              {String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
            </div>
            <div className="mt-6 min-h-[220px] relative">
              {chapters.map((c, i) => (
                <div
                  key={c.title}
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "translateY(0)" : "translateY(12px)",
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  <div className="h-14 w-14 rounded-2xl grid place-items-center bg-[var(--gradient-cta)] text-white shadow-[var(--shadow-glow)]">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-3xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-1 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-[var(--gradient-cta)] transition-all duration-500"
                style={{ width: `${((active + 1) / chapters.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Scrolling right */}
        <div className="flex flex-col gap-6 md:gap-10">
          {chapters.map((c, i) => (
            <Chapter
              key={c.title}
              index={i}
              isActive={i === active}
              refCb={(el) => (cardsRef.current[i] = el)}
              icon={<c.icon className="h-5 w-5" />}
              eyebrow={c.eyebrow}
              title={c.title}
              body={c.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Chapter({
  index,
  isActive,
  refCb,
  icon,
  eyebrow,
  title,
  body,
}: {
  index: number;
  isActive: boolean;
  refCb: (el: HTMLDivElement | null) => void;
  icon: ReactNode;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div
      ref={refCb}
      className="card-surface p-7 md:p-9 transition-all duration-500"
      style={{
        transform: isActive ? "translateY(0) scale(1)" : "translateY(0) scale(0.985)",
        borderColor: isActive ? "oklch(0.72 0.18 245 / 0.6)" : undefined,
        boxShadow: isActive ? "var(--shadow-glow)" : "none",
        minHeight: index === 0 ? "40vh" : "50vh",
      }}
    >
      <div className="text-xs font-semibold tracking-widest text-brand">{eyebrow}</div>
      <div className="mt-4 h-11 w-11 rounded-xl grid place-items-center bg-white/5 border border-border">
        {icon}
      </div>
      <h3 className="mt-5 text-2xl md:text-3xl font-bold">{title}</h3>
      <p className="mt-3 text-muted-foreground max-w-md">{body}</p>
    </div>
  );
}
