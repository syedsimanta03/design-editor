import '../styles/bootstrap.css'
import '../styles/globals.css'
import '../styles/animation.scss'

import Providers from '@contexts/Providers'
import Container from '@contexts/Container'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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
