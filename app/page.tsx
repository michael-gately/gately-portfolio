import {Rubik, Poppins} from 'next/font/google'

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
<main className="md:pl-0 pt-8 pr-16 text-center">
  <div className={rubik.className.concat(" ", " pt-32 pl-32 pr-32 pb-8 text-4xl")}> &#128075; Hey I&apos;m Mike. </div>
  <div className={rubik.className.concat(" ", " text-base pb-8")}></div>
  <button className={bodyPoppins.className.concat(" "," bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded")}>About Me</button>
</main>
)
}