import React from 'react'
import FooterComponent from '../components/footer/FooterComponent'
import NavBar from '../components/navbar/NavBar';
import HeroSection from '../components/heroSection/HeroSection';
import CardsWraper from '../components/cardsWrapper/CardsWrapper';
import CardBig from '../components/cardBig/CardBig';

const Noticias = () => {
  return (
    <>
    <NavBar></NavBar>
    <HeroSection title={"Noticias"} backgroundImage={"/heroNews.jpg"}></HeroSection>
    <CardsWraper><CardBig></CardBig></CardsWraper>
    <FooterComponent></FooterComponent>
    </>
  )
}

export default Noticias