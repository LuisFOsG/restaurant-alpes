/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo, useContext } from 'react'
import debounce from 'just-debounce-it'

import RestaurantContext from 'context/restautantContext'

const InputSearch = () => {
  const { searchRestaurants, lastTerm } = useContext(RestaurantContext)
  const [search, setSearch] = useState(lastTerm)

  const searchFn = useMemo(() => {
    const searchRestaurant = (searchQuery) => {
      searchRestaurants(searchQuery)
    }
    return debounce(searchRestaurant, 700)
  }, [])

  useEffect(() => {
    searchFn(search)
  }, [search, searchFn])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
      <input
        type="text"
        className='w-11/12 md:w-1/3 h-14 p-5 text-2xl border border-dotted border-black bg-white rounded-lg placeholder:text-back/40'
        value={search}
        onChange={handleSearch}
        placeholder="Busca un Restaurante"
      />
    </div>
  )
}

export default InputSearch
