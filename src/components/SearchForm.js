import { Flex, IconButton, Input } from "@chakra-ui/core";
import React from "react";

export const SearchForm = ({
  searchValue,
  setSearchValue,
  isLoading,
  fetchData,
}) => {
  return (
    <Flex mb={4}>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IconButton
        ml={2}
        isLoading={isLoading}
        aria-label='Search City'
        icon='search'
        onClick={() => fetchData()}
      />
    </Flex>
  );
};
