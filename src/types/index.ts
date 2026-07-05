export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'twitter';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationEntry {
  period: string;
  school: string;
  level: string;
  achievement?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
}

export interface GpaRecord {
  exam: string;
  gpa: string;
}
