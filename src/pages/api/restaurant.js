// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler (req, res) {
  const API = 'https://api.yelp.com/v3'
  const YULP_API = process.env.API_YELP_FUSION

  const HEADERS = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${YULP_API}`
  }

  const resFetch = await fetch(`${API}/autocomplete?text=del&latitude=37.786882&longitude=-122.399972`, {
    method: 'GET',
    headers: HEADERS
  })

  const data = await resFetch.json()

  res.status(200).json(data)
}
