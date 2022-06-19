import '../styles/style.css'
import '../styles/external.css'

import Nav from "../components/nav"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
       <a className="zero">
                <Nav />
            </a>
    <Component {...pageProps} />

    </>
  )
}

export default MyApp
