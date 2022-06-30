import { useState, createContext } from 'react'

import useAlert from 'hooks/useAlert'
import useRestaurants from 'hooks/useRestaurants'

const Context = createContext({
  showAlert: () => {},
  restaurants: [],
  searchRestaurants: () => {},
  getRestaurant: () => {},
  lastTerm: ''
})

export const RestaurantContextProvider = ({ children }) => {
  const { AlertComponent, showAlert } = useAlert()
  const { restaurants, searchRestaurants, getRestaurant } = useRestaurants()
  const [lastTerm, setLastTerm] = useState('')

  const newSearchRestaurants = (term) => {
    if (term !== lastTerm) {
      searchRestaurants(term)
      setLastTerm(term)
    }
  }

  const VALUES = {
    showAlert,
    restaurants,
    searchRestaurants: newSearchRestaurants,
    getRestaurant,
    lastTerm
  }

  return (
    <Context.Provider value={VALUES}>
      <AlertComponent />
      {children}
    </Context.Provider>
  )
}

export default Context
