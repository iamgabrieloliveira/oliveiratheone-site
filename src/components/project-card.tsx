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

export default function ProjectCard({
    title,
    githubUrl,
    description,
    languages,
}: Project) {
    return (
        <ProjectInfoDialog
            title={title}
            description={description}
            languages={languages}
            githubUrl={githubUrl}
        >
            <Card className="w-[350px] cursor-pointer">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((language, idx) => {
                            return <LanguageBadge key={idx} name={language} />;
                        })}
                    </div>
                </CardFooter>
            </Card>
        </ProjectInfoDialog>
    );
}
