import Link from "next/link"

export default function Footer(){
    return(
     
       <ul className="flex items-center gap-10 bg-sky-600 h-20 justify-end text-center">

            <li><Link href="/">Home</Link></li>
            <li><Link  href="/about" >About</Link> </li>
            <li><Link href="/contact_us">Contact us</Link>
                </li>
        </ul>
    )
}