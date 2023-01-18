import '../styles/globals.css'
import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { store, persistor } from '../public/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>

  )
}

export default MyApp
