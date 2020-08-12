import { Box } from "@chakra-ui/core";
import React, { useState } from "react";
import { SearchForm } from "./";

export const WeatherContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      p='8'
      shadow='md'
      backgroundColor='white'
      borderRadius='5px'
      width='full'
      mx='4'
      maxWidth='4xl'
    >
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <Box>days</Box>
      <Box>hourly forcase</Box>
    </Box>
  );
};
