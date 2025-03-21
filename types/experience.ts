export interface Experience {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface Certification {
  id: number;
  title: string;
  institution: string;
  date: string;
  duration: string;
  description: string;
  skills: string[];
  status: string;
  certificate: boolean;
}

export interface AcademicProject {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: string;
}
