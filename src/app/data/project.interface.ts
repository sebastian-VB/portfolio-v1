
export interface Project{

    image: string;
    name_project: string;
    technologies: Technology[];
    urlRepository: string;
}

export interface Technology{
    name: string;
}