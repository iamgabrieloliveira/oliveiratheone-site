'use client';

import { Separator } from '@/components/ui/separator';
import ProjectCard from '@/components/project-card';
import { useProjects } from '@/hooks/useProjects';
import SearchInput from '@/components/ui/search-input';
import { useEffect, useState } from 'react';
import { Project } from '@/data/projects';
import ProjectCardSkeleton from '@/components/ui/project-card-skeleton';

const filterProjects = (projects: Project[], search: string) => {
    return projects.filter(({ title, description, tags }) => {
        const matchTags = tags.some((t) => t.includes(search));
        return (
            title.includes(search) || description.includes(search) || matchTags
        );
    });
};

export default function Home() {
    const { getProjects } = useProjects();

    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState<string | undefined>();
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const projects = getProjects();
        setProjects(projects);
        setIsLoading(false);
    }, []);

    const filteredProjects = !search
        ? projects
        : filterProjects(projects, search);

    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold mb-2">Welcome!</h1>
                <h2 className="text-3xl">I'm Gabriel Oliveira</h2>
                <div className="mt-4">
                    <p className="text-lg">
                        Software developer for{' '}
                        <a
                            className="underline font-semibold"
                            target="_blank"
                            href="https://www.cfp.energy/power"
                        >
                            CFP Energy
                        </a>
                    </p>
                </div>
            </div>
            <Separator className="my-5" />
            <div>
                <h1 className="mb-5 text-3xl font-bold">Projects</h1>
                <SearchInput
                    onChange={(event) => setSearch(event.target.value)}
                    className="max-w-xl"
                    placeholder="Search by name, description or tags"
                />
                <div className="mt-4 flex flex-wrap gap-4">
                    {isLoading ? (
                        <>
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                        </>
                    ) : filteredProjects.length > 0 ? (
                        filteredProjects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))
                    ) : (
                        <h1>No entries found</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
