import React from 'react';
import Image from "next/image";

function page() {
  return (
    <div>
      <div>
        <h1>Woods</h1>
      </div>
      <div>
        <Image 
          src="/images/tarkovMaps/woodsMap.png"
          alt="Escape from Tarkov Woods map"
          width={800}
          height={600}
        />
      </div>
    </div>
  )
}

export default page