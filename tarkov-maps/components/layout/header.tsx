"use client";

import { useId, useEffect, useState } from 'react'
import Link from "next/link";

type NavItem = { href: string; label: string }

type Props = {
  items?: NavItem[]
}

export default function header({
    items = [
    { href: "/", label: "Home" },
    { href: "/log", label: "Log" },
    { href: "/archive", label: "Archive" },
    { href: "/about", label: "About" },
  ],
}: Props) {
    const [hidden, setHidden] = useState(false);
    const [open, setOpen] = useState(false)
    const navId = useId()

    // Escで閉じる
    useEffect(() => {
        if (!open) return
        const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open])

    // スクロールで隠す
    useEffect(() => {
        if(!open){
            let prevY = window.scrollY;
            const onScroll = () => {
                const currentY = window.scrollY;
                if (currentY > 170 && currentY - prevY > 5) {
                    setHidden(true);
                } else {
                    if (prevY - currentY > 5){
                        setHidden(false);
                    }
                }
                prevY = currentY;
            };
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }
    },[hidden,open]);

  return (
    <header
      className={[
        "sticky z-50 top-0 transition-transform duration-300",
        hidden ? "-translate-y-16" : "translate-y-0",
      ].join(" ")}>
        <div className="mx-auto flex h-16 bg-[#3f72af] items-center justify-between px-4 py-3 text-[28px]">
        <Link href="/" className="absolute left-3 md:left-[5%] lg:left-[12.5%]
         font-bold tracking-wide text-white">
          笹錆ログ
        </Link>

        {/* ハンバーガーボタン */}
        <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={navId}
            onClick={() => setOpen((v) => !v)}
            className={[" inline-flex h-16 w-16 items-center justify-center rounded-md",
            "backdrop-blur",
            "right-2 md:right-[5%] lg:right-[12.5%] absolute"
            ].join(" ")}
        >
            {/* アイコン（四本線→×） */}
            <span className="relative block h-10 w-12">
            <span
                className={[
                "absolute left-0 top-0 h-2 bg-white transition-all duration-400 rounded-3xl",
                open ? "translate-y-[4px] rotate-45 w-6" : "w-12",
                ].join(" ")}
            />
            <span
                className={[
                "absolute left-0 top-[16px] h-2 w-5.5 bg-white transition-all duration-400 rounded-3xl",
                open ? "translate-y-[12px] -rotate-45 w-6" : "",
                ].join(" ")}
            />
            <span
                className={[
                "absolute right-0 top-[16px] h-2 w-5.5 bg-white transition-all duration-400 rounded-3xl",
                open ? "translate-y-[-12px] -rotate-45 w-6" : "",
                ].join(" ")}
            />
            <span
                className={[
                "absolute right-0 bottom-0 h-2 bg-white transition-all duration-400 rounded-3xl",
                open ? "translate-y-[-4px] rotate-45 w-6" : "w-12",
                ].join(" ")}
            />
            </span>
        </button>

        {/* 背景オーバーレイ（クリックで閉じる） */}
        <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className={[
            "absolute z-40 bg-black/40 transition-opacity duration-200 top-16 left-0 w-full h-[calc(100vh-4rem)]",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
        />

        {/* メニュー本体 */}
        <nav
            id={navId}
            className={[
            "absolute z-50 h-auto w-[min(360px,90vw)] max-[480px]:w-[min(450px,90vw)]",
            "max-[480px]:left-1/2 max-[480px]:-translate-x-1/2 min-[480px]:right-2 md:right-[3%] lg:right-[10%]",
            "px-3 mx-auto my-2",
            "h-auto bg-white border-b-lineaccent border-b-[5px] text-left rounded-3xl",
            "transition-transform duration-400",
            open ? "opacity-100 top-18 pointer-events-auto" : "opacity-0 translate-y-full pointer-events-none",
            ].join(" ")}
        >
            <div className="py-4">
            <ul className="flex flex-wrap gapy-2">
                {items.map((it) => (
                <li key={it.href} className="w-1/2">
                    <Link
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="
                        mx-1 my-1
                        block py-1
                        rounded-[30px]
                        text-center
                        border-2 border-[#bbcdfa]
                        hover:bg-black/5
                        text-[16px]
                    "
                    >
                    {it.label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </nav>
      </div>
    </header>
  )
}