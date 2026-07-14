import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Users, Megaphone, TrendingUp, Camera, Palette, Code2, Calendar, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PinnedJourney } from "@/components/pinned-journey";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRV Community — Growing Responsible Visionaries" },
      { name: "description", content: "Empowering youth through leadership, volunteering, innovation, and personal growth. Join 87+ volunteers shaping Egypt's GRV is an independent youth initiative dedicated to supporting and empowering young people through free educational and training opportunities. Our mission is to help youth develop their skills and build successful professional and personal futures.." },
      { property: "og:title", content: "GRV Community — Growing Responsible Visionaries" },
      { property: "og:description", content: "Empowering youth through leadership, volunteering, innovation, and personal growth." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "87", label: "Active Volunteers" },
  { value: "16", label: "Completed Events" },
  { value: "2,400+", label: "Volunteer Hours" },
  { value: "9", label: "Departments" },
  { value: "5", label: "Community Partners" },
];

const departments = [
  { icon: Users, name: "Human Resources", desc: "Building the people behind GRV — recruitment, culture, and member experience." },
  { icon: Megaphone, name: "Public Relations", desc: "Crafting GRV's voice across partners, media, and the community." },
  { icon: TrendingUp, name: "Marketing", desc: "Growth, storytelling, and turning impact into reach." },
  { icon: Camera, name: "Media", desc: "Photography, videography and on-the-ground event coverage." },
  { icon: Palette, name: "Design", desc: "Visual identity, branding, and the look of every GRV touchpoint." },
  { icon: Code2, name: "IT & Tech", desc: "Engineering the platforms and digital tools powering GRV." },
  { icon: Calendar, name: "Events", desc: "Planning, logistics, and execution of every GRV gathering." },
  { icon: GraduationCap, name: "Training", desc: "Workshops, mentorship, and skill-building tracks for volunteers." },
  { icon: HeartHandshake, name: "Community Service", desc: "On-ground impact — outreach, fieldwork, and partnerships with NGOs." },
];

const speakers = [
  { initials: "KM", name: "Karim Mohamed Nady", role: "STEM Researcher", tag: "ML • Medical AI" },
  { initials: "DA", name: "Dr. Ahmed Hassan", role: "Leadership Coach", tag: "20+ years MENA" },
  { initials: "ES", name: "Eng. Sara Mostafa", role: "AI Engineer", tag: "MLOps • Python" },
  { initials: "MA", name: "Mohamed Ali", role: "Public Speaking Trainer", tag: "300+ workshops" },
];

const stories = [
  { title: "From volunteer to AI researcher", body: "Founded an AI medical diagnostic project that screens for stroke, leukemia and heart disease from CBC results.", who: "Karim Mohamed Nady", tag: "Leadership Growth" },
  { title: "National competition winner", body: "Won 1st place at the national STEM communications challenge.", who: "Sara Mohamed", tag: "Competition Winners" },
  { title: "Internship at top firm", body: "Landed a growth-marketing internship at a regional tech leader.", who: "Ahmed Hassan", tag: "Internship Success" },
];

const partners = [
  { name: "STEM Sharqia", type: "University" },
  { name: "Tech for Egypt", type: "NGO" },
  { name: "YouthHub", type: "Student Activity" },
  { name: "AI Egypt Community", type: "Tech Community" },
  { name: "Innovate MENA", type: "Sponsor" },
];

/** Track vertical scroll for subtle hero parallax. */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function HomePage() {
  const scrollY = useScrollY();
  // Subtle parallax on the hero backdrop layers
  const bgY = Math.min(scrollY * 0.35, 200);
  const glowY = Math.min(scrollY * 0.15, 120);

  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Parallax glow layers */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            transform: `translate3d(0, ${bgY}px, 0)`,
            background:
              "radial-gradient(1000px 600px at 50% -10%, oklch(0.55 0.19 250 / 0.35), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            transform: `translate3d(0, ${glowY}px, 0)`,
            background:
              "radial-gradient(700px 400px at 80% 20%, oklch(0.4 0.2 265 / 0.35), transparent 65%)",
          }}
        />

        <div className="container-page pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <Reveal>
            <div className="eyebrow mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              GRV Community 2026
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">GRV </span>
              <span className="text-gradient">Community</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering Youth Through Leadership, Volunteering, Innovation, and Personal Growth.
            </p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
              A youth-driven community dedicated to creating future leaders through volunteering, education, teamwork, and impactful projects.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/join" className="btn-primary">Join GRV</Link>
              <Link to="/departments" className="btn-ghost">Explore Opportunities <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/team" className="btn-ghost">Meet The Team</Link>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} y={20}>
                <div className="card-surface p-5 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand font-display">{s.value}</div>
                  <div className="mt-1 text-[11px] tracking-widest uppercase text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="container-page py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow">Departments</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">9 teams, one mission</h2>
            </div>
            <Link to="/departments" className="text-brand text-sm font-semibold hover:underline whitespace-nowrap">
              View all →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 100} y={18}>
              <div className="card-surface p-6 group h-full">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl grid place-items-center bg-[var(--gradient-cta)] text-white shadow-[var(--shadow-glow)] shrink-0">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{d.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY — pinned/sticky */}
      <PinnedJourney />

      {/* SPEAKERS */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mb-10">
            <div className="eyebrow">Speakers</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Voices shaping the next generation</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">A lineup of researchers, coaches, and builders sharing what actually moves the needle.</p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} y={18}>
              <div className="card-surface p-6 h-full">
                <div className="h-16 w-16 rounded-2xl grid place-items-center bg-[var(--gradient-cta)] text-white font-display font-bold text-xl shadow-[var(--shadow-glow)]">
                  {s.initials}
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-brand">Speaker</div>
                <h3 className="mt-2 text-lg font-semibold">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.role}</p>
                <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">{s.tag}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8">
            <Link to="/speakers" className="btn-ghost">All speakers <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>

      {/* STORIES */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mb-10">
            <div className="eyebrow">Success Stories</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Real volunteers. Real impact.</h2>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} y={18}>
              <div className="card-surface p-6 h-full">
                <Sparkles className="h-5 w-5 text-brand" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-3 flex items-center justify-between">
                  <span className="font-medium text-foreground">{s.who}</span>
                  <span>{s.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-page py-20">
        <Reveal>
          <div className="text-center mb-10">
            <div className="eyebrow mx-auto">Partners</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Trusted by communities & sponsors</h2>
          </div>
        </Reveal>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} y={16}>
              <div className="card-surface p-6 text-center">
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.type}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <Reveal>
          <div className="card-surface p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "radial-gradient(500px 300px at 50% 0%, oklch(0.55 0.19 250 / 0.35), transparent 60%)" }} />
            <h2 className="text-3xl md:text-5xl font-bold">Ready to build the future with us?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join 87+ volunteers shaping Egypt's most ambitious youth community.</p>
            <div className="mt-8">
              <Link to="/join" className="btn-primary">Become a Volunteer <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
