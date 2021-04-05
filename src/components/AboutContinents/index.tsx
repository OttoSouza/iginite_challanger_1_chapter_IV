import { Flex } from "@chakra-ui/react";
import React from "react";
import { Content } from "./Content";
import { ContinentCities } from "./ContinentCities";

export function AboutContinents() {
  return (
    <Flex w="100%" maxW="1440px" mx="auto" pt="20" flexDir={"column"} mb="10" p="5" >
      <Content />
      <ContinentCities />
    </Flex>
  );
}
