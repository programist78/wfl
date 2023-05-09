import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider.js'
import { InMemoryCache } from '@apollo/client/cache'
import { ApolloClient } from '@apollo/client/core/ApolloClient.js'
import { createUploadLink } from 'apollo-upload-client'
import nextApp, { AppContext } from 'next/app.js'
import { createElement as h, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { ApolloCache } from '@apollo/client/core'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import RootLayout from 'components/Layout'
import { Provider } from 'react-redux'
import { AuthProvider } from '../hooks/AuthContext.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from '../redux/store'
import Loader from 'components/Loader'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})
const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({
      uri: process.env.API_URI,
      credentials: 'include',
    }),
  })
export const apolloClient = createApolloClient(ApolloCache)

const App = ({
  Component,
  pageProps,
}: // apolloCache,
// apolloClient
AppProps) => {
  const [loadingcomponent, setLoadingcomponent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoadingcomponent(true)
    })
    router.events.on('routeChangeComplete', () => {
      setLoadingcomponent(false)
    })
  }, [])
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  }
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <AuthProvider>
            <PersistGate persistor={persistor}>
              {loadingcomponent ? (
                <Loader />
              ) : (
                <>
                  {/* <Head></Head> */}
                  <RootLayout>
                    <main className={poppins.className}>
                      <Component {...pageProps} />
                    </main>
                  </RootLayout>
                </>
              )}
            </PersistGate>
          </AuthProvider>
        </Provider>
      </ApolloProvider>
    </SessionProvider>
  )
}
if (typeof window === 'undefined')
  App.getInitialProps = async function getInitialProps(context: AppContext) {
    const apolloClient = createApolloClient()
    const [props, { default: ReactDOMServer }, { getMarkupFromTree }] =
      await Promise.all([
        nextApp.getInitialProps(context),
        import('react-dom/server'),
        import('@apollo/client/react/ssr/getDataFromTree.js'),
      ])

    const apolloCache = apolloClient.cache.extract()

    return {
      ...props,
      apolloCache,
    }
  }

export default appWithTranslation(App)
