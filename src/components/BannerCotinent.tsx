import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
interface BannerContinentProps {
  title: string;
  slider_image: string;
}

export function BannerCotinent({ title, slider_image }: BannerContinentProps) {
  return (
    <>
      <Flex
        width="100%"
        height={["150px", "350px", "500px"]}
        bgImage={`url('${slider_image}')`}
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
          {title}
        </Heading>
      </Flex>
    </>
  );
}
