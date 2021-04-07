import Head from "next/head";
import { VStack, Heading, Spinner, Flex, Image} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { SwiperComponent } from "../components/Swiper";
import React from "react";
import AboutWorlTrip from "../components/AboutWorldTrip/index";
import { useRouter } from "next/dist/client/router";
import { GetStaticProps } from "next";
import { getPrismic } from "../services/prismic";
import Prismic from "@prismicio/client";


interface HomeProps {
  continents: {
    slug: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
  const { isFallback } = useRouter();


  if (isFallback) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        w="100vw"
        h="100vh"
        flexDir="column"
        gridGap={6}
      >
        <Image src="/Logo.svg" />
        <Spinner
          thickness="2px"
          speed="0.7s"
          emptyColor="gray.200"
          color="orange.300"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <VStack>
        <Header />

       
        <Banner />

        <VStack w="100%" alignItems="center" padding="4">
          <AboutWorlTrip />
          <Divider />


          <Heading
            textAlign="center"
            fontWeight="500"
            mb={["5", "14"]}
            pb={["3", "1"]}
            fontSize={["lg", "3xl", "4xl"]}
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Heading>

          <SwiperComponent continents={continents} />
        </VStack>
      </VStack>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismic();
  const response = await prismic.query([
    Prismic.predicates.at("document.type", "continents"),
  ]);

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      description: continent.data.description,
      image: continent.data.slider_image.url,
    };
  });

  return {
    props: { continents },
    revalidate: 10,
  };
};
