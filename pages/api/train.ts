// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CreateCompletionResponse } from "openai";
import { openai } from "./common";

type RequestData = {
  hashtags: string[];
  handles: string[];
};

type RespondeData = {
  result: string;
  data: CreateCompletionResponse;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespondeData | null>
) {
  const { hashtags, handles } = req.body as RequestData;

  // try {
  //   const completion = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: "",
  //     temperature: 0.9,
  //     max_tokens: 2000,
  //     presence_penalty: 2,
  //   });

  //   console.log(completion.data.choices[0]);

  //   res.status(200).json({
  //     result: completion?.data?.choices[0].text || "",
  //     data: completion.data,
  //   });
  // } catch (e) {
  //   console.log(e);

  //   res.status(400).json(null);
  // }
}
