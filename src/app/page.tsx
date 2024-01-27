import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import ProjectCard from '@/components/ProjectCard';
import { useProjects } from '@/hooks/useProjects';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default async function Home() {
    const { getProjects } = useProjects();

    const projects = getProjects();

    return (
        <div className="pt-5 max-w-3xl mx-auto">
            <div className="flex justify-between">
                <Header />
                <div className="flex gap-4 items-center">
                    <Link
                        target="_blank"
                        href="https://github.com/iamgabrieloliveira"
                    >
                        <GitHubLogoIcon className="size-6" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://twitter.com/oliveiratheone"
                    >
                        <TwitterLogoIcon className="size-6" />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>

            <div className="mt-20">
                <h1 className="text-5xl font-bold mb-2">Hello World</h1>
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
                <h1 className="text-3xl font-bold">Projects</h1>

                <div className="mt-4 flex flex-wrap gap-4">
                    {projects.map((project, idx) => {
                        return <ProjectCard key={idx} {...project} />;
                    })}
                </div>
            </div>
        </div>
    );
}
