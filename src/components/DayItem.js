import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/core";

export const DayItem = ({ id, list, isSelected, SetActive }) => {
  const dayObject = new Date(id);
  const dayName = dayObject.toLocaleDateString("en", { weekday: "short" });
  const { icon } = list?.[0]?.weather?.[0];

  const maxTempArray = list?.map(({ main: { temp_max } }) => temp_max);
  const minTempArray = list?.map(({ main: { temp_min } }) => temp_min);

  const maxTemp = Math.round(Math.max(...maxTempArray));
  const minTemp = Math.round(Math.min(...minTempArray));

  return (
    <Button
      display='flex'
      variant='unstyled'
      _hover={{ backgroundColor: "gray.100" }}
      flexDirection='column'
      alignItems='center'
      height='auto'
      p={4}
      borderWidth={1}
      borderStyle='solid'
      borderColor={isSelected ? "gray.200" : "transparent"}
      onClick={SetActive}
    >
      <Box>{dayName}.</Box>
      <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Text fontSize='sm'>
        <Text as='span' color='gray.500'>
          {maxTemp}°
        </Text>
        {"  "}
        <Text as='span'>{minTemp}°</Text>
      </Text>
    </Button>
  );
};
