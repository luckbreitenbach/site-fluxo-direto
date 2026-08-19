import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/config/content";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="group surface-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
    >
      <div
        aria-hidden
        className="relative flex h-44 items-center justify-center border-b border-white/10 bg-[linear-gradient(135deg,color-mix(in_oklch,var(--brand),transparent_86%),transparent_60%)]"
      >
        <div className="flex w-3/4 flex-col gap-2 rounded-xl border border-white/10 bg-background/60 p-4 shadow-lg">
          <span className="h-2 w-16 rounded-full bg-brand/70" />
          <span className="h-2 w-full rounded-full bg-white/10" />
          <span className="h-2 w-5/6 rounded-full bg-white/10" />
          <span className="mt-2 h-6 w-24 rounded-md bg-brand/30" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-white/10 px-2.5 py-1">
            {project.segment}
          </span>
          <span className="rounded-full border border-white/10 px-2.5 py-1">
            {project.service}
          </span>
        </div>
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <a
          href="#contato"
          className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-brand-soft transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-brand/50 focus-visible:outline-none"
        >
          Ver projeto
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </a>
      </div>
    </Reveal>
  );
}
