import {
  Flex,
  Image,
  Box,
  Icon,
} from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";
interface HeaderProps {
  hasSlug?: boolean;
}
export function Header({ hasSlug }: HeaderProps) {
  
  return (
    <Flex
      as="header"
      width="100%"
      mx="auto"
      px="1rem"
      my="1rem"
      alignItems="center"
      justifyContent="center"
    >
      {hasSlug ? (
        <Flex
          w="100%"
          maxW="1440px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftLine} />
            </a>
          </Link>
          <Image src="/Logo.svg" w={["80px", '184px']}/>
          <Box></Box>
        </Flex>
      ) : (
        <Image src="/Logo.svg" w={["80px", '184px']}/>
      )}
    </Flex>
  );
}
