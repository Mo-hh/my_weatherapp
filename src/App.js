import React from "react";
import { ThemeProvider, CSSReset, Flex, theme } from "@chakra-ui/core";
import { WeatherContainer, Header, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header />
      <Router>
        <Flex
          backgroundColor='gray.100'
          minHeight='100vh'
          width='full'
          justifyContent='center'
          alignItems='center'
        >
          <Switch>
            <Route
              exact
              path={["/", "/:cityName"]}
              children={<WeatherContainer />}
            />
          </Switch>
        </Flex>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
