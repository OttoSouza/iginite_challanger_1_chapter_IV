import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export function BannerCotinent() {
  return (
    <>
      <Flex
        width="100%"
        height={["150px", "350px", "500px"]}
        bgImage="url('/europe.png')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="100% 50%"
        px={["0", "0", "32"]}
        pt={["0", "0", "0", "72"]}
        alignItems="center"
        justifyContent={["center", "center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "center", "left"]}
          fontSize={["3xl", "5xl"]}
          color="whitesmoke"
        >
          Europa
        </Heading>
      </Flex>
    </>
  );
}
