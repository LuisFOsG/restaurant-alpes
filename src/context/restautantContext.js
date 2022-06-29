import { createContext } from 'react'
import useAlert from 'hooks/useAlert'

const Context = createContext({
  showAlert: () => {}
})

export const RestaurantContextProvider = ({ children }) => {
  const { AlertComponent, showAlert } = useAlert()

  const VALUES = {
    showAlert
  }

  return (
    <Context.Provider value={VALUES}>
      <AlertComponent />
      {children}
    </Context.Provider>
  )
}

export default Context
