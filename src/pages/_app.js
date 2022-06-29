import Head from 'next/head'

import 'styles/globals.css'

import AppLayout from 'layouts/app-layout'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Restaurantes Alpes</title>
        <meta name="description" content="Encuentra tu Restaurate Ideal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp
