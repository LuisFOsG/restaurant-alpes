import Link from 'next/link'
import Image from 'next/image'

const Restaurant = ({ restaurant }) => {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="border p-8 rounded-lg border-solid border-cyan-800 hover:bg-slate-400/20 cursor-pointer">
        <div className="relative w-full h-60 rounded-lg">
          <Image className='rounded-lg' src={restaurant.image_url} alt="Inicio" layout='fill' objectFit="cover" />
        </div>

        <div className="mt-5">
          <h2 className='mb-5 text-center text-xl text-slate-600 font-bold'>{restaurant.name}</h2>

          <div className='flex flex-row w-full'>
            <div className="w-full">
              <strong>- Rating: </strong> {restaurant.rating}
              <br />
              <strong>- Ciudad: </strong> {restaurant.location.city}
            </div>
            <div className="w-full flex justify-end">
              <div>
                {
                  restaurant.is_closed
                    ? <span className="bg-red-600 p-2 rounded-lg text-white">Cerrado</span>
                    : <span className="bg-green-600 p-2 rounded-lg text-white">Abierto</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Restaurant
