import React,{ReactNode} from 'react'

type PropsType = {
    children: ReactNode
}

function Box({ children }: PropsType) {
  return (
    <div className="
        px-5 md:px-12 lg:px-15 
        py-3 md:py-4 lg:py-5
        mx-1.5 md:mx-auto lg:mx-auto
        my-3 md:my-4 lg:my-5
        w-auto md:w-[90%] lg:w-[75%]
        h-auto
        bg-white
        border-b-lineaccent border-b-[5px]
        text-left
        rounded-3xl">
      {children}
    </div>
  )
}

export default Box