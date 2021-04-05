import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Pagination, Navigation } from "swiper";
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
SwipeCore.use([Navigation, Pagination]);
const img = [
  {
    id: 1,
    title: "Europa",
    description: "continente mais antigo",
    img: "/europe.png",
  },
  {
    id: 2,
    title: "Canada",
    description: "Continente mais bem feito",
    img: "/canada.jpg",
  },
];

export const SwiperComponent = () => {
  return (
    <Flex w="100%" h={["250px", "450px"]} maxW="1440px" mx="auto" mb="10">
      <Swiper
        slidesPerView={1}
        spaceBetween={300}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {img.map((img) => (
          <SwiperSlide key={img.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url(${img.img})`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              maxW="1440px"
            >
         
                <Link href={`/continents/${img.title}`}>
                  <a>
                    <Heading
                      fontSize={["2xl", "3xl", "5xl"]}
                      color="gray.100"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {img.title}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="gray.300"
                      fontSize={["1rem", "xl", "2xl"]}
                      mt={["2", "4"]}
                    >
                      {img.description}
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
