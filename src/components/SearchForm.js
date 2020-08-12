import { Flex, IconButton, Input } from "@chakra-ui/core";
import React from "react";

export const SearchForm = ({ searchValue, setSearchValue }) => {
  return (
    <Flex>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IconButton ml={2} aria-label='Search City' icon='search' />
    </Flex>
  );
};
