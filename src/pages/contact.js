import { useState, useContext } from 'react'
import Head from 'next/head'

import RestaurantContext from 'context/restautantContext'

export default function Contacts () {
  const { showAlert } = useContext(RestaurantContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleNewsletter = (e) => {
    setNewsletter(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      newsletter
    }

    console.log(data)
    showAlert('Gracias por Contactarnos', 'success')

    setName('')
    setEmail('')
    setNewsletter(false)
  }

  return (
    <div>
      <Head>
        <title>Contacto | Restaurantes Alpes</title>
      </Head>

      <div className='content-height contact flex flex-col justify-center items-center'>

        <form className='w-11/12 md:w-1/2 lg:w-1/3 h-auto z-50' onSubmit={handleSubmit}>
          <div className="w-full h-full flex flex-col bg-white p-10 rounded-lg">
            <h1 className="text-3xl text-center font-bold text-cyan-700">Contacto</h1>

            <div className="m-4">
              <input
                type="text"
                className="w-full p-4 h-12 rounded-lg bg-gray-400/30"
                value={name}
                onChange={handleName}
                placeholder='Nombre..'
                required
              />
            </div>

            <div className="m-4">
              <input
                type="email"
                className="w-full p-4 h-12 rounded-lg bg-gray-400/30"
                value={email}
                onChange={handleEmail}
                placeholder='Correo Electronico..'
                required
              />
            </div>

            <div className="text-center font-semibold my-4">
              <input
                id="newsletter"
                type="checkbox"
                checked={newsletter}
                onChange={handleNewsletter}
              />
              <label className="cursor-pointer" htmlFor="newsletter"> Suscribete a nuestro newsletter</label>
            </div>

            <div className="text-center">
              <button type="submit" className="w-1/2 bg-cyan-900 hover:bg-cyan-800 text-white h-14 rounded-lg">Enviar</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}
