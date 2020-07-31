import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      100: "#FBE1E2",
      200: "#F2A5A7",
      300: "#EB7174",
      400: "#E54548",
      500: "#E01F22",
      600: "#BA1A1C",
      700: "#9A1617",
      800: "#801213",
      900: "#6A0F10"
    }
  }
};

export default customTheme;
