import React from 'react'

type PropsType = {
    type?: string;
    title?: string;
    children: React.ReactNode;
}

export default function memo({ type, title , children }: PropsType) {
  return (
    <div className="
        px-1 py-2
        ml-8 mr-9 my-4 max-[480px]:ml-2 max-[480px]:mr-3
        border-l-10 border-l-lineaccent
        bg-background rounded-md">
        {title &&
            <p className='mx-4 max-[480px]:mx-2 mt-2 text-[18px]'>{title}</p>
        }
        <p className='mx-4 max-[480px]:mx-2 my-2'>{children}</p>
    </div>
  )
}