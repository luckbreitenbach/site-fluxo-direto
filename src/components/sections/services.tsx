import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/config/content";

export function Services() {
  return (
    <Section id="servicos" className="scroll-mt-24">
      <SectionTitle
        eyebrow="Serviços"
        title="Tudo que sua empresa precisa para avançar no digital."
        description="Cada solução é definida a partir do seu cenário — do primeiro site à automação completa do atendimento."
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} delay={index * 0.05} />
        ))}
      </ul>
    </Section>
  );
}
