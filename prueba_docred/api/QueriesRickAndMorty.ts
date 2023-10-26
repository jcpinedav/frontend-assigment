import { gql } from "@/node_modules/@apollo/client/index";

export const QUERY_EPISODES =  gql`
query getEpisodes($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
        id
    }
}`

export const QUERY_CHARATERS =  gql`
query getCharacters($page: Int!) {
    characters(page: $page) {
        info {
          count
        }
        results {
          name
        }
    }
}`