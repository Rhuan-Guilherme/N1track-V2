import React from 'react';

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-2 font-Poppins text-sm text-cinza-900"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="bg-cinza-100 border border-cinza-200 rounded-md p-1 w-full"
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
