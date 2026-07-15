import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — GRV Community" },
      { name: "description", content: "Learning tracks and workshops from the GRV Training department — coming soon." },
      { property: "og:title", content: "Courses — GRV Community" },
      { property: "og:description", content: "Skill-building tracks and mentorship programs." },
    ],
  }),
  component: CoursesPage,
});

const upcoming = [
  { title: "Future Skills Curriculum", desc: "Communication, critical thinking, and project ownership — for every GRV volunteer.", track: "Foundations" },
  { title: "AI for Impact", desc: "Hands-on intro to ML for students who want to solve real problems.", track: "Tech" },
  { title: "Public Speaking Lab", desc: "Stage presence, storytelling, and persuasion — with live rehearsal.", track: "Leadership" },
  { title: "Career Bootcamp", desc: "CVs, interviews, internships. From application to offer.", track: "Career" },
];

function CoursesPage() {
  return (
    <div>
      <section className="container-page pt-20 pb-10 text-center">
        <div className="eyebrow mx-auto">Courses</div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          <span className="text-gradient">Learn. Build. Lead.</span>
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Curated tracks from the GRV Training department. Our first cohort launches soon.
        </p>
      </section>

      <section className="container-page pb-14">
        <div className="grid gap-5 md:grid-cols-2">
          {upcoming.map((c) => (
            <div key={c.title} className="card-surface p-7">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-[var(--gradient-cta)] text-white shadow-[var(--shadow-glow)]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand">{c.track}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                Cohort opens soon
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
