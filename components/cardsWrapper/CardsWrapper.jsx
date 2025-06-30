import React from 'react'
import styles from "./CardsWrapper.module.css"

const CardsWraper = ({children}) => {
  return (
    <div className={styles.cardsWraper}>{children}</div>
  )
}

export default CardsWraper