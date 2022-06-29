import { useState, useEffect } from 'react'

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/api/restaurant').then(res => res.json()).then(data => console.log(data))
  }, [])

  return restaurants
}

export default useRestaurants
