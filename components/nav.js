import Theme from "./theme"
export default function Nav() {
    return (
        <header className="layout layout-header">
        <nav className="nav">
            <ul>
            <li><a href="/blog" className="hover-underline-animation">BLOG</a></li>
            <li><a href="/projects" className="hover-underline-animation">PROJECTS </a></li>
            <li><a href="/uses" className="hover-underline-animation">USES </a></li>
            <li><a href="/contact" className="hover-underline-animation">CONTACT </a></li>

            <li><a><Theme/></a></li>
            </ul>
        </nav>
        </header>

    )
}