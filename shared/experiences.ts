import { Experience } from "@/types/experience";

// Dados de experiência
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Estágio em Escritório de Advocacia",
    period: "Jan 2023 - Atual",
    company: "Escritório Jurídico Silva & Associados",
    description:
      "Atuação em processos cíveis e trabalhistas, elaboração de peças processuais, pesquisa jurisprudencial e atendimento ao cliente.",
    responsibilities: [
      "Elaboração de petições iniciais, contestações e recursos",
      "Pesquisa de jurisprudência e doutrina para fundamentação de peças processuais",
      "Acompanhamento de audiências e diligências",
      "Atendimento e orientação inicial a clientes",
    ],
    skills: ["Direito Civil", "Direito Trabalhista", "Atendimento ao Cliente"],
  },
  {
    id: 2,
    title: "Projeto de Extensão Universitária",
    period: "Mar 2022 - Dez 2022",
    company: "UNESC - Universidade do Extremo Sul Catarinense",
    description:
      "Participação em projeto de assistência jurídica gratuita à comunidade, oferecendo orientação legal e acompanhamento de processos.",
    responsibilities: [
      "Atendimento jurídico à população de baixa renda",
      "Elaboração de documentos jurídicos",
      "Orientação sobre direitos básicos e procedimentos legais",
      "Participação em ações comunitárias de educação jurídica",
    ],
    skills: ["Direito Civil", "Atendimento ao Público", "Orientação Jurídica"],
  },
  {
    id: 3,
    title: "Monitoria em Direito Civil",
    period: "Ago 2021 - Dez 2021",
    company: "UNESC - Universidade do Extremo Sul Catarinense",
    description:
      "Auxílio a professores e alunos em disciplinas de Direito Civil, elaboração de materiais de estudo e condução de grupos de discussão.",
    responsibilities: [
      "Assistência aos alunos com dificuldades na disciplina",
      "Preparação de materiais complementares de estudo",
      "Organização de grupos de discussão sobre temas específicos",
      "Auxílio na correção de exercícios e simulados",
    ],
    skills: ["Direito Civil", "Didática", "Pesquisa Jurídica"],
  },
];
