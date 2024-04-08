import { Poppins, Rubik } from 'next/font/google'

const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})


export default function WorkHistory() {
return (
<div className='pl-8 md:pl-0 pt-8 pr-16 flex flex-col'>
    <div className={bodyPoppins.className.concat(" ", " text-left text-lg flex-none")}>
        Stratis IoT
    </div>
    <div className={bodyPoppins.className.concat(" ", " text-left text-lg grow")}>
        06/21 - Now
    </div>
    <div className={bodyPoppins.className.concat(" ", " pt-8 text-left text-base grow")}>
        At Stratis, I am a software engineer that specializes in back end development.
        I have a deep understanding of API’s, database efficiency, and domain driven design.
        One of my best skills is my communication with my team and through explaining difficult topics.
        I have a solid understanding of web and mobile front end technologies to be able to provide the
        easiest interfaces for our front end developers.
    </div>
</div>
)
}