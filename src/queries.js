import { gql } from '@apollo/client';

export const getNfts = gql`
  query ($ownerAddress: [String!]) {
    tokens(
      where: { ownerAddresses: $ownerAddress }
      pagination: { limit: 32 }
      networks: { chain: MAINNET, network: ETHEREUM }
    ) {
      nodes {
        token {
          collectionAddress
          collectionName
          metadata
          tokenId
        }
      }
    }
  }
`;

export const getPosters = gql`
  query ($ownerAddress: [String!]) {
    tokens(
      where: { ownerAddresses: $ownerAddress }
      pagination: { limit: 16 }
    ) {
      nodes {
        token {
          collectionAddress
          tokenId
          image {
            mediaEncoding {
              ... on ImageEncodingTypes {
                large
                poster
                original
                thumbnail
              }
            }
          }
        }
      }
    }
  }
`;
