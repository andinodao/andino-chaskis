import generateLinkedinPost from '../../services/generators/events/linkedin'
import generateTweets from '../../services/generators/events/tweets'
import {
  Resolvers,
  SocialMediaTypes,
  SocialMediaContent
} from '../generated/generated'

const resolver: Resolvers = {
  Query: {},
  Mutation: {
    generateSocialEventContent: async (_, { body }) => {
      const [tweets, linkedInPosts] = await Promise.all([
        generateTweets(body),
        generateLinkedinPost(body)
      ])

      const resultSet = [
        ...(tweets || []).map(v => ({
          ...v,
          __typename: 'SocialMediaContent',
          where: SocialMediaTypes.twitter
        })),
        ...(linkedInPosts || []).map(v => ({
          ...v,
          __typename: 'SocialMediaContent',
          where: SocialMediaTypes.linkedin
        }))
      ] as SocialMediaContent[]

      return resultSet
    }
  },

  SocialMediaContent: {
    where: v => v.where,
    content: v => v.content,
    date: v => v.date
  }
}

export default resolver
