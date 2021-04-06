import { Flex, Grid, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { ContinentProps } from "../../pages/continents/[slug]";

export function Content({ continent }: ContinentProps) {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap={2}
    >
      <Text textAlign="justify" fontSize={["lg", "2xl"]}>
        {continent.about_continent}
      </Text>

      <Flex
        alignItems={["flex-start", "center"]}
        justify={["flex-start", "flex-start", "space-evenly", "center"]}
        gridGap="12"
      >
        <Stack alignItems={["flex-start", "center"]} spacing="-2">
          <Text
            fontSize={["3xl", "5xl"]}
            fontWeight="medium"
            color="orange.300"
          >
            {continent.number_cities}
          </Text>
          <Text fontSize={["md", "xl"]} fontWeight={["medium", "bold"]}>
            paises
          </Text>
        </Stack>
        <Stack alignItems={["flex-start", "center"]} spacing="-2">
          <Text
            fontSize={["3xl", "5xl"]}
            fontWeight="medium"
            color="orange.300"
          >
            {continent.number_languages}
            
          </Text>
          <Text fontSize={["md", "xl"]} fontWeight={["medium", "bold"]}>
            linguas
          </Text>
        </Stack>
        <Stack alignItems={["flex-start", "center"]} spacing="-2">
          <Text
            fontSize={["3xl", "5xl"]}
            fontWeight="medium"
            color="orange.300"
          >
            {continent.number_cities}
          </Text>
          <Text fontSize={["md", "xl"]} fontWeight={["medium", "bold"]}>
            cidades +100
          </Text>
        </Stack>
      </Flex>
    </Grid>
  );
}
