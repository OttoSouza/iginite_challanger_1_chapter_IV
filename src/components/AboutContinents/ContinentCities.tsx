import React from "react";
import { Heading, Grid } from "@chakra-ui/react";
import Cities from "./Cities";
import { ContinentProps } from "../../pages/continents/[slug]";

export function ContinentCities({ continent }: ContinentProps) {
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
        {continent.all_cities.map((city) => (
          <Cities key={city.name} name={city.name} country={city.country} />
        ))}
      </Grid>
    </>
  );
}
