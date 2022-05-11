import '../styles/bootstrap.css'
import '../styles/globals.css'
import '../styles/animation.scss'

import { store, persistor } from '@store/store'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


function MyApp({ Component, pageProps }) {
  return (
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
    </PersistGate>
  </Provider>


//<Component {...pageProps} />
)
}

export default MyApp
