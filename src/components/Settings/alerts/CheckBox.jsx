import Switch from "@mui/material/Switch";
import { useState } from "react";

const CheckBox = ({ isChecked, label, description }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <div className="flex  md:items-center items-start justify-start gap-8">
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          checked={checked}
          onChange={handleChange}
        />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-gray-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-indigo-600"></div>
      </label>
      <div className="flex gap-5 md:flex-row flex-col">
        <h1 className="font-bold md:text-lg text-base">{label}</h1>
        <p className="text-base">({description})</p>
      </div>
    </div>
  );
};

export default CheckBox;
