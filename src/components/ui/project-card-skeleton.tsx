'use client';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectCardSkeleton() {
    return (
        <Card className="w-[350px] cursor-pointer">
            <CardHeader>
                <Skeleton className="w-40 h-4" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-60 h-4" />
            </CardContent>
            <CardFooter>
                <div className="flex gap-2">
                    <Skeleton className="w-8 h-4" />
                    <Skeleton className="w-8 h-4" />
                    <Skeleton className="w-8 h-4" />
                </div>
            </CardFooter>
        </Card>
    );
}
