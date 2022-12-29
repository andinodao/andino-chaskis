import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = {
  hashtags: string[];
  handles: string[];
};

type RespondeData = {
  result: string;
};

// TODO:Mirna create an api that takes social media accounts and links to train an api on a particular topic.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespondeData | null>
) {
  const { hashtags, handles } = req.body as RequestData;
}
