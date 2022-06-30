import { useState, useEffect } from 'react'

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/api/restaurant').then(res => res.json()).then(data => {
      console.log(data)
      setRestaurants(data.businesses)
    })
  }, [])

  return restaurants
}

export default useRestaurants
