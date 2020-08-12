import { Flex, IconButton, Input } from "@chakra-ui/core";
import React from "react";

export const SearchForm = ({ isLoading }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { cityName } = e.target;

    console.log(cityName);
  };

  return (
    <Flex as='form' mb={4}>
      <Input name='cityName' />
      <IconButton
        type='submit'
        ml={2}
        isLoading={isLoading}
        aria-label='Search City'
        icon='search'
      />
    </Flex>
  );
};
