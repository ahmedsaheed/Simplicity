import Theme from "./theme"
import Link from 'next/link'

export default function Nav() {
    return (
        <header className="layout layout-header">
        <nav className="nav">
            <ul>
            <li><Link href="/blog" className="hover-underline-animation">BLOG</Link></li>
            <li><Link href="/projects" className="hover-underline-animation">PROJECTS </Link></li>
            <li><Link href="/uses" className="hover-underline-animation">USES </Link></li>
            <li><Link href="/contact" className="hover-underline-animation">CONTACT </Link></li>

            <li><a><Theme/></a></li>
            </ul>
        </nav>
        </header>

    )
}