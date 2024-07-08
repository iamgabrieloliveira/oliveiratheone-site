import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import { Project } from '@/data/projects';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type ProjectInfoDialog = Project & {
    children: React.ReactNode;
};

export default function ProjectInfoDialog({
    children,
    title,
    description,
    tags,
    githubUrl,
}: ProjectInfoDialog) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        Tags: {tags.join(', ')}
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <Link href={githubUrl} target="_blank">
                        <GitHubLogoIcon className="size-5" />
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
