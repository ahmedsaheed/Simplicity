export default function Footer(){
    const date = new Date();
    return(
        <div className="footer">
        <p>Made By Ahmed Saheed using <a href="https://github.com/lauragift21/gridsome-minimal-blog" className="hover-underline-animation">gridsome-template</a> © {date.getFullYear()}</p>

        </div>
    )
}