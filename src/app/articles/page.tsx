import ArticleCard from '@/components/article-card';

type DevToArticle = {
    id: number;
    title: string;
    description: string;
    url: string;
    cover_image: string;
    tag_list: string[];
    published_at: string;
};

type Response = DevToArticle[];

const loadArticles = async (): Promise<Response> => {
    const response = await fetch(process.env.ARTICLES_API_URL as string);
    return response.json();
};

export default async function Articles() {
    const articles = await loadArticles();

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">My Articles</h1>
            <div className="flex flex-wrap items-center gap-8 mt-5">
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            imageAlt={article.description}
                            imageSrc={article.cover_image}
                            title={article.title}
                            publishedAt={new Date(article.published_at)}
                            url={article.url}
                            tags={article.tag_list}
                        />
                    ))
                ) : (
                    <h1>No articles found</h1>
                )}
            </div>
        </div>
    );
}
