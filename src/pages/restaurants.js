import { useContext } from 'react'
import Head from 'next/head'

import RestaurantContext from 'context/restautantContext'

import Restaurant from 'components/Restaurant'
import InputSearch from 'components/InputSearch'

export default function Restaurants () {
  const { restaurants } = useContext(RestaurantContext)

  return (
    <div>
      <Head>
        <title>Restaurantes Alpes | Encuentra tu restaurante ideal</title>
      </Head>

      <div>
        <h1 className='text-4xl font-bold text-center text-cyan-800 my-10'>Restaurantes Alpes</h1>

        <InputSearch />

        <div className='mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 p-4'>
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
