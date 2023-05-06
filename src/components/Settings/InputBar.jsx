import React from "react";

const InputBar = ({ label, place, type, id, aditionalStyles }) => {
  return (
    <div className={`mb-4 ${aditionalStyles}`}>
      <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
        {label}
      </label>
      <input
        className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={place}
      />
    </div>
  );
};

export default InputBar;
