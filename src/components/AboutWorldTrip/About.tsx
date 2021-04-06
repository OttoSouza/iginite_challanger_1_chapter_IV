import {
  Image,
  Heading,
  useBreakpointValue,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";

interface AboutProps {
  img?: string;
  title: string;
}

export function About({ img, title }: AboutProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  return (
    <Flex
      w={["60px", "60px", "60px", "80px"]}
      h={["60px", "60px", "60px", "80px"]}
      flexDirection={["row", "column"]}
      alignItems="center"
      justifyContent="center"
      gridGap="6"
      mb="14"
    >
      {isWideVersion ? (
        <Image src={img} w={180} h={85} />
      ) : (
        <Text color="yellow.400" fontSize="4xl" >
          •
        </Text>
      )}
      <Heading color="gray.600" fontSize={["md", "lg", "xl", "2xl"]}>
        {title}
      </Heading>
    </Flex>
  );
}
