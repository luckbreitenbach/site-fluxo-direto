import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/config/content";

export function Projects() {
  return (
    <Section
      id="projetos"
      className="bg-[color-mix(in_oklch,var(--background),black_18%)]"
    >
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos que colocam negócios em movimento."
        description="Demonstrações conceituais criadas para ilustrar o tipo de solução que desenvolvemos."
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} delay={index * 0.06} />
        ))}
      </ul>

      <Reveal delay={0.1} className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          Os projetos acima são demonstrações conceituais e não representam clientes reais.
        </p>
      </Reveal>
    </Section>
  );
}
