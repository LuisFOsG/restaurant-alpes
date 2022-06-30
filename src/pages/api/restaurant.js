// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler (req, res) {
  const API = 'https://api.yelp.com/v3'
  const YULP_API = process.env.API_YELP_FUSION

  const HEADERS = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${YULP_API}`
  }

  const resFetch = await fetch(`${API}/businesses/search?location=San+Francisco`, {
    method: 'GET',
    headers: HEADERS
  })

  const data = await resFetch.json()

  res.status(200).json(data)
}
