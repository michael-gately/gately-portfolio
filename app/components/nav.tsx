'use client'

import { Poppins, Rubik } from 'next/font/google'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className={rubik.className.concat(" ", " pt-1")}>Light Mode</button>
  }

  if(theme === 'light'){
    return <button onClick={() => setTheme('dark')} className={rubik.className.concat(" ", " pt-1 text-left")}>Dark Mode</button>
  }
  if(theme === 'dark'){
    return <button onClick={() => setTheme('light')} className={rubik.className.concat(" ", " pt-1 text-left")}>Light Mode</button>
  }
  else{
    setTheme('dark')
  }
    
}

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

export default function NavSide() {
return(
<div className='flex flex-col pt-8 pl-8 text-base text-left italic sticky top-0'>
    <div className={poppins.className}>
        <Link href="/">
        Michael Gately
        </Link>
    </div>
    <div className={rubik.className.concat(" ", " pt-1")}>
        <Link href="/skills">
        Skills
        </Link>
    </div>
    <div className={rubik.className.concat(" ", " pt-1")}>
        <Link href="/work-history">
        Work History
        </Link>
    </div>
    <div className={rubik.className.concat(" ", " pt-1")}>
        <Link href="/projects">
        Projects
        </Link>
    </div>
    <div className={rubik.className.concat(" ", " pt-1")}>
        <Link href="/blog">
        Blog
        </Link>
    </div>
    <div className='pt-1'>
        <Link href="https://github.com/michaelgately1" target="_blank" rel="noopener noreferrer"
            className={rubik.className.concat(" ", "")}>
        Github
        </Link>
    </div>
    <div className='pt-1'>
        <Link href="https://www.linkedin.com/in/michaelgately/" target="_blank" rel="noopener noreferrer"
            className={rubik.className.concat(" ", " ")}>
        LinkedIn
        </Link>
    </div>
    <div>
        <ThemeChanger/>
    </div>
</div>
)
}