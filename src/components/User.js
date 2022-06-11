import '../App.css';
import React, { useState, useCallback } from 'react';

import { SmallCloseIcon } from '@chakra-ui/icons';

import {
  Input,
  Button,
  SimpleGrid,
  Box,
  Flex,
  Spacer,
  Text,
  Icon,
} from '@chakra-ui/react';

const User = ({ address }) => {
  return (
    <Flex>
      <Text>{address}</Text>
      <SmallCloseIcon />
    </Flex>
  );
};

export default User;
