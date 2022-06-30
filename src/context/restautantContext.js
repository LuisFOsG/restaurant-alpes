import { createContext } from 'react'

import useAlert from 'hooks/useAlert'
import useRestaurants from 'hooks/useRestaurants'

const Context = createContext({
  showAlert: () => {},
  restaurants: []
})

export const RestaurantContextProvider = ({ children }) => {
  const { AlertComponent, showAlert } = useAlert()
  const restaurants = useRestaurants()

  const VALUES = {
    showAlert,
    restaurants
  }

  return (
    <Context.Provider value={VALUES}>
      <AlertComponent />
      {children}
    </Context.Provider>
  )
}

export default Context
