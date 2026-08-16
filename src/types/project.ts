export interface Project {
    id: string;
    title: string;
    tagline: string;
    period: string;
    description: string;
    highlights: string[];
    techStack: string[];
    imageUrl: string;
    imageAlt?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}
