import Link from 'next/link';
import LanguageBadge from '@/components/language-badge';

export type ArticleCard = {
    title: string;
    publishedAt: string;
    imageSrc: string;
    imageAlt: string;
    url: string;
    tags: string[];
};

export default function ArticleCard({
    title,
    imageSrc,
    imageAlt,
    publishedAt,
    url,
    tags,
}: ArticleCard) {
    return (
        <Link target="_blank" href={url} className="w-full md:w-[400px]">
            <img
                className="shadow-lg rounded-lg mb-2 object-cover w-full h-[220px] md:h-[170px]"
                src={imageSrc}
                alt={imageAlt}
            />
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-zinc-600 font-semibold mb-1">{publishedAt}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <LanguageBadge key={idx} name={tag} />
                ))}
            </div>
        </Link>
    );
}
