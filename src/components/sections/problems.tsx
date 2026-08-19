import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { problems } from "@/config/content";

export function Problems() {
  return (
    <Section id="problemas">
      <SectionTitle
        eyebrow="O cenário hoje"
        title="Seu negócio pode estar perdendo oportunidades todos os dias."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => (
          <Reveal
            as="li"
            key={problem.title}
            delay={index * 0.06}
            className="surface-card group flex h-full flex-col gap-4 p-6 transition-colors hover:border-brand/30"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand-soft">
              <problem.icon className="size-5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold">{problem.title}</h3>
            <p className="text-sm text-muted-foreground">{problem.description}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1} className="mt-12 text-center">
        <p className="text-lg font-medium text-balance sm:text-xl">
          A Fluxo Direto transforma esses problemas em{" "}
          <span className="text-brand-soft">soluções digitais</span>.
        </p>
      </Reveal>
    </Section>
  );
}
