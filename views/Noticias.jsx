import React from "react";
import FooterComponent from "../components/footer/FooterComponent";
import NavBar from "../components/navbar/NavBar";
import HeroSection from "../components/heroSection/HeroSection";
import CardsWraper from "../components/cardsWrapper/CardsWrapper";
import CardBig from "../components/cardBig/CardBig";
import { news } from "../src/newsData.js";

const Noticias = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection
        title={"Noticias"}
        backgroundImage={"/heroNews.jpg"}
      ></HeroSection>
      <CardsWraper>
        {news.map((e) => (
          <CardBig title={e.title} description={e.description} foto={e.foto} />
        ))}
      </CardsWraper>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default Noticias;
