export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type InputSocialEvent = {
  date: Scalars["String"];
  details: Scalars["String"];
  link: Scalars["String"];
  speaker: Scalars["String"];
  title: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  generateSocialEventContent?: Maybe<Array<SocialMediaContent>>;
};

export type MutationGenerateSocialEventContentArgs = {
  body: InputSocialEvent;
};

export type Query = {
  __typename?: "Query";
  getList: Scalars["String"];
};

export type SocialMediaContent = {
  __typename?: "SocialMediaContent";
  content: Scalars["String"];
  date: Scalars["String"];
  where: SocialMediaTypes;
};

export enum SocialMediaTypes {
  Facebook = "facebook",
  Linkedin = "linkedin",
  Twitter = "twitter",
  Whatsapp = "whatsapp",
}
