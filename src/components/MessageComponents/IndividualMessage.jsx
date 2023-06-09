import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";

const IndividualMessage = ({
  title,
  description,
  date,
  id,
  removeRegistro,
  aviso,
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
      className="relative flex lg:flex-row flex-col gap-7 items-center justify-between h-full border-b-[1px] border-b-gray-300 p-5  sm:mr-3 mr-0 text-center sm:text-start  md:max-h-[180px] max-h-[250px] font-light"
      onMouseEnter={() => setShowCloseButton(true)}
      onMouseLeave={() => setShowCloseButton(false)}
    >
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center ">
        <div className="flex gap-5 items-center justify-center mb-1">
          <div className="hidden xl:flex flex-col  text-xl">
            <p>
              {diaFormatado}/{mesFormatado}
            </p>
            <p>{hora}</p>
          </div>
          <div className="break-all">
            <span className="font-light text-[#3d358d] text-lg break-all">
              {title} :
            </span>{" "}
            {description}
          </div>
        </div>

        <div className="flex lg:flex-col flex-row gap-5 items-center justify-center text-3xl">
          <div className="flex  xl:hidden flex-col font-light text-xl">
            <p>
              {diaFormatado}/{mesFormatado}
            </p>
            <p>{hora}</p>
          </div>
        </div>

        <div />
      </div>

      {!aviso && showCloseButton && (
        <div>
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

export default IndividualMessage;
