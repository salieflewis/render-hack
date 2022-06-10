import {
  ApolloProvider,
  useQuery,
  useLazyQuery,
  gql,
} from '@apollo/client';
import { Button } from '@chakra-ui/react';
import '../App.css';

import { SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';

export const getNfts = gql`
  query ($ownerAddress: [String!]) {
    tokens(
      where: { ownerAddresses: $ownerAddress }
      pagination: { limit: 8 }
      networks: { chain: MAINNET, network: ETHEREUM }
    ) {
      nodes {
        token {
          collectionAddress
          collectionName
          metadata
        }
      }
    }
  }
`;

const Tokens = ({ address }) => {
  const [loadNfts, { called, loading, data }] =
    useLazyQuery(getNfts, {
      variables: { ownerAddress: address },
    });

  if (called && loading) return <p>Loading...</p>;
  if (!called) {
    return (
      <Button
        size='lg'
        mt={2}
        ml={4}
        mr={2}
        mb={3.5}
        onClick={() => loadNfts()}
      >
        Search
      </Button>
    );
  }

  console.log(data);

  return (
    <SimpleGrid columns={4}>
      {data.tokens.nodes.map(({ token }) => {
        console.log(token);
        return (
          <div>
            <div key={token.metadata.image}>
              <img src={token.metadata.image} />
            </div>
            {/* <div key={token.collectionName}>
              {token.collectionName}
            </div> */}
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default Tokens;
