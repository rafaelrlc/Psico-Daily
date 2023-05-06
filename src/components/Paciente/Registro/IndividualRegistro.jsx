import React, { useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

import { BiTrash } from "react-icons/bi";

const IndividualRegistro = ({
  title,
  description,
  date,
  id,
  removeRegistro,
}) => {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const hora = date.slice(11, 16);
  const data = new Date(date);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const diaFormatado = dia < 10 ? "0" + dia : dia;
  const mesFormatado = mes < 10 ? "0" + mes : mes;
  return (
    <div
      className="relative flex lg:flex-row flex-col gap-7 items-center justify-between h-full border-[1px] border-gray-500 p-5 rounded-xl sm:mr-3 mr-0 text-center sm:text-start"
      onMouseEnter={() => setShowCloseButton(true)}
      onMouseLeave={() => setShowCloseButton(false)}
    >
      <div className="flex flex-col md:flex-row gap-3 items-center justify-cente">
        <div className="flex gap-5 items-center justify-center">
          <div className="hidden xl:flex flex-col font-bold text-xl">
            <p>
              {diaFormatado}/{mesFormatado}
            </p>
            <p>{hora}</p>
          </div>
          <div className="break-all">
            <span className="font-bold text-[#3d358d] break-all">
              {title} :
            </span>{" "}
            {description}
          </div>
        </div>

        <div className="flex lg:flex-col flex-row gap-5 items-center justify-center text-3xl">
          <div className="flex  xl:hidden flex-col font-bold text-xl">
            <p>
              {diaFormatado}/{mesFormatado}
            </p>
            <p>{hora}</p>
          </div>
        </div>

        <div />
      </div>

      {showCloseButton && (
        <div className="absolute  right-0">
          <BiTrash
            className="hover:cursor-pointer hover:text-red-600 text-[#535353] text-2xl m-[0.5rem]"
            onClick={() => {
              removeRegistro(id);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default IndividualRegistro;
