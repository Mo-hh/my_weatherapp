import React from "react";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import { WeatherContainer } from "./components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Flex
        backgroundColor='gray.100'
        minHeight='100vh'
        width='full'
        justifyContent='center'
        alignItems='center'
      >
        <WeatherContainer />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
