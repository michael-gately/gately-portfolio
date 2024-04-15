'use client'

import { Poppins, Rubik } from 'next/font/google'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ThemeChanger = () => {
const [mounted, setMounted] = useState(false)
const { theme, setTheme } = useTheme()

useEffect(() => {
setMounted(true)
}, [])

if (!mounted) {
return <button className={rubik.className.concat(" ", " pr-1 lg:pt-1")}>Light Mode</button>
}

if(theme === 'light'){
return <button onClick={()=> setTheme('dark')} className={rubik.className.concat(" ", " pr-1 lg:pt-1 text-left")}>Dark
    Mode</button>
}
if(theme === 'dark'){
return <button onClick={()=> setTheme('light')} className={rubik.className.concat(" ", " pr-1 lg:pt-1 text-left")}>Light
    Mode</button>
}
else{
setTheme('dark')
}

}

const TogModal = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const { theme } = useTheme();

const toggleModal = () => {
setIsModalOpen(prevState => !prevState);
};

return (
<div>
    <button className="" onClick={toggleModal}>
        <Image className="w-8 h-auto" src="burger.svg" width={500} height={500} alt='Burger Menu' />
    </button>

    {isModalOpen && (
    <div className={`fixed inset-0 z-40 overflow-y-auto flex justify-center items-center bg-${theme==='dark' ? 'gray-900' : 'white' }`}>
        <div className={`text-xl p-8 rounded-lg w-full h-full bg-${theme==='dark' ? 'gray-900' : 'white' }`}>
            {/* Modal content goes here */}
            <h2 className="text-2xl font-bold mb-4">
                <Link href="/" onClick={toggleModal}>
                    Michael Gately
                </Link>
            </h2>
            <div className={rubik.className.concat(" ", "pr-1 pb-2 lg:pb-0 lg:pt-1")}>
                <Link href="/skills" onClick={toggleModal}>
                Skills
                </Link>
            </div>
            <div className={rubik.className.concat(" ", "pr-1 pb-2 lg:pb-0 lg:pt-1")}>
                <Link href="/work-history" onClick={toggleModal}>
                Work History
                </Link>
            </div>
            <div className={rubik.className.concat(" ", "pr-1 pb-2 lg:pb-0 lg:pt-1")}>
                <Link href="/projects" onClick={toggleModal}>
                Projects
                </Link>
            </div>
            <div className={rubik.className.concat(" ", "pr-1 pb-2 lg:pb-0 lg:pt-1")}>
                <Link href="/blog" onClick={toggleModal}>
                Blog
                </Link>
            </div>
            <div className='pr-1 pb-2 lg:pb-0 lg:pt-1'>
                <Link href="https://github.com/michael-gately" target="_blank" rel="noopener noreferrer"
                    className={rubik.className.concat(" ", "")} onClick={toggleModal}>
        Github
        </Link>
    </div>
    <div className='pr-1 pb-2 lg:pb-0 lg:pt-1'>
        <Link href=" https://www.linkedin.com/in/michaelgately/" target="_blank" rel="noopener noreferrer"
                    className={rubik.className.concat(" ", " ")} onClick={toggleModal}>
        LinkedIn
        </Link>
    </div>
    <div>
        <ThemeChanger/>
    </div>
              <button className=" bg-red-500 text-white font-bold py-2 px-4 rounded mt-4" onClick={toggleModal}>
                Close
                </button>
            </div>
        </div>
        )}
    </div>
    );
    };



    const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
    style: "italic"
    })

    const rubik = Rubik({
    subsets: ["latin"],
    weight: "300",
    style: "normal"
    })

    export default function NavSide() {
    return(
    <div>
        <div className='flex text-sm md:hidden text-left italic sticky top-0 pt-8 pl-8'>
            <div className={poppins.className.concat(" ", " flex-none")}>
                <Link href="/">
                Michael Gately
                </Link>
            </div>
            <div className='grow'>
            </div>
            <div className="flex-none pr-8">
                <TogModal></TogModal>


            </div>
        </div>
        <div className='hidden md:flex md:flex-col pt-8 pl-8 lg:text-base text-left italic sticky top-0'>
            <div className={poppins.className}>
                <Link href="/">
                Michael Gately
                </Link>
            </div>
            <div className={rubik.className.concat(" ", " pr-1 lg:pt-1")}>
                <Link href="/skills">
                Skills
                </Link>
            </div>
            <div className={rubik.className.concat(" ", " pr-1 lg:pt-1")}>
                <Link href="/work-history">
                Work History
                </Link>
            </div>
            <div className={rubik.className.concat(" ", " pr-1 lg:pt-1")}>
                <Link href="/projects">
                Projects
                </Link>
            </div>
            <div className={rubik.className.concat(" ", " pr-1 lg:pt-1")}>
                <Link href="/blog">
                Blog
                </Link>
            </div>
            <div className='pr-1 lg:pt-1'>
                <Link href="https://github.com/michael-gately" target="_blank" rel="noopener noreferrer"
                    className={rubik.className.concat(" ", "")}>
        Github
        </Link>
    </div>
    <div className='pr-1 lg:pt-1'>
        <Link href=" https://www.linkedin.com/in/michaelgately/" target="_blank" rel="noopener noreferrer"
                    className={rubik.className.concat(" ", " ")}>
        LinkedIn
        </Link>
    </div>
    <div>
        <ThemeChanger/>
    </div>
</div>
</div>
)
}