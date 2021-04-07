import {
  Flex,
  Image,
  Box,
  Icon,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {RiSunLine, RiMoonLine } from "react-icons/ri";
import {MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
interface HeaderProps {
  hasSlug?: boolean;
}
export function Header({ hasSlug }: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode();

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
              <Icon as={MdKeyboardArrowLeft} boxSize={8}/>
            </a>
          </Link>
          <Image src="/Logo.svg" w={["80px", "184px"]} />
          <Box></Box>
        </Flex>
      ) : (
        <Flex
          w="100%"
          maxW="1440px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box></Box>
          <Image src="/Logo.svg" w={["80px", "184px"]} />
          <IconButton
            aria-label="sun and moon"
            icon={
              colorMode === "light" ? (
                <RiSunLine size="20" />
              ) : (
                <RiMoonLine size="20" />
              )
            }
            variant="outline"
            colorScheme="gray"
            isRound={true}
            onClick={toggleColorMode}
          />
        </Flex>
      )}
    </Flex>
  );
}
