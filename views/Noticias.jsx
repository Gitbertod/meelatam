import React from 'react'
import FooterComponent from '../components/footer/FooterComponent'
import NavBar from '../components/navbar/NavBar';
import HeroSection from '../components/heroSection/HeroSection';

const Noticias = () => {
  return (
    <>
    <NavBar></NavBar>
    <HeroSection title={"Noticias"} backgroundImage={"/heroNews.jpg"}></HeroSection>
    <FooterComponent></FooterComponent>
    </>
  )
}

export default Noticias