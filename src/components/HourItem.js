import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/core";

export const HourItem = ({ weather, main, dt, isLast }) => {
  const { icon, description } = weather?.[0];
  const { temp } = main;

  const dtPlusOneHour = dt + 3 * 60 * 60; //* adding three hours(60 sec * 60 Min) to orginal dt

  const timeObject = new Date(dt * 1000);
  const timePlusOneHourObject = new Date(dtPlusOneHour * 1000);

  const time = timeObject.toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
  });
  const timePlusOneHour = timePlusOneHourObject.toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
  });

  return (
    <Flex
      width='full'
      justifyContent='flex-start'
      alignItems='center'
      borderBottomWidth={1}
      borderBottomColor={isLast ? "transparent" : "gray.200"}
    >
      <Box>
        <Text fontSize='lg'>
          {time} - {timePlusOneHour}
        </Text>
        <Text fontSize='md' color='gray.800'>
          {description}
        </Text>
      </Box>
      <Box ml='auto'>
        <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </Box>
      <Box>
        <Text fontSize='xl' fontWeight='bold'>
          {Math.round(temp)}℃
        </Text>
      </Box>
    </Flex>
  );
};
