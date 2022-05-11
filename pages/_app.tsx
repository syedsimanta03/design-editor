import '../styles/bootstrap.css'
import '../styles/globals.css'
import '../styles/animation.scss'

import Providers from '@contexts/Providers'
import Container from '@contexts/Container'


function MyApp({ Component, pageProps }) {
  return (
   <Providers>
   <Container>
   <Component {...pageProps} />
   </Container>
 </Providers>
//<Component {...pageProps} />
)
}

export default MyApp
