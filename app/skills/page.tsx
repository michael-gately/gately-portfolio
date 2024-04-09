'use client'

import { useTheme } from 'next-themes'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react'


const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})

export default function Projects() {
return (
<div className='pl-8 md:pl-0 pt-8 pr-16'>
    <div className={bodyPoppins.className.concat(" ", " text-left text-base md:text-lg")}>
        Skills
    </div>
    <div className='grid grid-cols-4 pt-8'>
        <div className={bodyPoppins.className.concat(" ", " p-1 m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1 grid grid-rows-2")}>
            <img className="p-10 row-span-1" src="file-type-python.svg"></img>
            <div className="p-2 row-span-1">My preferred coding language is Python.</div>
        </div>
        <div className={bodyPoppins.className.concat(" ", " p-1 m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1 grid grid-rows-2")}>
            <img className="p-12 row-span-1" src="django.svg"></img>
            <div className="p-2 row-span-1">Experience with the Django Framework. Expecially with using the ORM and optimizing queries.</div>
        </div>
        <div className={bodyPoppins.className.concat(" ", " m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1 grid grid-rows-2")}>
            <img className="p-12 row-span-1" src="github.svg"></img>
            <div className="p-2 row-span-1">Knowledge of version control and peer code review using Git and Github</div>
        </div>
        <div className={bodyPoppins.className.concat(" ", " m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1 grid grid-rows-2")}>
            <img className="p-12 row-span-1 h-full"  src="vs-code.svg"></img>
            <div className="p-2 row-span-1">I use VS code as my main IDE and have a good knowledge of using useful extentions like pytest and beautify</div>
        </div>
    </div>
</div>
)
}