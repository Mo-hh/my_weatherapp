import React from "react";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import { WeatherContainer } from "./components";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

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
    </ThemeProvider>
  );
};

export default App;
