import { GetStaticProps, GetStaticPaths } from "next";
import { Header } from "../../components/Header";
import { Spinner, VStack, Flex, Image } from "@chakra-ui/react";
import { BannerCotinent } from "../../components/BannerCotinent";
import { AboutContinents } from "../../components/AboutContinents";
import { getPrismic } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { useRouter } from "next/dist/client/router";
import React from "react";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    about_continent: string;
    image: string;
    number_cities: string;
    number_languages: string;
    number_countries: string;
    all_cities: [
      {
        name: string;
        country: string;
      }
    ];
  };
}

export default function Continents({ continent }: ContinentProps) {
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
      <VStack>
        <Header hasSlug={!!continent.slug} />
        <BannerCotinent
          title={continent.title}
          slider_image={continent.image}
        />
        <AboutContinents continent={continent} />
      </VStack>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismic();
  const continents = await prismic.query([
    Prismic.Predicates.at("document.type", "continents"),
  ]);

  const paths = continents.results.map((continent) => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismic();

  const response = await prismic.getByUID("continents", String(slug), {});

  const continent = {
    slug: response.uid,
    title: response.data.title,
    about_continent: response.data.about_continent,
    image: response.data.slider_image.url,
    number_cities: response.data.number_cities,
    number_languages: response.data.number_languages,
    number_countries: response.data.number_countries,
    all_cities: response.data.all_cities,
  };

  return {
    props: { continent },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
