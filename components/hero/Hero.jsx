import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.heroContainer} >
        <img className={styles.heroImage}src="/trifasica-4.png"/>
        <div className={styles.containerText}>
            <h2 className={styles.title}>Somos expertos en respaldo de energía</h2>
            <h3 className={styles.text}>Contamos con la categoría de respaldo energético más variada y amplia del mercado.</h3>
            <button className={styles.btn}>Mas informacíon</button>
        </div>
    </div>
  )
}

export default Hero