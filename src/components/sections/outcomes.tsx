import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { outcomes } from "@/config/content";

export function Outcomes() {
  return (
    <Section id="resultado" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_85%),transparent_70%)]"
      />

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          Seu negócio já existe.
          <br />
          <span className="text-gradient">Agora faça o digital trabalhar por ele.</span>
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((item, index) => (
          <Reveal
            as="li"
            key={item.title}
            delay={index * 0.07}
            className="surface-card flex h-full flex-col gap-3 p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <ArrowUpRight className="size-5 text-brand" aria-hidden />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
