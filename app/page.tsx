import { Poppins, Rubik } from 'next/font/google'
import NavSide from './components/nav'

const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})

const copyrightRubik = Rubik({
subsets: ['latin'],
weight: '300',
style: "italic"
})


export default function Home() {
return (
<main className="pl-8 md:pl-0 pt-8 pr-16">
  <div> test </div>
</main>
)
}