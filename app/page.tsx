import Image from 'next/image'
import { Poppins, Rubik } from 'next/font/google'
import githubIcon from '../public/github-mark.svg'
import linkedinIcon from '../public/iconmonstr-linkedin-3.svg'
import darkMode from '../public/dark-theme-svgrepo-com.svg'

const poppins = Poppins({
subsets: ["latin"],
weight: "700",
style: "italic"
})

const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})

const rubik = Rubik({
subsets: ["latin"],
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
<main className="md:grid grid-cols-8">
  <div className='col-span-2 text-center text-2xl italic lg:border-r-2 border-black'>
    <div className={poppins.className.concat(" ", " p-8 text-left")}>
      Michael Gately
    </div>
    <div className='text-left'>
      <button className={rubik.className.concat(" ", " p-8")}>
        Work History
      </button><br></br>
      <button className={rubik.className.concat(" ", " p-8")}>
        Projects
      </button><br></br>
      <button className={rubik.className.concat(" ", " p-8")}>
        Interests
      </button><br></br>
      <button className={rubik.className.concat(" ", " p-8")}>
        Blog
      </button><br></br>
      <button className='ml-8 mt-10'>
        <Image priority src={githubIcon} alt='Github Profile Page' className='logo' />
      </button>
      <button className='ml-8 mt-10'>
        <Image priority src={linkedinIcon} alt='LinkedIn Profile Page' className='logo' />
      </button>
      <button className='ml-8 mt-10'>
        <Image priority src={darkMode} alt='Dark Mode Toggle' className='logo' />
      </button>
      <div className={copyrightRubik.className.concat(" ", " p-11 text-sm")}>
        Copyright © 2024
      </div>
    </div>
  </div>
  <div className='col-span-6'>
    <div className={bodyPoppins.className.concat(" ", " pt-20 pl-10 pb-10 text-left text-2xl")}>
      Stratis IoT
    </div>
    <div className={bodyPoppins.className.concat(" ", " pl-10 text-left text-2xl")}>
      06/21 - Now
    </div>
    <div className={bodyPoppins.className.concat(" ", " p-10 text-left text-2xl")}>
      At Stratis, I am a software engineer that specializes in back end development.
      I have a deep understanding of API’s, database efficiency, and domain driven design.
      One of my best skills is my communication with my team and through explaining difficult topics.
      I have a solid understanding of web and mobile front end technologies to be able to provide the
      easiest interfaces for our front end developers.
    </div>
  </div>
</main>
)
}