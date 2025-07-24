export interface ProjectChallenge {
    title: string;
    description: string;
    solution: string;
}

export interface ProjectDetails {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    period: string;
    role: string;
    company: string;
    position: string;
    detailRole: string[];
    techStack: string[];
    challenges: ProjectChallenge[];
    features: string[];
    demoUrl?: string;
    githubUrl?: string;
}
