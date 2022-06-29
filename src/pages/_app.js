import Head from 'next/head'

import 'styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Restaurantes Alpes</title>
        <meta name="description" content="Encuentra tu Restaurate Ideal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
