import { useState, useContext } from 'react'

import RestaurantContext from 'context/restautantContext'

const InputSearch = () => {
  const { searchRestaurants } = useContext(RestaurantContext)

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchRestaurants(search)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
        <input
          type="text"
          className='w-11/12 md:w-1/3 h-14 p-5 text-2xl border border-dotted border-black bg-white rounded-lg placeholder:text-back/40'
          value={search}
          onChange={handleSearch}
          placeholder="Busca un Restaurante"
        />
        <button
          className='mt-5 md:mt-0 md:ml-5 px-14 py-3 rounded-full text-xl font-bold text-white bg-black hover:bg-black/80'
          type="submit"
        >Buscar</button>
      </div>
    </form>
  )
}

export default InputSearch
