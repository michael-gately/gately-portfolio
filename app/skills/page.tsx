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
    <div className='grid grid-cols-3 pt-8'>
        <div className={bodyPoppins.className.concat(" ", " m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1")}>
            <img className="p-12" src="Python.svg"></img>
            <div className="p-2">My preferred coding language is Python.</div>
        </div>
        <div className={bodyPoppins.className.concat(" ", " m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1")}>
            <img className="p-12" src="django.svg"></img>
            <div className="p-2">Experience with the Django Framework. Expecially with using the ORM and optimizing queries.</div>
        </div>
        <div className={bodyPoppins.className.concat(" ", " m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1")}>
            <img className="p-12" src="github.svg"></img>
            <div className="p-2">Knowledge of version control and peer code review using Git and Github</div>
        </div>
        <div className={bodyPoppins.className.concat(" ", " m-5 border text-center text-sm md:text-base max-w-sm rounded-lg col-span-1")}>
            <img className="p-12" src="github.svg"></img>
            <div className="p-2">Django Skills</div>
        </div>
    </div>
</div>
)
}