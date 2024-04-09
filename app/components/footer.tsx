import { Rubik } from 'next/font/google'

const copyrightRubik = Rubik({
    subsets: ['latin'],
    weight: '300',
    style: "italic"
    })
    
export default function Footer() {
return (
<div className={copyrightRubik.className.concat(" ", " pl-8 pt-16 text-sm sticky bottom-0")}>
    Copyright © 2024
</div>
)
}