import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import { Project } from '@/data/projects';

type ProjectInfoDialog = Project & {
    children: React.ReactNode;
};

export default function ProjectInfoDialog({
    children,
    title,
    description,
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
                    <div className="grid flex-1 gap-2"></div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild></DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
