import { useState, useEffect } from 'react'

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/api/restaurant').then(res => res.json()).then(data => {
      if (data.error) return setRestaurants([])
      setRestaurants(data.businesses)
    })
  }, [])

  const searchRestaurants = (term) => {
    console.log(term)
    fetch(`/api/restaurant?term=${term}`).then(res => res.json()).then(data => {
      console.log(data)
      if (data.error) return setRestaurants([])
      setRestaurants(data.businesses)
    })
  }

  const getRestaurant = async (id) => {
    const resData = await fetch(`/api/restaurant/${id}`)
    const data = await resData.json()
    return data
  }

  return {
    restaurants,
    searchRestaurants,
    getRestaurant
  }
}

export default useRestaurants
