import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { faqs } from "@/config/content";

export function Faq() {
  return (
    <Section
      id="faq"
      className="scroll-mt-24 bg-[color-mix(in_oklch,var(--background),black_18%)]"
    >
      <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />

      <Reveal className="mx-auto mt-12 w-full max-w-3xl">
        <Accordion className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
