export interface Experience {
    name: string,
    position: string,
    logoPath: string,
    url: string,
    startDate: string,
    endDate: string,
    descriptions: string[]
}

export interface Project {
    imagePath: string,
    title: string,
    github?: string,
    devpost?: string,
    website?: string,
    heading: string,
    descriptions: string[]
}