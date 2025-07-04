import React from 'react'
import NavBar from '../components/navbar/NavBar'
import ParallaxHero from '../components/parallaxHero/ParallaxHero'
import SectionComponent2 from '../components/sectionComponent2/SectionComponent2'
import PhotoSection from '../components/photoSection/PhotoSection'
import TextSection from '../components/textSection/TextSection'



const AcercaDeCentiel = () => {
  return (
    <>
    <NavBar></NavBar>
    <ParallaxHero/>
    <SectionComponent2>
        <PhotoSection
          title={"HIREF XSW"}
          image={"./TSE_3.png"}
          subtitle={
            "XSW es la gama de enfriadoras condensadas por agua con compresores scroll de HiRef."
          }
        />
        <TextSection
          title={"Título aqui"}
          text={
            "XSW es la gama de enfriadoras condensadas por agua con compresores scroll de HiRef."
          }
        />
      </SectionComponent2>
    
    </>
  )
}

export default AcercaDeCentiel