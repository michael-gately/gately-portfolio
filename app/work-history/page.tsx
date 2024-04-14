import { Poppins } from 'next/font/google'

const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})


export default function WorkHistory() {
return (

<div className='pl-8 md:pl-0 pt-8 pr-16'>
    <div className={bodyPoppins.className.concat(" ", " text-left text-base md:text-lg")}>
        Work History
    </div>
    <div className='flex flex-row pt-8'>
        <div className='basis-1/4 pr-5'>
            <img src="stratisLogo.svg" className='rounded'/>
        </div>
        <div className='basis-3/4'>
            <div className={bodyPoppins.className.concat(" ", " text-left text-lg")}>
                Stratis IoT
            </div>
            <div className={bodyPoppins.className.concat(" ", " text-left text-lg")}>
                06/21 - Now
            </div>
            <div className={bodyPoppins.className.concat(" ", " pt-8 text-left text-base mb-80")}>
                At Stratis, I am a software engineer that specializes in back end development.
                I have a deep understanding of APIs, database efficiency, and domain driven design.
                My greatest strengths are my communication skills and ability to explain difficult topics simply.
                My cohesive understanding of web and mobile technologies lets me provide 
                adequate endpoints of our front end developers to thrive.
            </div>
        </div>
    </div>

</div>
)
}