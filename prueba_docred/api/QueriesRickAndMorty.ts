import { gql } from "@apollo/client";

export const QUERY_EPISODES = gql`
  query getEpisodes($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
    }
  }
`;

export const QUERY_CHARATERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        status
        image
        gender
        type
      }
    }
  }
`;
