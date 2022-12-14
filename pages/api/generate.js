import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { title, date, description, speaker, link } = req.body;

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
    res
      .status(200)
      .json({ result: completion.data.choices[0].text, data: completion.data });
  } catch (e) {
    console.log(e);

    res.status(400).json({});
  }
}

function generatePrompt({ title, date, description, speaker, link }) {
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
  Dates that should be posted: (<time in UTC>, <Time in UTC>)
  where: (Facebook, twitter, linkeding, etc)
  content: <text content including hashtags>
  image description: <optional img description I can use against Dalle>

----------------------------------------------------------------
  
  
  `;
}
