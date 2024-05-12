import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-32 px-2 py-2 bg-azul-700 text-cinza-50 rounded-md font-Roboto font-medium text-sm dark:bg-gradient-to-b from-azul-500 "
    >
      {children}
    </button>
  );
};

export default Button;
