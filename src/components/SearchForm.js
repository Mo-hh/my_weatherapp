import { Flex, IconButton, Input, Heading } from "@chakra-ui/core";
import React from "react";
import { useParams, useHistory } from "react-router-dom";

export const SearchForm = ({ isLoading }) => {
  const { cityName } = useParams();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      cityName: { value },
    } = e.target;
    history.push(`/${value}`);
  };

  return (
    <>
      <Heading
        as='h6'
        mb='4'
        bg='gray.100'
        textAlign='center'
        padding='4'
        borderRadius='1rem'
        boxShadow='2rem'
      >
        Weather App using React Hooks
      </Heading>
      <Flex as='form' mb={4} onSubmit={onSubmit}>
        <Input name='cityName' defaultValue={cityName} />
        <IconButton
          type='submit'
          ml={2}
          isLoading={isLoading}
          aria-label='Search City'
          icon='search'
        />
      </Flex>
    </>
  );
};
