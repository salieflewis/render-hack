import '../App.css';
import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

const Search = ({ children }) => {
  const [address, setAddress] = useState('');

  return (
    <div>
      <Input
        size='lg'
        width='500px'
        placeholder='Search by wallet address or ENS'
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      {console.log(address)}

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { address });
        }
        return child;
      })}
    </div>
  );
};

export default Search;
