// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { openai } from "../../../pages/api/common";

type RequestData = {
  title: string;
  date: string;
  description: string;
  speaker: string;
  link: string;
};

export type SocialMediaPost = {
  date: string;
  content: string;
};

export type RespondeData = {
  data: SocialMediaPost[] | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespondeData | null>
) {
  const { title, date, description, speaker, link } = req.body as RequestData;

  try {
    console.log("model is training");
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generateTweets({
        title,
        date,
        description,
        speaker,
        link,
      }),
      temperature: 0.9,
      max_tokens: 2000,
      presence_penalty: 2,
    });

    const rawJson = completion.data.choices[0];
    console.log(rawJson.text);
    console.log(typeof rawJson.text);
    const parsedResponse = JSON.parse(rawJson.text || "");
    console.log(typeof parsedResponse);

    res.status(200).json({ ...parsedResponse });
  } catch (e) {
    console.log(e);

    res.status(400).json(null);
  }
}

function generateTweets({
  title,
  date,
  description,
  speaker,
  link,
}: RequestData) {
  return ` Andino DAO (https://twitter.com/andinodao) is hosting another event. 
  
  Write a set of tweets leading up to the event inviting people to register to the event. 
  Optimize the date and content to drive engagements and sign ups. 
###
  title:${title}
  date:${date}
  description:${description}
  speaker:${speaker}
  link to event: ${link}

  ###
type SocialMediaPost = {
  date: string;
  content: string;
};
###
The output format is a stringified json. The exported text should be ready to turn into a json object using JSON.parse() in javascript.
  ###
  {"data":[{"date":"Fri Nov 12 2022 10:00:00 GMT-0500 (Peru Standard Time)","content":"#CryptoMonday14 está por llegar! Únete el próximo 14 de enero a @andinodao para conocer cómo las pymes y empresas pequeñas pueden crear una aplicación Web 3 que incrementar sus ventas. ¡Con Paul Garcia, Tech Lead Upstream! #startups #PYMES #web3"},{"date":"Tue Dec 28 2021 13:00:00 GMT-0500 (Peru Standard Time)","content":"¿Estás interesado en descubrir cómo tu empresa puede aprovechar la nueva dimensión Web 3? No te pierdas CryptoMonday14 del 14 de enero con @PaulGarcia_tlu, tech lead Upstream, cuenta con tus compañías y vencer los retos de inversión 💰#startups #PYMES #web3 #emprendimiento"},{"date":"Mon Jan 04 2024 19:00:00 GMT-0500 (Peru Standard Time)","content":"Si eres dueño de una startup, no puedes perderte el próximo evento de @andinodao. CryptoMonday14 explora algunas claves fundamentales como el uso de la web 3 para incrementar tus ventas con el keynote de @PaulGarcia_tlu #startups #PYMES #web3"}]}
 

  `;
}