// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, CreateCompletionResponse, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type RequestData = {
  title: string;
  date: string;
  description: string;
  speaker: string;
  link: string;
};

type RespondeData = {
  result: string;
  data: CreateCompletionResponse;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespondeData | null>
) {
  const { title, date, description, speaker, link } = req.body as RequestData;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt({
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

    console.log(completion.data.choices[0]);

    res.status(200).json({
      result: completion?.data?.choices[0].text || "",
      data: completion.data,
    });
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
  
The output format for each piece of content is this and clearly split them with ||||:

----------------------------------------------------------------
  -Dates that should be posted: (<time in UTC>, <Time in UTC>)
  -Where: (Facebook, twitter, linkeding, etc)
  -Content: <text content including hashtags>
  -Image description: <optional img description I can use against Dalle>

----------------------------------------------------------------
  
  here is an example output:


  ***Tweet 1*** |||| 
  Dates that should be posted: (2/11/2022, 11am UTC) 
  where: Twitter 
  content: ¡Únete a nuestro evento! 🎊 Como aser una marka personal con Daniela Cervantes , CEO de Prime Axxion / Golden Capital FX / WomenCEO y fundadora del Club del Bitcoin. Descubre la importancia de crear tu marca con @andinodao #marcapersonal #startups #womenintech 
  image description: Logo of AndinoDAO
   

  ***Tweet 2*** |||| 
  Dates that should be posted: (2/11/2022, 11am UTC) 
  where: Twitter 
  content: ¡Únete a nuestro evento! 🎊 Como aser una marka personal con Daniela Cervantes , CEO de Prime Axxion / Golden Capital FX / WomenCEO y fundadora del Club del Bitcoin. Descubre la importancia de crear tu marca con @andinodao #marcapersonal #startups #womenintech 
  image description: Logo of AndinoDAO
   

  ***Tweet 3*** |||| 
  Dates that should be posted: (2/11/2022, 11am UTC) 
  where: Twitter 
  content: ¡Únete a nuestro evento! 🎊 Como aser una marka personal con Daniela Cervantes , CEO de Prime Axxion / Golden Capital FX / WomenCEO y fundadora del Club del Bitcoin. Descubre la importancia de crear tu marca con @andinodao #marcapersonal #startups #womenintech 
  image description: Logo of AndinoDAO
   

  `;
}
