import React from "react";
import { FaTrash } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

const IndividualRegistro = ({
  title,
  description,
  date,
  id,
  removeRegistro,
}) => {
  return (
    <div className="flex lg:flex-row flex-col gap-7 items-center justify-between h-full bg-gray-50 p-5 rounded-xl sm:mr-3 mr-0 text-center sm:text-start">
      <div className="flex items-center gap-5">
        {" "}
        <div className="hidden xl:flex flex-col font-bold text-xl">
          <p>14/05</p>
          <p>22:30</p>
        </div>
        <div>
          <span className="font-bold text-[#3d358d]">{title} : </span>
          {description}
        </div>
      </div>

      <div className="flex lg:flex-col flex-row gap-5 items-center justify-center text-3xl">
        <div className="flex  xl:hidden flex-col font-bold text-xl">
          <p>14/05</p>
          <p>22:30</p>
        </div>
        <div className="flex gap-5">
          <BsPencilFill
            className="hover:cursor-pointer text-[#565454]"
            onClick={() => {}}
          />
          <FaTrash
            className="hover:cursor-pointer text-[#565454]"
            onClick={() => {
              removeRegistro(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualRegistro;
