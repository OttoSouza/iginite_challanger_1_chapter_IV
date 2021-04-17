import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: (props) => ({
      "html, body": {
        bg: props.colorMode === "light" ? "gray.50" : "",
      },
      "hr":{
        bg: props.colorMode === "light" ? "black" : "white"
      }
    }),
  },
});
