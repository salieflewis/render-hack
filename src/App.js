import './App.css';
import Search from './components/Search';
import Tokens from './components/Tokens';
import {
  Flex,
  Spacer,
  HStack,
  Center,
} from '@chakra-ui/react';

function App() {
  return (
    <Center h='100vh'>
      <Search>
        <Tokens />
      </Search>
    </Center>
  );
}

export default App;
