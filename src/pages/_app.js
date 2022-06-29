import Head from 'next/head'

import { RestaurantContextProvider } from 'context/restautantContext'
import AppLayout from 'layouts/app-layout'

import 'styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Restaurantes Alpes</title>
        <meta name="description" content="Encuentra tu Restaurate Ideal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RestaurantContextProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RestaurantContextProvider>
    </>
  )
}

export default MyApp
