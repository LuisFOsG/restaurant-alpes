import Link from 'next/link'

const Header = () => {
  return (
    <div className="w-full h-20 bg-cyan-600">
      <div className="h-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-white text-2xl font-bold">
              Inicio
            </a>
          </Link>
        </div>

        <div>
          <Link href="/restaurants">
            <a className="text-white hover:text-cyan-50 text-xl font-bold ml-10">
              Restaurantes
            </a>
          </Link>

          <Link href="/contact">
            <a className="text-white hover:text-cyan-50 text-xl font-bold ml-10">
              Contacto
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
