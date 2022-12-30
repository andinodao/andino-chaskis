export default `enum SocialMediaTypes {
  twitter
  linkedin
  facebook
  whatsapp
}

type SocialMediaContent {
  date: String!
  where: SocialMediaTypes!
  content: String!
}

input InputSocialEvent {
  title: String!
  date: String!
  details: String!
  link: String!
  speaker: String!
}

type Mutation {
  generateSocialEventContent(body: InputSocialEvent!): [SocialMediaContent!]
}

type Query {
  getList: String!
}
`;