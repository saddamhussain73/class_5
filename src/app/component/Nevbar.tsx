import Link from "next/link"

export default function Nevbar(){
    return(
     
       <ul className="flex items-center gap-5 bg-sky-600 h-10 justify text-center">

            <li><Link href="/">Home</Link></li>
            <li><Link  href="/about" >About</Link> </li>
            <li><Link href="/contact_us">Contact us</Link>
                </li>
        </ul>
    )
}