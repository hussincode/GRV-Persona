import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Megaphone, TrendingUp, Camera, Palette, Code2, Calendar, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — GRV Community" },
      { name: "description", content: "Nine teams. One mission. Explore every GRV department and find where you belong." },
      { property: "og:title", content: "Departments — GRV Community" },
      { property: "og:description", content: "Every department owns a piece of GRV's impact." },
    ],
  }),
  component: DepartmentsPage,
});

const departments = [
  { icon: Users, badge: "HR", name: "Human Resources", desc: "Building the people behind GRV — recruitment, culture, and member experience.", work: ["Recruitment Cycle 2026", "Member Wellbeing Program"] },
  { icon: Megaphone, badge: "PR", name: "Public Relations", desc: "Crafting GRV's voice across partners, media, and the community.", work: ["Media Partnerships", "Press Kit 2026"] },
  { icon: TrendingUp, badge: "MK", name: "Marketing", desc: "Growth, storytelling, and turning impact into reach.", work: ["Campaign: Future Leaders", "Social Growth Q1"] },
  { icon: Camera, badge: "MD", name: "Media", desc: "Photography, videography and on-the-ground event coverage.", work: ["Event Coverage Library", "Documentary Series"] },
  { icon: Palette, badge: "DS", name: "Design", desc: "Visual identity, branding, and the look of every GRV touchpoint.", work: ["Brand Refresh 2026", "Event Visuals"] },
  { icon: Code2, badge: "IT", name: "IT & Tech", desc: "Engineering the platforms and digital tools powering GRV.", work: ["GRV Platform v2", "Internal Automation"] },
  { icon: Calendar, badge: "EV", name: "Events", desc: "Planning, logistics, and execution of every GRV gathering.", work: ["Leadership Summit", "Community Impact Day"] },
  { icon: GraduationCap, badge: "TR", name: "Training", desc: "Workshops, mentorship, and skill-building tracks for volunteers.", work: ["Future Skills Curriculum", "Mentor Program"] },
  { icon: HeartHandshake, badge: "CS", name: "Community Service", desc: "On-ground impact — outreach, fieldwork, and partnerships with NGOs.", work: ["Schools Outreach", "NGO Collab Network"] },
];

function DepartmentsPage() {
  return (
    <div>
      <section className="container-page pt-20 pb-10 text-center">
        <div className="eyebrow mx-auto">Departments</div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          <span className="text-gradient">Nine teams. One mission.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Every department owns a piece of GRV's impact. Find where you belong.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <div key={d.name} className="card-surface p-7 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-[var(--gradient-cta)] text-white shadow-[var(--shadow-glow)]">
                  <d.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold tracking-widest text-brand border border-border rounded-full px-2.5 py-1">{d.badge}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{d.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Now Working On</div>
                <ul className="space-y-1.5">
                  {d.work.map((w) => (
                    <li key={w} className="text-sm flex gap-2">
                      <span className="text-brand">·</span>{w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Link to="/team" className="btn-ghost text-sm">View team <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/join" className="btn-primary text-sm">Join</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
