import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Zen_Maru_Gothic } from 'next/font/google'

const zenMaru = Zen_Maru_Gothic({
  weight: ['700'],
  subsets: ['latin'],
})

function page() {
  return (
    <div>
      <div>
        <h1 className={`${zenMaru.className} text-6xl font-bold mb-10`}>Customs</h1>
      </div>
      <div>
        <Image 
          src="/images/tarkovMaps/customsMap.png"
          alt="Escape from Tarkov Woods map"
          width={800}
          height={600}
        />
      </div>
      
    </div>
  )
}

export default page