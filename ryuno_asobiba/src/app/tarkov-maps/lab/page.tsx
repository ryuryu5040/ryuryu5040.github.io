'use client'

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { Zen_Maru_Gothic } from 'next/font/google'
import MapViewer from '@/components/MapViewer';

const zenMaru = Zen_Maru_Gothic({
  weight: ['700'],
  subsets: ['latin'],
})

function page() {
  const [withText, setWithText] = useState(true)
  return (
    <div>
      <div className='flex justify-between items-baseline mb-10'>
        <h1 className={`${zenMaru.className} text-6xl font-bold`}>The Lab</h1>
        <Link
            href="/tarkov-maps"
            className="text-indigo-900 hover:text-orange-800 underline decoration-2 underline-offset-4 transition-colors text-xl"
            >
                戻る
        </Link>
      </div>

      <MapViewer 
      images={[
        { label: '説明無し', src: '/images/tarkovMaps/labMap.webp' },
      ]}/>

      <div className={`${zenMaru.className}`}>
        <div className = "mb-2">
            <Link
                href="https://escapefromtarkov.fandom.com/wiki/The_Lab"
                className="text-orange-400 hover:text-orange-800 underline decoration-2 underline-offset-4 transition-colors items-center mx-2"
                target="_blank">
                    公式Wiki
            </Link>
            <Link 
                href="https://wikiwiki.jp/eft/THE%20LAB"
                className="text-orange-400 hover:text-orange-800 underline decoration-2 underline-offset-4 transition-colors items-center mx-2"
                target="_blank">
                    日本語Wiki
            </Link>
        </div>
        <div>
            <p>
                
            </p>
        </div>
      </div>
    </div>
  )
}

export default page