import {
  AppWindow,
  Bot,
  Building2,
  Clock,
  Cog,
  Globe,
  LayoutTemplate,
  type LucideIcon,
  MapPin,
  MonitorSmartphone,
  MousePointerClick,
  Smartphone,
  Store,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  Users,
  Workflow,
} from "lucide-react";

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "sites",
    index: "01",
    title: "Sites Profissionais",
    description:
      "Sites modernos, rápidos e responsivos que apresentam sua empresa com credibilidade e transformam visitantes em oportunidades.",
    cta: "Criar meu site",
    icon: MonitorSmartphone,
  },
  {
    id: "landing-pages",
    index: "02",
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão para campanhas, produtos, serviços e captação de leads.",
    cta: "Criar minha landing page",
    icon: LayoutTemplate,
  },
  {
    id: "sistemas",
    index: "03",
    title: "Sistemas Personalizados",
    description:
      "Sistemas internos desenvolvidos para organizar, simplificar e digitalizar processos da empresa.",
    cta: "Quero um sistema",
    icon: AppWindow,
  },
  {
    id: "aplicativos",
    index: "04",
    title: "Aplicativos",
    description:
      "Aplicativos e ferramentas digitais desenvolvidos de acordo com a necessidade do negócio.",
    cta: "Criar uma solução",
    icon: Smartphone,
  },
  {
    id: "automacao",
    index: "05",
    title: "Automação",
    description:
      "Automatização de tarefas e processos para reduzir trabalho manual e aumentar produtividade.",
    cta: "Automatizar meu negócio",
    icon: Cog,
  },
  {
    id: "chatbots",
    index: "06",
    title: "Chatbots",
    description:
      "Atendimento automatizado para responder clientes, captar leads e encaminhar oportunidades.",
    cta: "Automatizar atendimento",
    icon: Bot,
  },
  {
    id: "google",
    index: "07",
    title: "Google",
    description:
      "Otimização do Perfil da Empresa no Google para melhorar presença local, visibilidade e geração de contatos.",
    cta: "Melhorar minha presença",
    icon: Globe,
  },
];

export const problems = [
  {
    title: "Pouca presença digital",
    description:
      "Seu cliente procura sua empresa no Google e não encontra uma presença profissional.",
    icon: MapPin,
  },
  {
    title: "Site que não gera clientes",
    description:
      "Ter um site não basta. Ele precisa apresentar seu negócio e conduzir o visitante à ação.",
    icon: MousePointerClick,
  },
  {
    title: "Processos manuais",
    description:
      "Sua equipe perde tempo realizando tarefas que poderiam ser automatizadas.",
    icon: Workflow,
  },
  {
    title: "Atendimento lento",
    description:
      "Clientes querem respostas rápidas. A automação pode manter seu negócio disponível 24 horas.",
    icon: Clock,
  },
];

export const differentials = [
  {
    title: "Estratégia antes da tecnologia",
    description: "Entendemos o problema antes de decidir qual ferramenta utilizar.",
  },
  {
    title: "Soluções sob medida",
    description: "Nada de empurrar pacotes desnecessários.",
  },
  {
    title: "Tecnologia acessível",
    description:
      "Soluções profissionais pensadas também para pequenas e médias empresas.",
  },
  {
    title: "Foco em resultado",
    description:
      "O objetivo não é simplesmente colocar algo no ar. É gerar impacto para o negócio.",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Conversamos",
    description: "Entendemos seu negócio, seus objetivos e seus principais desafios.",
  },
  {
    index: "02",
    title: "Planejamos",
    description: "Definimos a estratégia e a solução mais adequada.",
  },
  {
    index: "03",
    title: "Desenvolvemos",
    description: "Criamos, configuramos e implementamos a solução.",
  },
  {
    index: "04",
    title: "Colocamos em movimento",
    description: "Publicamos, ajustamos e acompanhamos a evolução.",
  },
];

export const audiences = [
  { label: "Clínicas e consultórios", icon: Stethoscope },
  { label: "Escritórios", icon: Building2 },
  { label: "Restaurantes", icon: UtensilsCrossed },
  { label: "Imobiliárias", icon: MapPin },
  { label: "Prestadores de serviços", icon: Truck },
  { label: "Comércio local", icon: Store },
  { label: "Pequenas empresas", icon: Users },
  { label: "Profissionais autônomos", icon: Smartphone },
];

export type Project = {
  name: string;
  segment: string;
  service: string;
  description: string;
};

/** Demonstrações conceituais — não representam clientes reais. */
export const projects: Project[] = [
  {
    name: "Clínica Vida",
    segment: "Saúde",
    service: "Site institucional + agendamento",
    description:
      "Conceito de site com apresentação de especialidades e agendamento direto pelo WhatsApp.",
  },
  {
    name: "Studio Arq",
    segment: "Arquitetura",
    service: "Landing page de captação",
    description:
      "Conceito de página de campanha com portfólio visual e formulário de orçamento.",
  },
  {
    name: "Rota Express",
    segment: "Logística",
    service: "Sistema interno + automação",
    description:
      "Conceito de painel para acompanhar entregas e automatizar avisos ao cliente.",
  },
];

export const outcomes = [
  {
    title: "Mais presença",
    description: "Sua empresa encontrada e reconhecida quando o cliente procura.",
  },
  {
    title: "Mais eficiência",
    description: "Menos tarefas manuais, mais tempo para o que gera receita.",
  },
  {
    title: "Mais oportunidades",
    description: "Canais digitais que conduzem o visitante até o contato.",
  },
  {
    title: "Mais crescimento",
    description: "Estrutura digital pronta para acompanhar a evolução do negócio.",
  },
];

export const faqs = [
  {
    question: "Quanto custa criar um site?",
    answer:
      "O investimento depende da estrutura e dos recursos necessários. Após entender sua necessidade, apresentamos uma proposta personalizada.",
  },
  {
    question: "Vocês atendem pequenas empresas?",
    answer:
      "Sim. A Fluxo Direto foi pensada justamente para tornar soluções digitais profissionais mais acessíveis para pequenas e médias empresas.",
  },
  {
    question: "Vocês fazem manutenção?",
    answer: "Sim. Podemos oferecer manutenção e suporte após a entrega.",
  },
  {
    question: "Vocês trabalham apenas com sites?",
    answer:
      "Não. Trabalhamos também com automação, sistemas, aplicativos, chatbots, landing pages e presença digital.",
  },
  {
    question: "Preciso saber exatamente o que minha empresa precisa?",
    answer:
      "Não. Podemos analisar seu cenário e indicar a solução mais adequada.",
  },
  {
    question: "Quanto tempo leva para desenvolver?",
    answer:
      "O prazo depende da complexidade do projeto e será definido antes do início do desenvolvimento.",
  },
];

export const serviceOptions = [
  "Site",
  "Landing Page",
  "Sistema",
  "Aplicativo",
  "Automação",
  "Chatbot",
  "Google",
  "Outro",
] as const;
