import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
    </ThemeProvider>
  );
};

export default App;
