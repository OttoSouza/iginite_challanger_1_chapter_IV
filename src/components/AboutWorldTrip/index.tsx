import { GridItem, Grid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { About } from "./About";

export default function AboutWorlTrip() {
  return (
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(5, 1fr)",
      ]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1440px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <About title="Vida Noturna" img="/cocktail1.svg" />
      </GridItem>
      <GridItem>
        <About title="Praia" img="/surf 1.svg" />
      </GridItem>
      <GridItem>
        <About title="Moderno" img="/building 1.svg" />
      </GridItem>
      <GridItem>
        <About title="Classico" img="/museum 1.svg" />
      </GridItem>
      <GridItem colSpan={[2, 2, 1]}>
        <About title="E mais" img="/earth 1.svg" />
      </GridItem>
    </Grid>
  );
}
