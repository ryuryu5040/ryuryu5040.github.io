'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  TransformWrapper,
  TransformComponent,
} from 'react-zoom-pan-pinch'

type MapImage = {
  label: string
  src: string
}

type Props = {
  images: MapImage[]
}

export default function MapViewer({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const activeImage = images[activeIndex]

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

        {/* 通常表示 */}
      <div className="mb-8 cursor-zoom-in">
        <Image
          src={activeImage.src}
          alt={activeImage.label}
          width={800}
          height={600}
          onClick={() => setIsFullscreen(true)}
        />
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 "
        >
          {/* 閉じるボタン */}
          <button
            className="absolute top-4 right-6 text-white text-3xl z-50"
            onClick={() => setIsFullscreen(false)}
          >
            ×
          </button>


          <TransformWrapper
            minScale={0.8}
            maxScale={6}
            wheel={{ step: 0.2 }}
            pinch={{ step: 5 }}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent>
              <div className="relative w-screen h-screen">
                <Image
                  src={activeImage.src}
                  alt={activeImage.label}
                  fill
                  className="object-contain"
                  draggable={false}
                />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}

    </div>
  )
}
