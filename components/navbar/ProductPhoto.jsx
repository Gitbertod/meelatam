import React, { useRef, useEffect, useState } from 'react';
import styles from './ProductPhoto.module.css';
import gsap from "gsap";

const ProductPhoto = ({ estado3 }) => {
  const itemRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (estado3) {
      setVisible(true);
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    } else {
      // Desvanecer y ocultar luego de la animación
      gsap.to(itemRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setVisible(false)
      });
    }
  }, [estado3]);

  return (
    <div ref={itemRef} style={{ pointerEvents: 'none' }}>
      {visible && (
        <img
          className={styles.product}
          src={`/${estado3}.png`}
          alt={estado3}
        />
      )}
    </div>
  );
};

export default ProductPhoto;
