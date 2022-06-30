import Head from 'next/head'
import useRestaurants from 'hooks/useRestaurants'

import Restaurant from 'components/Restaurant'
import InputSearch from 'components/InputSearch'

export default function Restaurants () {
  const restaurants = useRestaurants()

  return (
    <div>
      <Head>
        <title>Restaurantes Alpes | Encuentra tu restaurante ideal</title>
      </Head>

      <div>
        <h1 className='text-4xl font-bold text-center text-cyan-800 my-10'>Restaurantes Alpes</h1>

        <InputSearch />

        <div className='grid'>
          {
            restaurants.map(restaurant => (
              <Restaurant key={restaurant.id} restaurant={restaurant} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
