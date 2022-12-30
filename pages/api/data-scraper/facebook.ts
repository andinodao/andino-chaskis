// TODO:Mirna make a function that extracts fb posts from an accounts
// input will be a twitter handle for example (top_nexus, vitalik)
// output: an array of fb posts and information about about it in the format

export type Output = {
  content: string;
  date: string;
  likes: number;
  comments: string[];
};

export function getPostsForAnalysis(facebookAccount: string) {
  return [] as Output[];
}
