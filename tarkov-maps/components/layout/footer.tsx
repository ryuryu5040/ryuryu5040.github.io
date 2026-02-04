import React from 'react'
import Link from "next/link";

export default function footer() {
  return (
    <footer className="flex bottom-0 w-full">
      <div className="w-full mx-auto flex h-16 bg-[#112d4e] items-center justify-between px-4 py-3 text-[20px] ">
        <div className="font-bold tracking-wide text-white absolute left-3 md:left-[5%] lg:left-[12.5%]">
            ©sasasabi 2023-
        </div>
        <Link href="/" className="font-bold tracking-wide text-white absolute right-3 md:right-[5%] lg:right-[12.5%]">
          Legal
        </Link>
      </div>
    </footer>
  )
}