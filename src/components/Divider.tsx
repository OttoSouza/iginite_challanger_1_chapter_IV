import { Box, Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider() {
  return (
    <Box py="10" pt={["10","20"]} >
      <ChakraDivider height={0.5} width={90} bg="black" />
    </Box>
  );
}
