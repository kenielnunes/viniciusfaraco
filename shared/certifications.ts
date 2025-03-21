import { Certification } from "@/types/experience";

// Dados de certificações
export const certifications: Certification[] = [
  {
    id: 1,
    title: "Curso de Prática Processual Civil",
    institution: "Escola Superior de Advocacia - ESA",
    date: "Abril 2023",
    duration: "40 horas",
    description:
      "Aprendizado prático sobre elaboração de peças processuais, prazos e procedimentos no processo civil brasileiro.",
    skills: ["Direito Processual Civil", "Redação Jurídica", "Prática Forense"],
    status: "Concluído",
    certificate: true,
  },
  {
    id: 2,
    title: "Especialização em Direito Digital",
    institution: "Instituto Brasileiro de Direito Digital",
    date: "Junho 2023",
    duration: "60 horas",
    description:
      "Estudo abrangente sobre LGPD, crimes cibernéticos, propriedade intelectual e contratos digitais.",
    skills: ["Direito Digital", "LGPD", "Crimes Cibernéticos"],
    status: "Concluído",
    certificate: true,
  },
  {
    id: 3,
    title: "Fundamentos de Direito Administrativo",
    institution: "Escola Nacional de Administração Pública - ENAP",
    date: "Agosto 2022",
    duration: "45 horas",
    description:
      "Estudo dos princípios do direito administrativo, procedimentos administrativos, licitações e contratos públicos.",
    skills: ["Direito Administrativo", "Licitações", "Contratos Públicos"],
    status: "Concluído",
    certificate: true,
  },
  {
    id: 4,
    title: "Técnicas de Mediação e Arbitragem",
    institution: "Conselho Nacional de Justiça - CNJ",
    date: "Outubro 2022",
    duration: "30 horas",
    description:
      "Capacitação em técnicas de mediação, conciliação e arbitragem para resolução alternativa de conflitos.",
    skills: ["Mediação", "Arbitragem", "Resolução de Conflitos"],
    status: "Concluído",
    certificate: true,
  },
];
