import React from 'react';
import styles from './Login.module.css';

const Input = ({ label, type, name, value, error, onChange, onBlur }) => {
  return (
    <div className="flex flex-col gap-1 font-Roboto font-medium text-cinza-900 mb-6">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={`${styles.outline} bg-cinza-100 rounded-lg p-3`}
      />
      {error && <p className="font-normal text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
