import React from 'react'
import Link from "next/link";
import Box from "@/components/box";
import Image from "next/image";

export type Article = {
  slug: string;
  title: string;
  description: string;
  headerImage?: string; // /images/xxx.jpg みたいなパス or 外部URL
};

type Props = {
  article: Article;
};

export default function article({ article }: Props) {
  return (
    <div className="
        flex flex-col
        mx-1.5 md:mx-auto lg:mx-auto
        my-3 md:my-4 lg:my-2
        pb-4
        w-auto md:w-[90%] lg:w-[32%]
        h-auto
        bg-white
        border-b-lineaccent border-b-[5px]
        text-left
        rounded-3xl">
      <Link href={`/blog/${article.slug}`} className="block">
        {/* ヘッダー画像 */}
        {article.headerImage && (
          <div className="relative w-full aspect-[2/1] overflow-hidden rounded-t-2xl">
            <Image
              src={article.headerImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 75vw"
              priority={false}
            />
          </div>
        )}

        {/* テキスト */}
        <div className="mt-4 px-1">
          <h2 className="text-[20px] md:text-[22px] font-semibold leading-snug">
            {article.title}
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
            {article.description}
          </p>
        </div>
      </Link>
    </div>
  )
}