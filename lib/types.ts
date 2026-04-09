export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  dates: string;
  gpa?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  resumeUrl: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin: string;
  github: string;
}
