import React from 'react'
import styles from "./CardsWrapper.module.css"

const CardsWraper = ({children}) => {
  return (
    <div className={styles.cardsWrapper}>{children}</div>
  )
}

export default CardsWraper