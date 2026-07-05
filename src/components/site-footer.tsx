import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-[var(--gradient-cta)] text-white">G</span>
            GRV<span className="text-brand">.</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Growing Responsible Visionaries — a youth-driven community building the next generation of leaders across Egypt.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-brand hover:text-brand transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/departments" className="hover:text-foreground">Departments</Link></li>
            <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
            <li><Link to="/speakers" className="hover:text-foreground">Speakers</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Get involved</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/join" className="hover:text-foreground">Join GRV</Link></li>
            <li><Link to="/courses" className="hover:text-foreground">Courses</Link></li>
            <li><a href="#" className="hover:text-foreground">Partner with us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} GRV Community. All rights reserved.</span>
          <span>The Future of Education.</span>
        </div>
      </div>
    </footer>
  );
}
