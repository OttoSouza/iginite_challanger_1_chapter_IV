import React from "react";
import { Heading, Grid } from "@chakra-ui/react";
import Cities from "./Cities";

export function ContinentCities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} my="10">
        Cidades + 100
      </Heading>
      <Grid
        w="100%"
        maxW="1440px"
        templateColumns={[
          "repeay(1, 1fr)",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr 1fr",
          "repeat(4, 1fr)",
        ]}
        gap={["10px", "20px"]}
        alignItems="center"
        justifyContent="center"
        mb="5"
      >
        <Cities />
        <Cities />
        <Cities />
        <Cities />
        <Cities />
      </Grid>
    </>
  );
}
