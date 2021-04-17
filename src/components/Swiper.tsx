import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Pagination, Navigation } from "swiper";
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
SwipeCore.use([Navigation, Pagination]);
// const img = [
//   {
//     id: 1,
//     title: "Europa",
//     description: "continente mais antigo",
//     img: "/europe.png",
//   },
//   {
//     id: 2,
//     title: "Canada",
//     description: "Continente mais bem feito",
//     img: "/canada.jpg",
//   },
// ];

interface ContinentProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface SwiperComponentProps {
  continents: ContinentProps[];
}

export const SwiperComponent = ({ continents }: SwiperComponentProps) => {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1440px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
        slidesPerView={1}
        spaceBetween={180}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              maxW="1440px"
            >
              <Link href={`/continents/${continent.slug}`}>
                <a>
                  <Heading
                    fontSize={["2xl", "3xl", "5xl"]}
                    color="gray.300"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={["1rem", "xl", "2xl"]}
                    mt={["2", "4"]}
                  >
                    {continent.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
