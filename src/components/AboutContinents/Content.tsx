import { Flex, Grid, Text, Stack } from "@chakra-ui/react";
import React from "react";

export function Content() {
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
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
            50
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
            50
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
            27
          </Text>
          <Text fontSize={["md", "xl"]} fontWeight={["medium", "bold"]}>
            cidades +100
          </Text>
        </Stack>
      </Flex>
    </Grid>
  );
}
