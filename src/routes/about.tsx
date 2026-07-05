import { createFileRoute } from "@tanstack/react-router";
import { Compass, Users, Lightbulb, ShieldCheck, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GRV Community" },
      { name: "description", content: "GRV is a youth-driven community dedicated to creating future leaders through volunteering, education, teamwork, and impact." },
      { property: "og:title", content: "About — GRV Community" },
      { property: "og:description", content: "Growing Responsible Visionaries — our mission, vision, and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, name: "Leadership", desc: "Building leaders who serve, inspire, and act with vision." },
  { icon: Users, name: "Teamwork", desc: "We move further together — collaboration over competition." },
  { icon: Lightbulb, name: "Innovation", desc: "Curiosity, experimentation, and the courage to try new ideas." },
  { icon: ShieldCheck, name: "Integrity", desc: "Honesty and accountability in everything we ship." },
  { icon: HeartHandshake, name: "Community Service", desc: "Real impact in real places, for real people." },
];

function AboutPage() {
  return (
    <div>
      <section className="container-page pt-20 pb-14 text-center">
        <div className="eyebrow mx-auto">About GRV</div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          <span className="text-gradient">Growing Responsible Visionaries</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A youth-driven community dedicated to creating future leaders through volunteering, education, teamwork, and impactful projects.
        </p>
      </section>

      <section className="container-page grid gap-5 md:grid-cols-2 pb-20">
        <div className="card-surface p-8">
          <div className="eyebrow">Our Mission</div>
          <p className="mt-4 text-lg leading-relaxed">
            Empower youth through volunteering, leadership, practical experience, and social impact — turning energy into real outcomes for communities across Egypt.
          </p>
        </div>
        <div className="card-surface p-8">
          <div className="eyebrow">Our Vision</div>
          <p className="mt-4 text-lg leading-relaxed">
            Become one of Egypt's most influential youth volunteer communities — known for the leaders we build and the impact we leave.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="text-center mb-10">
          <div className="eyebrow mx-auto">Our Values</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">What we stand for</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.name} className="card-surface p-6">
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-[var(--gradient-cta)] text-white shadow-[var(--shadow-glow)]">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{v.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
