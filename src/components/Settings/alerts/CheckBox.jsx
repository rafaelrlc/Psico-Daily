import Switch from "@mui/material/Switch";
import { useState } from "react";

const CheckBox = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex  md:items-center items-start justify-start gap-8">
      <div className="mt-1 md:mt-0">
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          color="primary"
        />
      </div>
      <div className="flex gap-5 md:flex-row flex-col">
        <h1 className="font-bold md:text-lg text-base">{props.label}</h1>
        <p className="text-base">({props.description})</p>
      </div>
    </div>
  );
};

export default CheckBox;
