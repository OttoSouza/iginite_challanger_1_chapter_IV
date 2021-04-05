import {
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

interface BannerProps {
  imgUrl: string;
}
export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex width="100vw">
      {!isWideVersion ? (
        <Image src="/Banner_mobile.svg" display="block" width="100%" />
      ) : (
        <Image src="/Banner.svg" display="block" width="100%" />
      )}
    </Flex>
  );
}
