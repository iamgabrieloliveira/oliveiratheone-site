'use client';

import Link from 'next/link';

export default function ArticleCard() {
    return (
        <Link href="/">
            <img
                className="rounded-lg mb-2"
                width="400"
                height="360"
                src="https://dev-blog-five-gamma.vercel.app/pingu3.jpg"
            />
            <h1 className="text-2xl font-semibold">Article Title</h1>
            <p className="text-zinc-600 font-semibold">Aug 26, 2023</p>
        </Link>
    );
}
