import {
  Box,
  Flex,
  Input,
  Image,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

import User from './User';

const QueryResult = ({
  loading,
  called,
  data,
  address,
}) => {
  return (
    <Box h='100%' border='1px'>
      <div>
        {called && data !== undefined && (
          <Flex>
            {data.tokens.nodes.map(({ token }) => {
              return (
                //   <div
                //     key={`${token.collectionAddress}-${token.tokenId}`}
                //   >
                //     <img src={token.metadata.image} />
                //   </div>
                <div
                  key={`${token.collectionAddress}-${token.tokenId}`}
                >
                  <Image
                    objectFit='cover'
                    src={token.image.mediaEncoding.original}
                  />
                  {console.log(
                    'data',
                    token.image.mediaEncoding.original
                  )}
                </div>
              );
            })}
          </Flex>
        )}
      </div>
    </Box>
  );
};

export default QueryResult;
