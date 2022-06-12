import {
  Box,
  Flex,
  Input,
  Image,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

const QueryResult = ({
  loading,
  called,
  data,
  address,
}) => {
  return (
    <Box
      h='100%'
      border='1px'
      borderColor='gray.100'
      rounded='lg'
      m={4}
    >
      <div>
        {called && data !== undefined && (
          <Flex wrap='wrap' justify='space-evenly'>
            {data.tokens.nodes.map(({ token }) => {
              if (
                token.image != null &&
                token.image.mediaEncoding.__typename !=
                  'UnsupportedEncodingTypes'
              )
                return (
                  <Box
                    m={2}
                    p={2}
                    key={`${token.collectionAddress}-${token.tokenId}`}
                  >
                    <Image
                      boxSize='288px'
                      objectFit='cover'
                      src={
                        token.image.mediaEncoding.original
                      }
                    />
                  </Box>
                );
            })}
          </Flex>
        )}
      </div>
    </Box>
  );
};

export default QueryResult;
