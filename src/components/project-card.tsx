'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ProjectInfoDialog from '@/components/project-info-dialog';
import type { Project } from '@/data/projects';
import LanguageBadge from '@/components/language-badge';

type ProjectCardProps = Project;

export default function ProjectCard({
    title,
    githubUrl,
    description,
    tags,
}: ProjectCardProps) {
    return (
        <ProjectInfoDialog
            title={title}
            description={description}
            tags={tags}
            githubUrl={githubUrl}
        >
            <Card className="flex flex-col justify-between w-[350px] cursor-pointer">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, idx) => {
                            return <LanguageBadge key={idx} name={tag} />;
                        })}
                    </div>
                </CardFooter>
            </Card>
        </ProjectInfoDialog>
    );
}
