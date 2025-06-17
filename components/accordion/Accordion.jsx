import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Accordion.module.css';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(prev => !prev);

    if (!isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.4,    
        opacity: 1,
        paddingTop: 15,
        paddingBottom: 15,
      });
      gsap.to(iconRef.current, {
        rotate: 180,
        duration: 0.3,
       
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3, 
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <div className={styles.accordion}>
      <button className={styles.header} onClick={toggleAccordion}>
        <span className={styles.title}>{title}</span>
        <FaChevronDown className={styles.icon} ref={iconRef} />
      </button>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ height: 0, opacity: 0, overflow: 'hidden', paddingTop: 0, paddingBottom: 0 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
