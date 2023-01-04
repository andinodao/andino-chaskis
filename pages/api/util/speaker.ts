import type { NextApiRequest, NextApiResponse } from 'next'
import { mainSpeakerFunction } from '../../../services/speakers'

// TODO:Mirna create an api that takes social media accounts and links to train an api on a particular topic.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('doing the thing')
  await mainSpeakerFunction()
  console.log('done the thing')

  return res.json({ status: 'worked' })
}
