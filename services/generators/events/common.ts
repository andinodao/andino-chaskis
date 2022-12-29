export type SocialMediaPost = {
  date: string;
  content: string;
};

export type ExpectedOpenAIResponse = {
  data?: SocialMediaPost[] | null;
};
