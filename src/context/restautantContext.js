import { createContext } from 'react'

import useAlert from 'hooks/useAlert'
import useRestaurants from 'hooks/useRestaurants'

const Context = createContext({
  showAlert: () => {},
  restaurants: [],
  searchRestaurants: () => {},
  getRestaurant: () => {}
})

export const RestaurantContextProvider = ({ children }) => {
  const { AlertComponent, showAlert } = useAlert()
  const { restaurants, searchRestaurants, getRestaurant } = useRestaurants()

  const VALUES = {
    showAlert,
    restaurants,
    searchRestaurants,
    getRestaurant
  }

  return (
    <Context.Provider value={VALUES}>
      <AlertComponent />
      {children}
    </Context.Provider>
  )
}

export default Context
