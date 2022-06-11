import React, { useState, useCallback } from 'react';
import {
  Input,
  Button,
  Grid,
  SimpleGrid,
  Box,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import {
  ApolloProvider,
  useQuery,
  useLazyQuery,
  gql,
} from '@apollo/client';

import { getNfts, getPosters } from '../queries.js';
import QueryResult from './QueryResult';

const Search = () => {
  const [address, setAddress] = useState('');
  const [loadNfts, { loading, called, data }] =
    useLazyQuery(getPosters);

  return (
    <Grid
      templateColumns={'1fr 512px'}
      templateAreas={`"gallery sidebar"`}
    >
      <Flex area='gallery'>
        <QueryResult
          loading={loading}
          called={called}
          data={data}
          address={address}
        />
      </Flex>
      <Flex
        area={'sidebar'}
        h='96px'
        m={4}
        p={4}
        bg='white'
        border='1px'
        borderColor='gray.100'
        rounded='lg'
        justify='center'
      >
        <Input
          size='lg'
          width='312px'
          m={2}
          placeholder='Search by wallet address or ENS'
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <Button
          size='lg'
          m={2}
          colorScheme='blue'
          onClick={() =>
            loadNfts({
              variables: { ownerAddress: address },
            })
          }
        >
          Search
        </Button>
      </Flex>
    </Grid>
  );
};

export default Search;
