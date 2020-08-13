import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/core";
import React, { useState, useEffect } from "react";
import { DayItem, SearchForm, HourItem } from "./";
import ky from "ky";
import groupby from "lodash.groupby";
import { useParams } from "react-router-dom";

const TODAY = new Date().toISOString().split("T")[0];

export const WeatherContainer = () => {
  const { cityName } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (cityName) {
      fetchData();
    }
  }, [cityName]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const searchParams = new URLSearchParams();

      searchParams.append("q", cityName);
      searchParams.append("appid", "24e76e893d88a408ec9ca1575eafdbc0");
      searchParams.append("units", "metric");

      const result = await ky
        .get("https://api.openweathermap.org/data/2.5/forecast", {
          searchParams,
        })
        .json();

      const listWithDateTime = result.list.map((data) => {
        //* convert dateTime string to an array of [date,time]
        //* we need date to group the result by date.
        // eslint-disable-next-line no-unused-vars
        const [date, time] = data?.dt_txt.split(" "); //  ? //

        return {
          ...data,
          date,
        };
      });

      const groupedList = groupby(listWithDateTime, "date");

      const { [TODAY]: _ignoredTodayObject, ...restDaysList } = groupedList;

      const firstDate = Object.keys(restDaysList)?.[0];
      console.log(firstDate);

      if (firstDate) {
        setSelectedDate(firstDate);
      }

      const newResult = {
        ...result,
        list: restDaysList,
      };
      console.log(newResult);

      setData(newResult);
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
      <SearchForm isLoading={isLoading} fetchData={fetchData} />
      {isError && <Text color='red.500'>City not found</Text>}
      {data?.city?.name && (
        <Heading mb={4}>
          {data?.city?.name}, {data?.city?.country}
        </Heading>
      )}

      {data?.list && (
        <Grid
          gridGap={4}
          mb={12}
          gridTemplateColumns={["repeat(3,1fr)", "repeat(5,1fr)"]}
        >
          {Object.entries(data?.list).map(([date, list]) => (
            <DayItem
              key={date}
              date={date}
              list={list}
              isSelected={selectedDate === date}
              SetActive={() => setSelectedDate(date)}
            />
          ))}
        </Grid>
      )}

      {data?.list && (
        <Flex justifyContent='center'>
          <Grid gridGap={4} width={["full", 1 / 2]}>
            {selectedDate &&
              data?.list?.[selectedDate]?.map((hourData, index, array) => (
                <HourItem
                  key={hourData?.dt}
                  isLast={array?.length === index + 1}
                  {...hourData}
                />
              ))}
          </Grid>
        </Flex>
      )}
    </Box>
  );
};
