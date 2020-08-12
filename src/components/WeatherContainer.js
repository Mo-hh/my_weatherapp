import { Box, Text, Heading } from "@chakra-ui/core";
import React, { useState } from "react";
import { SearchForm } from "./";
import ky from "ky";
import groupby from "lodash.groupby";

const TODAY = new Date().toISOString().split("T")[0];

export const WeatherContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const searchParams = new URLSearchParams();

      searchParams.append("q", searchValue);
      searchParams.append("appid", "24e76e893d88a408ec9ca1575eafdbc0");
      searchParams.append("units", "metric");

      const result = await ky
        .get("https://api.openweathermap.org/data/2.5/forecast", {
          searchParams,
        })
        .json();

      const listWithDateTime = result.list.map((data) => {
        const [date, time] = data?.dt_txt.split(" ");

        return {
          ...data,
          date,
          time,
        };
      });

      const groupedList = groupby(listWithDateTime, "date");

      const { [TODAY]: ignoredTodayObject, ...restDaysList } = groupedList;

      const newResult = {
        ...result,
        list: restDaysList,
      };

      setData(newResult);
      console.log(newResult);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

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
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isLoading={isLoading}
        fetchData={fetchData}
      />
      {isError && <Text color='red.500'>City not found</Text>}
      {data?.city?.name && <Heading>{data?.city?.name}</Heading>}

      <Box>days</Box>
      <Box>hourly forcase</Box>
    </Box>
  );
};
