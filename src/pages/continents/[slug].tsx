import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";
import { VStack } from "@chakra-ui/react";
import { BannerCotinent } from "../../components/BannerCotinent";
import { AboutContinents } from "../../components/AboutContinents";


export default function Continents() {

  
  return (
    <>
      <VStack>
        <Header hasSlug={true} />
        <BannerCotinent />
        <AboutContinents />
      </VStack>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return {
    props: {},
  };
};
