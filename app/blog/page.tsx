import { Poppins } from 'next/font/google'

const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})


export default function Blog() {
return (
<div className='pl-8 md:pl-0 pt-8 pr-16 flex flex-col'>
    <div className={bodyPoppins.className.concat(" ", " text-left text-lg flex-none")}>
        Blog
    </div>
</div>
)
}