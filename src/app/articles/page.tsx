import ArticleCard from '@/components/article-card';

export default function Articles() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">My Articles</h1>
            <div className="flex flex-wrap gap-8">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
}
