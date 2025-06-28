import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.accordion}>
      <button className={styles.header} onClick={toggleAccordion}>
        <span className={styles.title}>{title}</span>
        <FaChevronDown
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
        />
      </button>
      <div
        className={`${styles.content} ${isOpen ? styles.open : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
