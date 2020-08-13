import React from "react";

import { Box, Text } from "@chakra-ui/core";

export const Footer = () => {
  return (
    <Box as='footer' borderTop='1px gray.800' py={8}>
      <Text fontSize='sm' color='gray.800' textAlign='center'>
        Special Thanks to: Stackoverflow, MDN, React & Github
      </Text>
    </Box>
  );
};
