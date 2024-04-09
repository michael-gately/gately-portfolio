import { Poppins } from 'next/font/google'

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
    <div className={bodyPoppins.className.concat(" ", " pt-8 text-left text-sm md:text-base")}>
        Skills
    </div>
</div>
)
}