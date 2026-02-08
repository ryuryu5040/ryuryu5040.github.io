import Link from "next/link"
import { Zen_Maru_Gothic } from "next/font/google"

const zenMaru = Zen_Maru_Gothic({
  weight: ['700'],
  subsets: ['latin'],
})

function TarkovMapsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={zenMaru.className}>
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur px-6 py-1">
        <Link
          href="/tarkov-maps"
          className={`inline-block text-3xl flex items-center gap-2 text-black hover:text-orange-800 transition-colors`}
        >
          Tarkov Maps
        </Link>
      </div>

      <main className="px-6 pt-6">
        {children}
      </main>
    </div>
  )
}

export default TarkovMapsLayout
