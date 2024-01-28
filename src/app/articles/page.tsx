'use client';

import ArticleCard, {
    type ArticleCard as Article,
} from '@/components/article-card';
import articles from '@/data/articles';
import SearchInput from '@/components/ui/search-input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { removeDuplicates } from '@/lib/utils';
import { useState } from 'react';

const filterArticles = (articles: Article[], search?: string, tag?: string) => {
    return articles.filter((article) => {
        if (search === undefined) return true;

        const matchTitle = article.title
            .toLowerCase()
            .includes(search.toLowerCase());

        if (tag === undefined) return matchTitle;

        return article.tags.includes(tag) || matchTitle;
    });
};

const tags = articles.reduce(
    (acc, { tags }) => removeDuplicates([...acc, ...tags]),
    [] as string[],
);

export default function Articles() {
    const [search, setSearch] = useState<string | undefined>();
    const [tag, setTag] = useState<string | undefined>();

    const filteredArticles = filterArticles(articles, search, tag);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">My Articles</h1>
            <div className="flex gap-1 w-full">
                <SearchInput
                    className="w-full"
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by name"
                />
                <Select onValueChange={(value) => setTag(value)}>
                    <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Select a tag" />
                    </SelectTrigger>
                    <SelectContent>
                        {tags.map((tag) => (
                            <SelectItem key={tag} value={tag}>
                                {tag}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>{' '}
            </div>
            <div className="flex flex-wrap items-center gap-8 mt-5">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <ArticleCard
                            key={article.title.toLowerCase()}
                            {...article}
                        />
                    ))
                ) : (
                    <h1>No articles found</h1>
                )}
            </div>
        </div>
    );
}
