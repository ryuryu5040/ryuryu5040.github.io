// app/blog/page.tsx (App Router例)
import ArticleList from "@/components/artlist";

const articles = [
  {
    slug: "hello",
    title: "はじめての投稿",
    description: "このブログの方針とか、作ってるものの話。",
    headerImage: "https://res.cloudinary.com/dtifkcohv/image/upload/v1743484030/system%20images/archive/top_image_10_ttehev.png",
  },
  {
    slug: "nextjs-tips",
    title: "Next.jsの小ネタ集",
    description: "記事一覧・画像・OGP周りでハマったこと。",
    headerImage: "https://res.cloudinary.com/dtifkcohv/image/upload/v1743484030/system%20images/archive/top_image_10_ttehev.png",
  },
  {
    slug: "hello",
    title: "はじめての投稿",
    description: "このブログの方針とか、作ってるものの話。",
    headerImage: "https://res.cloudinary.com/dtifkcohv/image/upload/v1743484030/system%20images/archive/top_image_10_ttehev.png",
  },
  {
    slug: "nextjs-tips",
    title: "Next.jsの小ネタ集",
    description: "記事一覧・画像・OGP周りでハマったこと。",
    headerImage: "https://res.cloudinary.com/dtifkcohv/image/upload/v1743484030/system%20images/archive/top_image_10_ttehev.png",
  },
  {
    slug: "hello",
    title: "はじめての投稿",
    description: "このブログの方針とか、作ってるものの話。",
    headerImage: "https://res.cloudinary.com/dtifkcohv/image/upload/v1743484030/system%20images/archive/top_image_10_ttehev.png",
  },
  {
    slug: "nextjs-tips",
    title: "Next.jsの小ネタ集",
    description: "記事一覧・画像・OGP周りでハマったこと。",
    headerImage: "https://res.cloudinary.com/dtifkcohv/image/upload/v1743484030/system%20images/archive/top_image_10_ttehev.png",
  },
];

export default function Page() {
  return <ArticleList articles={articles} />;
}