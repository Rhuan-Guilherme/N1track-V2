import React from 'react';

const ButtonSlide = ({ icon, name, ...props }) => {
  return (
    <button
      {...props}
      className="w-10 h-10 rounded-md flex items-center justify-center text-cinza-800 transition-all hover:bg-azul-700 hover:text-cinza-50 md:w-full md:justify-start md:gap-2 md:p-2 dark:hover:bg-azul-600 dark:text-cinza-200 dark:hover:text-cinza-50"
    >
      <span className="material-symbols-outlined text-2xl md:text-xl lg:text-2xl">
        {icon}
      </span>
      <p className="hidden md:block font-Roboto font-medium md:text-sm lg:text-base text-nowrap">
        {name}
      </p>
    </button>
  );
};

export default ButtonSlide;
