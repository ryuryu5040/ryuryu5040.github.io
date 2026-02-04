import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "りゅーの遊び場",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-lime-50
          text-zinc-800
        `}
      >
        {/* 全体レイアウト */}
        <div className="min-h-screen flex flex-col">
          {/* ヘッダー */}
          <header className="border-b border-lime-200 bg-lime-100/70">
            <div className="mx-auto max-w-5xl px-6 py-4">
              <h1 className="text-lg font-semibold text-lime-900">
                <Link href="/">りゅーの遊び場</Link>
              </h1>
            </div>
          </header>

          {/* メイン */}
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-12">
              {children}
            </div>
          </main>

          {/* フッター */}
          <footer className="border-t border-lime-200 bg-lime-100/70">
            <div className="mx-auto max-w-5xl px-6 py-4 text-xs text-lime-900/70">
              Not affiliated with Battlestate Games
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
