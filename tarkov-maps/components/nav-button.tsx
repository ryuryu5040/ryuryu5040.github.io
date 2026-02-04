import React,{ReactNode} from 'react'
import Link from "next/link";

type PropsType = {
  url: string,
  children: ReactNode
}

function Cbut({url, children }: PropsType) {
  return (
    <Link href={url} className="navv">
      {children}
    </Link>
  )
}

export default Cbut