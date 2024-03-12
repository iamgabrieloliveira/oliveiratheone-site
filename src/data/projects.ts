export type Project = {
    title: string;
    githubUrl: string;
    description: string;
    languages: string[];
};

export default [
    {
        title: 'Rinha Backend Q1/2024',
        githubUrl: 'https://github.com/iamgabrieloliveira/rinha-backend-q1',
        description: 'My implementation for Rinha de Backend Q1/2024',
        languages: ['Rust'],
    },
    {
        title: 'Shunting Yard + Reverse Polish Notation',
        githubUrl: 'https://github.com/iamgabrieloliveira/Shunting-Yard-Reverse-Polish-Notation',
        description: 'Implementation of Shunting Yard and RPN algorithms to evaluate math expression without using \'eval\' like',
        languages: ['Typescript'],
    },
    {
        title: '99 Problems Ocaml',
        githubUrl: 'https://github.com/iamgabrieloliveira/99-problems-ocaml',
        description: 'Solving 99 Problems in Ocaml to practice the language',
        languages: ['Ocaml'],
    },
    {
        title: 'Easy Enum - (wip)',
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
] as Project[];
