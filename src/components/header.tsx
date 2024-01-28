'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@/components/theme-toggle';

type MenuOptionContent = { title: string; href: string; description: string };

const components: MenuOptionContent[] = [
    {
        title: 'My Life',
        href: '/about',
        description: 'A brief description about my life.',
    },
];

const articleCategories: MenuOptionContent[] = [
    {
        title: 'Laravel',
        description: 'Tips and tricks about Laravel Framework',
        href: '/articles/?category=laravel',
    },
    {
        title: 'Typescript',
        description: 'Hacks about typescript',
        href: '/articles/?category=typescript',
    },
    {
        title: 'Career',
        description: 'Some tips and reflections on careers',
        href: '/articles/?category=career',
    },
    {
        title: 'Check All',
        description: 'See all articles available',
        href: '/articles',
    },
];

export default function Header() {
    return (
        <div className="flex justify-between">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem href="/" title="My Projects">
                                    Some projects I've built during my career
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Articles</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {articleCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex gap-4 items-center">
                <Link
                    target="_blank"
                    href="https://github.com/iamgabrieloliveira"
                >
                    <GitHubLogoIcon className="size-6" />
                </Link>
                <Link target="_blank" href="https://twitter.com/oliveiratheone">
                    <TwitterLogoIcon className="size-6" />
                </Link>
                <ThemeToggle />
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
