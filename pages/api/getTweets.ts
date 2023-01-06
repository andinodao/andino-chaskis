import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const username = 'elonmusk'
  const url = `https://api.twitter.com/2/users/by/username/${username}`
  const token = process.env.TOKEN || ''
  const value = await fetch(url, {
    headers: {
      Authorization: token
    }
  })
  const data = await value.json()
  const value2 = await fetch(
    `https://api.twitter.com/2/users/${data.data.id}/tweets`,
    {
      headers: {
        Authorization: token
      }
    }
  )
  const data2 = await value2.json()
  const tweets = data2.data.map((item: any) => item.text)
  console.log('-----------------')
  console.log(data)
  console.log(data2)
  console.log(tweets)
  console.log('-----------------')
  res.status(200).send(tweets)
}
