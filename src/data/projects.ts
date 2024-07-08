export type Project = {
    title: string;
    githubUrl: string;
    description: string;
    tags: string[];
};

export default [
    {
        title: 'Lightning Path',
        githubUrl: 'https://github.com/iamgabrieloliveira/Lightning-Path',
        description: 'Route Recognizer library for lightning-fast matching',
        tags: ['Rust', 'Library'],
    },
    {
        title: 'Dora',
        githubUrl: 'https://github.com/iamgabrieloliveira/Dora',
        description: 'A Lightweight Web Framework for Rust',
        tags: ['Rust', 'Library'],
    },
    {
        title: 'Lox',
        githubUrl: 'https://github.com/iamgabrieloliveira/lox',
        description: 'Lox programming language interpreter implemented in Rust',
        tags: ['Rust', 'Interpreter'],
    },
    {
        title: 'Algebraic Data Types',
        githubUrl: 'https://gist.github.com/iamgabrieloliveira/dbbe088072f5e3caacb536c1bb22e3f5',
        description: 'Brief explanation of Algebraic Data Types with Typescript examples',
        tags: ['Gist', 'Type Theory', 'Typescript'],
    },
    {
        title: 'Rinha Backend Q1/2024',
        githubUrl: 'https://github.com/iamgabrieloliveira/rinha-backend-q1',
        description: 'My implementation for Rinha de Backend Q1/2024',
        tags: ['Rust', 'Nginx', 'Docker', 'Postgres'],
    },
    {
        title: 'Calculator without eval',
        githubUrl:
            'https://github.com/iamgabrieloliveira/Shunting-Yard-Reverse-Polish-Notation',
        description:
            "Implementation of Shunting Yard and RPN algorithms to evaluate math expression without using 'eval' like",
        tags: ['Typescript', 'Algorithms'],
    },
    {
        title: '99 Problems Ocaml',
        githubUrl: 'https://github.com/iamgabrieloliveira/99-problems-ocaml',
        description: 'Solving 99 Problems in Ocaml to practice the language',
        tags: ['Ocaml'],
    },
    {
        title: 'Mind Share',
        githubUrl: 'https://github.com/iamgabrieloliveira/mind-share',
        description: 'Social Platform for Developer Ideas',
        tags: ['Laravel', 'PHP', 'Vue', 'Typescript'],
    },
    {
        title: 'e-json',
        githubUrl: 'https://github.com/iamgabrieloliveira/e-json',
        description: 'Json Parser & Decoder build with typescript',
        tags: ['Typescript', 'Parser'],
    },
] as Project[];
