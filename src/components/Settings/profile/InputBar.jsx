import React from "react";

const InputBar = ({ label, placeHolder, type, aditionalStyles, showError }) => {
  return (
    <div className={`mb-4 ${aditionalStyles}`}>
      <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
        {label}
      </label>
      <input
        className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeHolder}
      />
      <span className="text-red-600 text-sm">{showError}</span>
    </div>
  );
};

export default InputBar;
