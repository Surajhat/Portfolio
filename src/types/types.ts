export interface Experience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    grade: string;
    period: string;
  }
  
  export interface Project {
    title: string;
    period: string;
    description: string;
    techStack: string[];
    link?: string;
  }
  
  export interface Skills {
    techStack: string[];
    programmingLanguages: string[];
    aiTechnologies: string[];
  }