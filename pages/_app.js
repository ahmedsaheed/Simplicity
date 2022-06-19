import '../styles/style.css'
import Theme from "../components/theme"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Component {...pageProps} />
    <Theme/>
    </>
  )
}

export default MyApp
