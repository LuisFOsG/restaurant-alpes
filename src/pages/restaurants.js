import Head from 'next/head'
import useRestaurants from 'hooks/useRestaurants'

export default function Restaurants () {
  const restaurants = useRestaurants()

  console.log(restaurants)

  return (
    <div>
      <Head>
        <title>Restaurantes Alpes | Encuentra tu restaurante ideal</title>
      </Head>

      <div>
        <h1 className="text-3xl font-bold underline">
          Restaurantes
        </h1>
      </div>
    </div>
  )
}
