// TODO:Mirna make a function that extracts tweets from an accounts
// input will be a twitter handle for example (top_nexus, vitalik)
// output: an array of tweets and information about about it in the format

export type Output = {
  content: string;
  date: string;
  likes: number;
  comments: string[];
};

export function getTweetsForAnalysis(twitterHandle: string) {
  return [] as Output[];
}
