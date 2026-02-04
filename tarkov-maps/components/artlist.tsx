// components/ArticleList.tsx
import ArticleCard, { Article } from "@/components/article";

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div className="
        w-auto md:w-[90%] lg:w-[75%]
        mx-1.5 md:mx-auto lg:mx-auto
        flex flex-wrap">
      {articles.map((a) => (
        <ArticleCard key={a.slug} article={a} />
      ))}
    </div>
  );
}