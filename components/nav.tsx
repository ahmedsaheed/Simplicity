import Theme from "./theme"
import Link from 'next/link'

export default function Nav() {
    return (
        <header className="layout layout-header">
        <nav className="nav">
            <ul>
            <li  className="hover-underline-animation" ><Link href="/blog">BLOG</Link></li>
            <li  className="hover-underline-animation"><Link href="/projects">PROJECTS </Link></li>
            <li  className="hover-underline-animation"><Link href="/uses">USES </Link></li>
            <li  className="hover-underline-animation"><Link href="/contact">CONTACT </Link></li>
            <li  className="hover-underline-animation">
                <a><Theme/></a></li>
            </ul>
        </nav>
        </header>
            
    )
}