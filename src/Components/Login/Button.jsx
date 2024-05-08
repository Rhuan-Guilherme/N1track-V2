import React from 'react';
import styles from './Login.module.css';

const Button = ({ children }) => {
  return (
    <button
      className={`${styles.outline} bg-azul-600 p-3 px-8 rounded-lg font-Poppins uppercase font-semibold text-azul-50`}
    >
      {children}
    </button>
  );
};

export default Button;
