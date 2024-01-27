export type Project = {
    title: string;
    githubUrl: string;
    description: string;
    languages: string[];
};

export default [
    {
        title: 'Laracrab',
        githubUrl: 'https://github.com/iamgabrieloliveira/laracrab',
        description: 'Rust framework for building APIs inspired by laravel',
        languages: ['Rust'],
    },
    {
        title: 'Easy Enum',
        githubUrl: 'https://github.com/iamgabrieloliveira/easy-enum',
        description: 'PHP Enums generator based on database dumps',
        languages: ['Rust'],
    },
    {
        title: 'Mind Share',
        githubUrl: 'https://github.com/iamgabrieloliveira/mind-share',
        description: 'Social Platform for Developer Ideas',
        languages: ['Laravel', 'PHP', 'Vue', 'Typescript'],
    },
    {
        title: 'e-json',
        githubUrl: 'https://github.com/iamgabrieloliveira/e-json',
        description: 'Json Parser & Decoder build with typescript',
        languages: ['Typescript'],
    },
    {
        title: 'Computer Science Roadmap',
        githubUrl:
            'https://github.com/iamgabrieloliveira/computer-science-roadmap',
        description: 'My journey studying computer science concepts',
        languages: ['Typescript', 'C'],
    },
    {
        title: 'Dev Blog',
        githubUrl: 'https://github.com/iamgabrieloliveira/dev-blog',
        description: 'My personal blog for posting articles',
        languages: ['Astro'],
    },
] as Project[];
