import { useState } from "react";
import "./App.css";
import NavBar from "../components/navbar/NavBar";
import Container from "../components/container/Container";
import SectionComponent from "../components/sectionComponent/SectionComponent";
import SectionComponent2 from "../components/sectionComponent2/SectionComponent2";
import PhotoSection from "../components/photoSection/PhotoSection";
import TextSection from "../components/textSection/TextSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container></Container>
      <SectionComponent />
      <SectionComponent2>
        <PhotoSection title={"TSE"} image={"./TSE_3.png"} />
        <TextSection title={"Título aqui"} />
      </SectionComponent2>
      <SectionComponent2>
        <TextSection title={"Título aqui"} />
        <PhotoSection title={"TVA 1"} image={"./TVA_1.png"} />
      </SectionComponent2>
      <SectionComponent2>
        
      </SectionComponent2>
    </>
  );
}

export default App;
