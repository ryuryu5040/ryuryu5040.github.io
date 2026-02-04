import { ReactNode } from 'react'
import { characters, defaultCharacter } from '@/lib/character';

type Props = { 
    icon: string;
    name: string;
    children: ReactNode;
}

export default function baloon({ icon, name, children }: Props) {
  const char = characters[icon] ?? defaultCharacter
  const charName = name || char.name
  return (
    <div className="flex flex-nowrap my-5 pl-0 md:pl-4 items-start">

        {/* アイコン＋名前 */}
        <div className="flex flex-col items-center w-12 ml-4 max-[480px]:ml-2 max-[480px]:w-10">
            <img src={char.icon}
                className="
                    w-12 h-12 rounded-[4px]
                    max-[480px]:w-10 max-[480px]:h-10"/>
            <p className="text-[14px] mt-1">{charName}</p>
        </div>

        {/* 吹き出し */}
        <div className="
            relative
            mt-5 ml-4 mb-2 max-[480px]:ml-4 max-[480px]:mt-4
            px-4 py-2
            bg-[#dbe2ef]
            rounded-[4px]
            max-w-4/5
            text-left">
            <span className="
                absolute
                top-0 -left-3
                w-0 h-0
                border-12
                border-transparent
                border-t-[#dbe2ef]"/>

            <p className="text-[14px] my-1 whitespace-pre-line">
                {children}
            </p>
        </div>
    </div>
  )
}
        
        