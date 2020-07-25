import { gql } from '@apollo/client';

export const ARTICLE = gql`
  query MyQuery {
    post {
      title
    }
  }
`;
