import Image from "next/image";
import Box from "../components/box";
import Baloon from "@/components/baloon";
import Quote from "@/components/memo";

export default function Home() {
  return (
    <main>
      <Box>
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </Box>
      <Box>
        sasasabi-log.netへようこそ！
        <br/>
        sasasabi-log.netは笹錆が運営する技術ブログです。
        <br/>
        主にプログラミング、IT技術、ガジェットレビューなどの記事を掲載しています。
        <br/>
        どうぞごゆっくりお楽しみください。 
      </Box>
      <Box>
        sasasabi-log.netへようこそ！
        <br/>
        sasasabi-log.netは笹錆が運営する技術ブログです。
        <br/>
        主にプログラミング、IT技術、ガジェットレビューなどの記事を掲載しています。
        <br/>
        どうぞごゆっくりお楽しみください。 
        <Baloon icon="dRagon" name="">
          いまから遊ぶぞ。<br/>
          いいから。
        </Baloon>
        <Baloon icon="dRagon" name="">いまから遊ぶぞ。</Baloon>
        <Baloon icon="Salary" name="??">いまから遊ぶぞ。</Baloon>
        <Baloon icon="dRagon" name="??">いまから遊ぶぞ。</Baloon>
        sasasabi-log.netへようこそ！
        <br/>
        sasasabi-log.netは笹錆が運営する技術ブログです。
        <br/>
        主にプログラミング、IT技術、ガジェットレビューなどの記事を掲載しています。
        <br/>
        どうぞごゆっくりお楽しみください。 
        <Quote title="引用例">
          つまみ (@TrpFrog) は、インターネット上で非常に人気のあるコメディアンの一人です。彼女はユーモラスで機知に富んだ発言を次々と生み出し、その才能は多くのファンを魅了しています。特に、彼女の可愛らしいアイコン画像から想像できないような大胆かつ痛快な発言は、彼女のユニークな魅力の一部となっています。
        </Quote>
      </Box>
    </main>
  );
}
