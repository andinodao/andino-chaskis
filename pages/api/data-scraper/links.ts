// TODO:Mirna make a function that extracts data from an accounts
// input will be a twitter handle for example (top_nexus, vitalik)
// output: an array of data and information about about it in the format

export type Output = {
  content: string
  date: string
  likes: number
  comments: string[]
}

function getRawTextForAnalysis(url: string) {
  return [] as Output[]
}
