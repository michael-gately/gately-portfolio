import {Rubik, Poppins} from 'next/font/google'
import Link from 'next/link'

const rubik = Rubik({
subsets: ["latin"],
weight: "300",
style: "normal"
})
 
const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "500",
style: "normal"
})


export default function Home() {
return (
<main className="md:pl-0 pt-8 text-left">
  <div className={rubik.className.concat(" ", " pt-32 pl-32 pr-32 pb-8 text-4xl")}> &#128075; Hi I&apos;m Mike </div>
  <div className={rubik.className.concat(" ", " text-base pl-32 pr-32 pb-8")}>A subject matter expert in Backend Software Development</div>
  <Link href="/skills">
    <button className={bodyPoppins.className.concat(" ","ml-32 mr-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mb-80")}>Skills</button>
  </Link>
</main>
)
}