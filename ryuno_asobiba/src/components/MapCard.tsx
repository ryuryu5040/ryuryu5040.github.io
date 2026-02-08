import Link from "next/link"
import Image from "next/image"
import { Zen_Maru_Gothic } from "next/font/google"

const zenMaru = Zen_Maru_Gothic({
  weight: ["700"],
  subsets: ["latin"],
})

type MapCardProps = {
  title: string
  href: string
  image: string
}

export default function MapCard({ title, href, image }: MapCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border bg-white p-8 shadow-sm transition
                 hover:shadow-lg hover:-translate-y-1"
    >
    <div className="relative aspect-[16/9] w-full mb-2 overflow-hidden">
        <Image
            src={image}
            alt={`${title} map`}
            fill
            className="object-contain transition group-hover:scale-105"
            priority
        />
    </div>
      <h2
        className={`${zenMaru.className} text-3xl text-center
                    group-hover:text-green-600`}
      >
        {title}
      </h2>
    </Link>
  )
}
