import { Flex } from "@chakra-ui/react";
import React from "react";
import { ContinentProps } from "../../pages/continents/[slug]";
import { Content } from "./Content";
import { ContinentCities } from "./ContinentCities";



export function AboutContinents({ continent }: ContinentProps) {
  
  return (
    <Flex
      w="100%"
      maxW="1440px"
      mx="auto"
      pt="20"
      flexDir={"column"}
      mb="10"
      p="5"
    >
      <Content continent={continent}/>
      <ContinentCities continent={continent}/>
    </Flex>
  );
}
