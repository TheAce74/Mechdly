import { extendTheme } from "@chakra-ui/react";

const colors = {
  neutral: {
    100: "#FFFFFF",
    900: "#000000",
  },
  primary: {
    100: "#FCD9C1",
    400: "#F68537",
    500: "#E07932",
  },
  secondary: {
    300: "#87491E",
    400: "#673817",
  },
};

export const theme = extendTheme({ colors });
