import React from "react";
import { theme } from "@chakra-ui/core";

const customIcons = {
  icon2: {
    path: <g fill='currentColor'></g>,
  },
};

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default customTheme;
