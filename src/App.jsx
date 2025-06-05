import { useState } from "react";
import "./App.css";
import NavBar from "../components/navbar/NavBar";
import Container from "../components/container/Container";
import SectionComponent from "../components/sectionComponent/SectionComponent";
import SectionComponent2 from "../components/sectionComponent2/SectionComponent2";





function App() {
  return (
    <>
      
       <NavBar></NavBar>
       <Container></Container>
       <SectionComponent /> 
       <SectionComponent2></SectionComponent2>
        
       
       
      
    </>
  );
}

export default App;
