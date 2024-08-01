import { extendTheme } from "@chakra-ui/react";

const colors = {
  neutral: {
    100: "#FFFFFF",
    900: "#000000",
  },
  primary: {
    100: "#FCD9C1",
    200: "#FFD282",
    400: "#F68537",
    500: "#E07932",
  },
  secondary: {
    300: "#87491E",
    400: "#673817",
  },
};

const fonts = {
  body: "'Darker Grotesque', sans-serif",
  heading: "'Darker Grotesque', sans-serif",
};

export const theme = extendTheme({ colors, fonts });
