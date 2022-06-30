import { useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import RestaurantContext from 'context/restautantContext'

const Restaurant = () => {
  const { restaurants } = useContext(RestaurantContext)

  const router = useRouter()
  const { id } = router.query

  const restaurant = restaurants.find(restaurant => restaurant.id === id)
  if (!restaurant) {
    return (
      <div className="content-height flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">Restaurante No Encontrado</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row w-full content-height p-16 gap-10">
      <div className='flex justify-center items-center w-full h-full'>
        <div className="relative w-full h-96">
          <Image src={restaurant.image_url} alt="Inicio" layout='fill' objectFit="contain" />
        </div>
      </div>

      <div className='w-full p-4 border rounded-lg border-solid border-cyan-800/50'>
        <Link href="/restaurants">
          <a className="bg-black py-2 rounded-lg hover:bg-black/60 px-4 text-white">Regresar</a>
        </Link>

        <a href={restaurant.url} target="_blank" rel="noreferrer">
          <h1 className="mt-2 text-4xl text-center font-bold bg-slate-200 text-slate-800 hover:text-slate-700">{restaurant.name}</h1>
        </a>

        <div className='flex flex-row w-full mt-10'>
          <div className="w-full flex flex-col pl-16">
            <ul className='list-disc'>
              <li><strong>Rating: </strong> {restaurant.rating}</li>
              <li><strong>Ciudad: </strong> {restaurant.location.city}</li>
            </ul>

            <div className="mt-5">
              <strong>Categorias</strong>
              <ul className='list-disc'>
                {
                  restaurant.categories.map(category => (
                    <li key={category.alias}>{category.title}</li>
                  ))
                }
              </ul>
            </div>

          </div>
          <div className="w-full flex justify-end pr-5">
            <div>
              {
                restaurant.is_closed
                  ? <span className="bg-red-600 p-2 rounded-lg text-white">Cerrado</span>
                  : <span className="bg-green-600 p-2 rounded-lg text-white">Abierto</span>
              }
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 gap-5">
          <strong>Reviews:</strong> { restaurant.review_count }
          <strong>Telefono:</strong> { restaurant.phone }
        </div>
      </div>
    </div>
  )
}

export default Restaurant
