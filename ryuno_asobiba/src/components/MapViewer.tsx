'use client'

import { useState } from 'react'
import Image from 'next/image'

type MapImage = {
  label: string
  src: string
}

type Props = {
  images: MapImage[]
}

export default function MapViewer({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>

      <div className="flex gap-6 mb-4 border-b">
        {images.map((img, i) => (
          <button
            key={img.label}
            onClick={() => setActiveIndex(i)}
            className={`pb-2 text-lg transition-colors ${
              activeIndex === i
                ? 'text-orange-600 border-b-4 border-orange-600 font-bold'
                : 'text-gray-500 hover:text-orange-400'
            }`}
          >
            {img.label}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].label}
          width={800}
          height={600}
        />
      </div>

    </div>
  )
}
