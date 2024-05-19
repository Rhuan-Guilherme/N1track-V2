import React from 'react';

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="inline-block mb-2 font-Poppins text-sm text-cinza-900 dark:text-cinza-200"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="bg-cinza-100 border border-cinza-200 rounded-md w-full focus:outline-none hover:outline-none focus:border-azul-500 hover:border-azul-500 hover:bordera focus:bg-cinza-50 hover:bg-cinza-50 dark:bg-cinza-950 dark:shadow dark:border-cinza-950 dark:text-cinza-200 dark:hover:bg-cinza-950 dark:hover:border-cinza-400 dark:focus:bg-cinza-950 dark:focus:border-azul-600 transition-all p-2 pr-10"
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
