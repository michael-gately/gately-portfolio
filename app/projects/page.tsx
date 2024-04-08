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
        Athlete's Grind Automation
    </div>
    <div className={bodyPoppins.className.concat(" ", " pt-8 text-left text-sm md:text-base")}>
        A friend of mine needed help automating his coffee business for scale.
        His business needed a way to automatically send emails to a distributor,
        automatically generate a shipping label depeninding on goods ordered, and
        have a front end form that is easy and consistent. 
        I was able to do this using a django server
        with an external Shipping Label API, MIME email generation, 
        and pdfkit to create a purchase order to attach.
    </div>
</div>
)
}