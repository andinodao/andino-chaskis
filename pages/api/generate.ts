// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import generateLinkedinPost from "../../services/generators/events/linkedin";
import generateTweets from "../../services/generators/events/tweets";

type RequestData = {
  title: string;
  date: string;
  description: string;
  speaker: string;
  link: string;
};

export enum SocialMediaTypes {
  twitter,
  facebook,
  linkedin,
}
export type SocialMediaPostResponse = {
  date: string;
  where: SocialMediaTypes;
  content: string;
};

export type RespondeData = {
  data: SocialMediaPostResponse[] | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespondeData | null>
) {
  const body = req.body as RequestData;

  try {
    const [tweets, linkedInPosts] = await Promise.all([
      generateTweets(body),
      generateLinkedinPost(body),
    ]);

    const resultSet = [
      ...tweets?.map((v) => ({ ...v, where: SocialMediaTypes.twitter })),
      ...linkedInPosts?.map((v) => ({
        ...v,
        where: SocialMediaTypes.linkedin,
      })),
    ];

    res.status(200).json({ data: resultSet });
  } catch (e) {
    console.log(e);

    res.status(400).json(null);
  }
}
