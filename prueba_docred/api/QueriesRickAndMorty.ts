import { gql } from "@apollo/client";

export const QUERY_EPISODES = gql`
  query getEpisodes($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
    }
  }
`;
//Definision de la query para el uso de personajes, se recibe una prop que es una página, que retorna dos onjetos, info: Cantidad de resultados que tiene, resultados: información de los personajes
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
