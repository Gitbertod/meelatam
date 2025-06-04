import React from 'react'
import styles from './ProductPhoto.module.css';

const ProductPhoto = ({estado3}) => {
  return (
    <div>
    
      <img className={styles.product} src={`/${estado3}.jpg`}/>
      
    </div>
  )
}

export default ProductPhoto