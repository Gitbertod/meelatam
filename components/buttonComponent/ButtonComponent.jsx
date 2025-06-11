import React from 'react'
import styles from "./ButtonComponent.module.css"

const ButtonComponent = ({text}) => {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

export default ButtonComponent