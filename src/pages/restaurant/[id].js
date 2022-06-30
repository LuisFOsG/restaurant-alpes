import { useRouter } from 'next/router'

const Restaurant = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Restaurant</h1>
      <p>{id}</p>
    </div>
  )
}

export default Restaurant
