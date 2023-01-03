import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  hashtags: string[]
  handles: string[]
}

type RespondeData = {
  result: string
}

// TODO:Mirna create an api that returns models
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespondeData | null>
) {
  const { hashtags, handles } = req.body as RequestData
}
