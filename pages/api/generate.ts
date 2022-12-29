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
export type SocialMediaPost = {
  date: string;
  where: SocialMediaTypes;
  content: string;
};

export type RespondeData = {
  data: SocialMediaPost[] | null;
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

function generatePrompt({
  title,
  date,
  description,
  speaker,
  link,
}: RequestData) {
  return ` Andino DAO(https://twitter.com/andinodao) is hosting another event. 
  
  Write a marketing strategy in spanish to drive traffic to this event by peaking interests of startup founders.
  Here are details about the event:

  title:${title}
  date:${date}
  description:${description}
  speaker:${speaker}
  link to event: ${link}

  include specific tweets and social media messages as well as well as times and platforms we should be posting on. 
  We want to share as much content as possible up until the date. 
  Share a bit of history of the speaker and how he might be an expert in the subject matter.
  
  Make sure it is clear when to schedule each(date and times) post and where. Also ensure we optimize for impressions. 
  Here is a general data type we will use:

  
type SocialMediaTypes = "twitter" | "facebook" | "linkedin";
type SocialMediaPost = {
  date: string;
  where: SocialMediaTypes;
  content: string;
};



The output format is a stringified json. The exported text should be ready to turn into a json object using JSON.parse() in javascript.
  
  {"data":[{"date":"Fri Nov 12 2022 10:00:00 GMT-0500 (Peru Standard Time)","where":"twitter","content":"#CryptoMonday14 está por llegar! Únete el próximo 14 de enero a @andinodao para conocer cómo las pymes y empresas pequeñas pueden crear una aplicación Web 3 que incrementar sus ventas. ¡Con Paul Garcia, Tech Lead Upstream! #startups #PYMES #web3"},{"date":"Tue Dec 28 2021 13:00:00 GMT-0500 (Peru Standard Time)","where":"linkedIn","content":"¿Estás interesado en descubrir cómo tu empresa puede aprovechar la nueva dimensión Web 3? No te pierdas CryptoMonday14 del 14 de enero con @PaulGarcia_tlu, tech lead Upstream, cuenta con tus compañías y vencer los retos de inversión 💰#startups #PYMES #web3 #emprendimiento"},{"date":"Mon Jan 04 2024 19:00:00 GMT-0500 (Peru Standard Time)","where":"facebook","content":"Si eres dueño de una startup, no puedes perderte el próximo evento de @andinodao. CryptoMonday14 explora algunas claves fundamentales como el uso de la web 3 para incrementar tus ventas con el keynote de @PaulGarcia_tlu #startups #PYMES #web3"}]}
 

  `;
}
