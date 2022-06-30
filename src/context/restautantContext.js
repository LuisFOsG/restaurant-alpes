import { useState, createContext } from 'react'

import useAlert from 'hooks/useAlert'
import useRestaurants from 'hooks/useRestaurants'

const Context = createContext({
  showAlert: () => {},
  restaurants: [],
  searchRestaurants: () => {},
  getRestaurant: () => {},
  lastLocation: '',
  lastTerm: ''
})

export const RestaurantContextProvider = ({ children }) => {
  const { AlertComponent, showAlert } = useAlert()
  const { restaurants, searchRestaurants, getRestaurant } = useRestaurants()
  const [lastTerm, setLastTerm] = useState('')
  const [lastLocation, setLastLocation] = useState('')

  const newSearchRestaurants = (location, term) => {
    console.log(term, location)

    if (term !== lastTerm || location !== lastLocation) {
      searchRestaurants(location, term)
      setLastTerm(term)
      setLastLocation(location)
    }
  }

  const VALUES = {
    showAlert,
    restaurants,
    searchRestaurants: newSearchRestaurants,
    getRestaurant,
    lastTerm,
    lastLocation
  }

  return (
    <Context.Provider value={VALUES}>
      <AlertComponent />
      {children}
    </Context.Provider>
  )
}

export default Context
