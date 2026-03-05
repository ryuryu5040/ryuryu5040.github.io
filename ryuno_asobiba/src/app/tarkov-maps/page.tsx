import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttom"
import MapCard from "@/components/MapCard"
import { Zen_Maru_Gothic } from 'next/font/google'


const zenMaru = Zen_Maru_Gothic({
  weight: ['700'],
  subsets: ['latin'],
})

function page() {
  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <MapCard title="Ground Zero" href="/tarkov-maps/groundzero" image="/images/tarkovMapImages/groundZeroImage.webp" />
        <MapCard title="Woods" href="/tarkov-maps/woods" image="/images/tarkovMapImages/woodsImage.webp" />
        <MapCard title="Customs" href="/tarkov-maps/customs" image="/images/tarkovMapImages/customsImage.webp" />
        <MapCard title="Shoreline" href="/tarkov-maps/shoreline" image="/images/tarkovMapImages/shorelineImage.webp" />
        <MapCard title="Factory" href="/tarkov-maps/factory" image="/images/tarkovMapImages/factoryImage.webp" />
        <MapCard title="Interchange" href="/tarkov-maps/interchange" image="/images/tarkovMapImages/interchangeImage.webp" />
        <MapCard title="Reserve" href="/tarkov-maps/reserve" image="/images/tarkovMapImages/reserveImage.webp" />
        <MapCard title="Lighthouse" href="/tarkov-maps/lighthouse" image="/images/tarkovMapImages/lighthouseImage.webp" />
        <MapCard title="Streets of Tarkov" href="/tarkov-maps/streets" image="/images/tarkovMapImages/streetsImage.webp" />
        <MapCard title="The Lab" href="/tarkov-maps/lab" image="/images/tarkovMapImages/labImage.webp" />
      </div>
    </div>
  )
}

export default page