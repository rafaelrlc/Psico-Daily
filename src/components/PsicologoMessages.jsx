import React, { useEffect, useState } from "react";
import AxiosApi from "@/services/api";
import ConsultaCard from "./ConsultaCard";
import { Divider } from "@mui/material";
import Aviso from "./Aviso";

import { BsPencilSquare } from "react-icons/bs";
const PsicologoMessages = () => {
  const { privateApi } = AxiosApi();

  const [avisos, setAvisos] = useState([]);
  const [consultas, setConsultas] = useState([]);
  const [isConsultas, setIsConsultas] = useState(false);

  const fetchItems = async () => {
    try {
      const response = await privateApi.get("/mensagem");
      console.log("aviso:", response.data);
      setAvisos(response.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await privateApi.get("/consulta");
      console.log(response);
      setConsultas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="md:h-full h-[calc(90vh-65px)] flex items-center justify-center md:gap-14 mt-10">
      <div
        onClick={() => setIsConsultas(!isConsultas)}
        className="md:hidden p-4 bg-[#574dc1] hover:bg-[#40379f] hover:cursor-pointer rounded-3xl fixed text-white bottom-5 right-6 z-[99]"
      >
        <BsPencilSquare />
      </div>
      <div className="flex flex-col">
        <Divider style={{ width: "100%" }}>
          <h1
            className={`text-xl md:block ${
              isConsultas ? "hidden md:block" : "md:block block"
            }   font-light text-gray-500 text-center`}
          >
            Avisos
          </h1>
        </Divider>

        <div
          className={`flex ${
            isConsultas && "hidden md:flex"
          } sm:gap-5 md:gap-10 gap-0 justify-center items-center`}
        >
          <ul className="flex flex-col gap-4 h-[75vh]  w-[70vw] md:overflow-y-auto custom-scrollbar-mobile divide-y divide-gray-100">
            {avisos.map((aviso) => (
              <Aviso
                text={aviso.text}
                data={aviso.data}
                senderName={aviso.senderName}
                key={aviso._id}
                id={aviso._id}
              />
            ))}
          </ul>
        </div>
      </div>
      <div>
        {isConsultas && (
          <div className="md:hidden block">
            <Divider style={{ width: "100%" }}>
              <h1 className="text-xl   font-light text-gray-500 text-center">
                Consultas
              </h1>
            </Divider>
          </div>
        )}

        <div
          className={`md:flex flex-col ${
            !isConsultas && "hidden md:flex"
          } md:w-[22vw] w-[70vw] h-[80vh]`}
        >
          <div className="md:overflow-y-auto custom-scrollbar-mobile h-full mt-5">
            <ul className="flex flex-col gap-5">
              {consultas.map((consulta) => (
                <ConsultaCard
                  startDate={consulta.startDate}
                  key={consulta._id}
                  id={consulta._id}
                  pacienteId={consulta.pacienteId}
                  psicologoId={consulta.psicologoId}
                  fetchItems={fetchItems}
                  desc={consulta.desc}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsicologoMessages;
