import Link from 'next/link'
export default function Footer(){
    const date = new Date();
    return(
        <div className="footer">
        <p>Made By <a className="hover-underline-animation" href="https://github.com/ahmedsaheed"> Ahmed Saheed </a> © {date.getFullYear()}</p>

        </div>
    )
}