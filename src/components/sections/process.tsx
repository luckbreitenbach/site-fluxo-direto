import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { processSteps } from "@/config/content";

export function Process() {
  return (
    <Section
      id="como-funciona"
      className="scroll-mt-24 bg-[color-mix(in_oklch,var(--background),black_18%)]"
    >
      <SectionTitle
        eyebrow="Como funciona"
        title="Um processo simples, do primeiro contato ao resultado."
      />

      <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
        <span
          aria-hidden
          className="pointer-events-none absolute top-13 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
        />
        {processSteps.map((step, index) => (
          <Reveal
            as="li"
            key={step.index}
            delay={index * 0.08}
            className="surface-card relative flex h-full flex-col gap-3 p-6"
          >
            <span className="font-mono text-sm tracking-widest text-brand-soft">
              {step.index}
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1} className="mt-12 text-center">
        <p className="text-lg font-medium text-balance sm:text-xl">
          Da ideia ao resultado, <span className="text-brand-soft">sem complicação</span>.
        </p>
      </Reveal>
    </Section>
  );
}
