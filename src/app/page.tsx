import { Audiences } from "@/components/sections/audiences";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Differentials } from "@/components/sections/differentials";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Problems } from "@/components/sections/problems";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Differentials />
      <Process />
      <Audiences />
      <Projects />
      <Outcomes />
      <Cta />
      <Faq />
      <Contact />
    </>
  );
}
