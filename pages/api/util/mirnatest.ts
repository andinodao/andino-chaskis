import type { NextApiRequest, NextApiResponse } from 'next'

// TODO:Mirna create an api that takes social media accounts and links to train an api on a particular topic.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Mirna y su test the thing')
  console.log('mirna y su test the thing')

  return res.json({ status: 'worked' })
}
