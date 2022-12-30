/* eslint-disable */
import gql from "graphql-tag";
export const SocialMediaContentFields = gql`
  fragment SocialMediaContentFields on SocialMediaContent {
    date
    where
    content
  }
`;
export const GenerateSocialEventContentMutation = gql`
  mutation GenerateSocialEventContentMutation($body: InputSocialEvent!) {
    generateSocialEventContent(body: $body) {
      ...SocialMediaContentFields
    }
  }
  ${SocialMediaContentFields}
`;
