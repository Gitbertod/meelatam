import React from "react";
import ContactoForm from "../components/form-contacto/ContactoForm";
import NavBar from "../components/navbar/NavBar";
import FooterComponent from "../components/footer/FooterComponent";
import HeroSection from "../components/heroSection/HeroSection";
import { Location } from "../components/location/Location";

const Contacto = () => {
  return (
    <>
      <NavBar />
      <HeroSection title={"CONTACTO"}></HeroSection>

      <ContactoForm />
      <Location></Location>
      <FooterComponent />
    </>
  );
};

export default Contacto;
