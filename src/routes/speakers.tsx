import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — GRV Community" },
      { name: "description", content: "Voices shaping the next generation — meet the GRV speaker lineup." },
      { property: "og:title", content: "Speakers — GRV Community" },
      { property: "og:description", content: "Researchers, coaches, and builders sharing what actually moves the needle." },
    ],
  }),
  component: SpeakersPage,
});

const speakers = [
  { initials: "KM", name: "Karim Mohamed Nady", role: "STEM Researcher", tagline: "Turning ML into life-saving medicine", tags: ["Machine Learning", "Medical AI", "Research", "STEM"], meta: "STEM Sharqia", sessions: ["DisBloody AI Demo", "Youth in Research"] },
  { initials: "DA", name: "Dr. Ahmed Hassan", role: "Leadership Coach", tagline: "20+ years coaching MENA executives on adaptive leadership.", tags: ["Leadership", "Coaching", "Strategy"], meta: "20+ years", sessions: ["Leadership Summit 2025", "Future Leaders Retreat"] },
  { initials: "ES", name: "Eng. Sara Mostafa", role: "AI Engineer", tagline: "Builds production ML systems and mentors Egyptian AI talent.", tags: ["Machine Learning", "MLOps", "Python"], meta: "ML @ scale", sessions: ["AI for Impact", "Egypt ML Day"] },
  { initials: "MA", name: "Mohamed Ali", role: "Public Speaking Trainer", tagline: "Trains hundreds of students yearly on stage presence and persuasion.", tags: ["Public Speaking", "Storytelling"], meta: "300+ workshops", sessions: ["TEDxYouth", "GRV Speak Up"] },
  { initials: "NI", name: "Nour Ibrahim", role: "Career Development Mentor", tagline: "Helps young professionals land internships and global scholarships.", tags: ["Career Coaching", "CV", "Interview Prep"], meta: "1000+ mentees", sessions: ["Career Bootcamp", "Scholarship Lab"] },
  { initials: "MS", name: "Mahmoud Ashraf", role: "Entrepreneurship Mentor", tagline: "Founder and angel investor helping student-founders build first ventures.", tags: ["Startups", "Product", "Fundraising"], meta: "Founder · Investor", sessions: ["Founders Forge", "Pitch Night"] },
];

function SpeakersPage() {
  return (
    <div>
      <section className="container-page pt-20 pb-10 text-center">
        <div className="eyebrow mx-auto">Speakers</div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          <span className="text-gradient">Voices shaping the next generation</span>
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          A lineup of researchers, coaches, and builders sharing what actually moves the needle.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <div key={s.name} className="card-surface p-7 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="h-16 w-16 rounded-2xl grid place-items-center bg-[var(--gradient-cta)] text-white font-display font-bold text-xl shadow-[var(--shadow-glow)]">
                  {s.initials}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand">Speaker</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.name}</h3>
              <p className="text-sm text-brand">{s.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                  Experience · <span className="text-foreground">{s.meta}</span>
                </div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-3 mb-1.5">Previous Sessions</div>
                <ul className="space-y-1">
                  {s.sessions.map((x) => (
                    <li key={x} className="text-sm flex gap-2"><span className="text-brand">·</span>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
