import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join GRV — Apply now" },
      { name: "description", content: "Apply to join GRV Community. Tell us who you are, why GRV, and where you'd like to contribute." },
      { property: "og:title", content: "Join GRV — Apply now" },
      { property: "og:description", content: "Be part of Egypt's most ambitious youth community." },
    ],
  }),
  component: JoinPage,
});

const roles = ["HR", "Public Relations", "Marketing", "Media", "Design", "IT & Tech", "Events", "Training", "Community Service"];

function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="container-page pt-20 pb-10 text-center">
        <div className="eyebrow mx-auto">Join GRV</div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          <span className="text-gradient">Apply to volunteer</span>
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          One short form. We review every application personally and get back within a week.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="max-w-2xl mx-auto card-surface p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-14 w-14 text-brand mx-auto" />
              <h2 className="mt-4 text-2xl font-bold">Application received</h2>
              <p className="mt-2 text-muted-foreground">Thanks for applying to GRV. We'll be in touch within a week.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <Field label="Full name"><input required type="text" className={inputCls} placeholder="Your full name" /></Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Email"><input required type="email" className={inputCls} placeholder="you@email.com" /></Field>
                <Field label="Phone"><input required type="tel" className={inputCls} placeholder="+20 ..." /></Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Role you're interested in">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select a department</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
                <Field label="Portfolio / website"><input type="url" className={inputCls} placeholder="https://..." /></Field>
              </div>
              <Field label="Why GRV?">
                <textarea required rows={5} className={inputCls} placeholder="Tell us what draws you to GRV and what you'd bring." />
              </Field>

              <Field label="CV (PDF, max 10MB)">
                <label className="mt-1 flex items-center justify-center gap-2 px-4 py-6 rounded-xl border border-dashed border-border cursor-pointer hover:border-brand transition">
                  <Upload className="h-4 w-4 text-brand" />
                  <span className="text-sm text-muted-foreground">
                    {fileName ?? "Click to upload PDF"}
                  </span>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
              </Field>

              <button type="submit" className="btn-primary mt-2 w-full md:w-auto md:self-start">
                Submit application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

const inputCls =
  "w-full mt-1 rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
