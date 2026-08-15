export interface TechCategory {
  title: string;
  items: string[];
}

export interface Project {
  slug: string;

  title: string;

  subtitle: string;

  year: string;

  status: string;

  description: string;

  overviewTitle: string;

  role: string;

  duration: string;

  team: string;

  platform: string;

  client: string;

  image: string;

  gallery: string[];

  tech: string[];

  techStack: TechCategory[];

  github: string;

  live: string;

  architecture: string[];

  lessons: string[];

  featured: boolean;
}