// TODO:Mirna make a function that extracts linkedin posts from an accounts
// input will be a twitter handle for example (top_nexus, vitalik)
// output: an array of linkedin posts and information about about it in the format

export type Output = {
  content: string
  date: string
  likes: number
  comments: string[]
}

function getLinkedInPostForAnalysis(linkedinHandle: string) {
  return [] as Output[]
}
