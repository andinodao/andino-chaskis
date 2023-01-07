// TODO:Mirna make a function that extracts tweets from an accounts
// input will be a twitter handle for example (top_nexus, vitalik)
// output: an array of tweets and information about about it in the format
import type { NextApiRequest, NextApiResponse } from 'next'

// TODO:Mirna create an api that takes social media accounts and links to train an api on a particular topic.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('doing the thing')
  console.log('done the thing')

  return res.json({ status: 'worked' })
}
