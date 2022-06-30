/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo, useContext } from 'react'
import debounce from 'just-debounce-it'

import RestaurantContext from 'context/restautantContext'

const InputSearch = () => {
  const { searchRestaurants, lastTerm, lastLocation } = useContext(RestaurantContext)
  const [term, setTerm] = useState(lastTerm)
  const [searchLocation, setSearchLocation] = useState(lastLocation)

  const searchFn = useMemo(() => {
    const searchRestaurant = (searchQuery, termQuery) => {
      searchRestaurants(searchQuery, termQuery)
    }
    return debounce(searchRestaurant, 700)
  }, [])

  useEffect(() => {
    searchFn(searchLocation, term)
  }, [searchLocation, term, searchFn])

  const handleSearchLocation = (e) => {
    setSearchLocation(() => {
      return e.target.value
    })
  }

  const handleTerm = (e) => {
    setTerm(() => {
      return e.target.value
    })
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
      <input
        type="text"
        className='w-11/12 md:w-1/5 h-14 p-5 text-2xl border border-dotted border-black bg-white rounded-l-lg placeholder:text-back/40'
        value={term}
        onChange={handleTerm}
        placeholder="Busca por Palabra Clave"
      />
      <input
        type="text"
        className='w-11/12 md:w-1/5 h-14 p-5 text-2xl border border-dotted border-black bg-white rounded-r-lg placeholder:text-back/40'
        value={searchLocation}
        onChange={handleSearchLocation}
        placeholder="Localización del Restaurante"
      />
    </div>
  )
}

export default InputSearch
