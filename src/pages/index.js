import Link from 'next/link'
import Image from 'next/image'

const IMG = 'https://fusion.yelp.com/wp-content/uploads/sites/4/2021/10/Fusion_Home_Hero-Image-1600x901.jpeg'

export default function Home () {
  return (
    <div>
      <h1 className="text-2xl flex flex-col md:flex-row justify-center items-center">
        <div className="relative w-full image-height opacity-80">
          <Image src={IMG} alt="Inicio" layout='fill' objectFit="cover" />
        </div>

        <div className="p-10 max-w-[75ch]">
          <h1 className="text-5xl text-center font-bold text-cyan-700 mb-10">Restaurantes ALPES</h1>
          <p>¿Cansado de no encontrar un buen restaurante en todo el mundo? ¿Vas a viajar a otra ciudad y quieres saber qué restaurantes tienen un buen menú?</p>
          <br />
          <p>Llegaste al lugar que estabas esperando. Aquí encontrarás los mejores restaurantes catalogados en todo el mundo. Tenemos una lista enorme con cientos de ubicaciones que seguramente te encantaran. Alista tu apetito y vamos juntos a encontrar este restaurante ideal.</p>

          <div className="mt-10 flex justify-center items-center">
            <Link href="/restaurants">
              <a className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg p-3" href="/restaurantes">
                Ver Restaurantes
              </a>
            </Link>
          </div>
        </div>
      </h1>
    </div>
  )
}
