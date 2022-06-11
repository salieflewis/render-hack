import './App.css';
import Search from './components/Search';
import QueryResult from './components/QueryResult';

import {
  Flex,
  Spacer,
  HStack,
  Center,
  Grid,
  Box,
  Heading,
} from '@chakra-ui/react';

function App() {
  return <Search />;
}

export default App;

{
  /* <Grid
      templateColumns={'3fr 512px'}
      templateAreas={`gallery sidebar`}
    >
      <Center h='100vh'>
        <Box area={'gallery'}>
          <Heading>Gallery</Heading>
        </Box>
      </Center>
      <Center h='100vh'>
        <Search area={'sidebar'} />
      </Center>
    </Grid> */
}
