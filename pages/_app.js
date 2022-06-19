import '../styles/style.css'
import '../styles/external.css'

import Nav from "../components/nav"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      
                <Nav />
            
    <Component {...pageProps} />

    </>
  )
}

export default MyApp
