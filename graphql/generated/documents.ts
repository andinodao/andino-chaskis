/* eslint-disable */
import gql from "graphql-tag";
export const SocialMediaContentFields = gql`
  fragment SocialMediaContentFields on SocialMediaContent {
    date
    where
    content
  }
`;
export const GenerateSocialEventContent = gql`
  mutation GenerateSocialEventContent($body: InputSocialEvent!) {
    generateSocialEventContent(body: $body) {
      ...SocialMediaContentFields
    }
  }
  ${SocialMediaContentFields}
`;
