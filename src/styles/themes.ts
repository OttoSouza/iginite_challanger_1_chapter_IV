import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },

  styles: {
    global: (props) => ({
      bg: props.colorMode === "light" ? "" : "",
      color: props.colorMode === "light" ? "" : "",
    }),
  },
});
