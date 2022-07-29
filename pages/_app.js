import '../styles/style.css'
import '../styles/external.css'
import "highlight.js/styles/atom-one-dark-reasonable.css"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  
  return (

    <>
     <ThemeProvider>
     <Component {...pageProps} />
     </ThemeProvider>
          
          </>
  )
}

export default MyApp
