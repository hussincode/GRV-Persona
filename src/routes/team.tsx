import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — GRV Community" },
      { name: "description", content: "Meet the people behind the vision — the leads driving each GRV department." },
      { property: "og:title", content: "Team — GRV Community" },
      { property: "og:description", content: "People behind the vision." },
    ],
  }),
  component: TeamPage,
});

type Member = {
  initials: string;
  name: string;
  title: string;
  dept: string;
  bio: string;
  tags: string[];
};

const members: Member[] = [
  { initials: "KM", name: "Karim Mohamed Nady", title: "Founder & Lead Researcher", dept: "IT & Tech", bio: "STEM Sharqia student building AI-powered medical tools to detect strokes, leukemia, and heart disease early.", tags: ["Machine Learning", "Python", "Research"] },
  { initials: "YS", name: "Youssef Salama", title: "HR Lead", dept: "HR", bio: "Leads people operations and volunteer onboarding.", tags: ["People Ops", "Recruitment", "Coaching"] },
  { initials: "SM", name: "Sara Mohamed", title: "PR Lead", dept: "PR", bio: "Owns external communications and partner relations.", tags: ["Communications", "Partnerships", "Copywriting"] },
  { initials: "AH", name: "Ahmed Hassan", title: "Marketing Lead", dept: "Marketing", bio: "Drives growth campaigns and brand reach.", tags: ["Growth", "Analytics", "Content"] },
  { initials: "MA", name: "Mariam Adel", title: "Media Lead", dept: "Media", bio: "Captures GRV's story through photo and video.", tags: ["Photography", "Video", "Storytelling"] },
  { initials: "OK", name: "Omar Khaled", title: "Design Lead", dept: "Design", bio: "Shapes GRV's visual identity end-to-end.", tags: ["Branding", "UI/UX", "Figma"] },
  { initials: "MO", name: "Mohamed Ali", title: "Events Lead", dept: "Events", bio: "Plans and executes every GRV event.", tags: ["Project Mgmt", "Logistics", "Public Speaking"] },
  { initials: "NI", name: "Nour Ibrahim", title: "Training Lead", dept: "Training", bio: "Designs learning tracks and mentorship programs.", tags: ["Curriculum", "Mentorship", "Facilitation"] },
  { initials: "MS", name: "Mahmoud Ashraf", title: "Community Service Lead", dept: "CS", bio: "Leads on-ground impact and NGO partnerships.", tags: ["Outreach", "Partnerships", "Field Ops"] },
];

const filters = ["All", "HR", "PR", "Marketing", "Media", "Design", "IT & Tech", "Events", "Training", "CS"];

function TeamPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? members : members.filter((m) => m.dept === active);

  return (
    <div>
      <section className="container-page pt-20 pb-10 text-center">
        <div className="eyebrow mx-auto">The Team</div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          <span className="text-gradient">People behind the vision</span>
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">The leads driving GRV forward — one department at a time.</p>
      </section>

      <section className="container-page pb-24">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={
                "px-4 py-2 rounded-full text-sm border transition " +
                (active === f
                  ? "bg-[var(--gradient-cta)] text-white border-transparent shadow-[var(--shadow-glow)]"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-brand")
              }
            >
              {f} {f === "All" && <span className="opacity-70">({members.length})</span>}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <div key={m.name} className="card-surface p-6">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl grid place-items-center bg-[var(--gradient-cta)] text-white font-display font-bold shadow-[var(--shadow-glow)] shrink-0">
                  {m.initials}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand">Lead</span>
                  <h3 className="text-lg font-semibold mt-0.5">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.dept}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
