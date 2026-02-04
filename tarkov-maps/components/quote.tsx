import React,{ ReactNode } from 'react'

type PropsType = {
    title: string;
    children: ReactNode;
    cite: string;
}

export default function quote({title, children, cite}: PropsType) {
  return (
    <blockquote className="
        px-1 py-2
        ml-8 mr-9 my-4 max-[480px]:ml-2 max-[480px]:mr-3
        border-l-4 border-l-accent
        color-[#252525]">
        {title &&
            <p className='mx-2 text-[18px] mb-4'>{title}</p>
        }

        <p className='mx-2'>{children}</p>
        
        {cite &&
            <cite className='block text-right mx-2 mt-2'>{cite}</cite>
        }
    </blockquote>
  )
}