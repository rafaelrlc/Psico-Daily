import React, { useEffect, useState } from "react";
import IndividualMessage from "./MessageComponents/IndividualMessage";
import AxiosApi from "@/services/api";
import ConsultaCard from "./ConsultaCard";
import { consultasFake } from "../../utils/data/ficData";
import { formatData } from "../../utils/functions";
const PsicologoMessages = () => {
  const { privateApi } = AxiosApi();

  const [avisos, setAvisos] = useState([]);
  const [consultas, setConsultas] = useState([]);

  const fetchConsultas = async () => {
    try {
      const response = await privateApi.get("/consulta");
      console.log(response);
      const formattedData = formatData(response);
      console.log(formattedData);
      setConsultas(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await privateApi.get("/mensagem");
      console.log(response.data);
      setAvisos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
    //fetchConsultas();
  }, []);

  const removeRegistro = async (id) => {
    const removeRegistroData = {
      registroId: id,
    };

    try {
      await fetch(`http://localhost:3005/registro/${id}`, {
        method: "DELETE",
        headers,
      });

      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(90vh-65px)] mx-10 flex items-center justify-start gap-10">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-5">Avisos de (nome_psicologo)</h1>
        <div className="flex sm:gap-5 md:gap-10 gap-0">
          <ul className="flex flex-col gap-4 h-[65vh]  w-[70vw] md:overflow-y-auto custom-scrollbar-mobile">
            {avisos.map((aviso) => (
              <li>
                <div>{aviso.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-[22vw] h-[65vh] mt-10 ">
          <div className="md:overflow-y-auto custom-scrollbar-mobile h-full">
            <ul className="flex flex-col gap-5">
              {consultasFake.map((consulta) => (
                <ConsultaCard
                  startDate={consulta.startDate}
                  key={consulta.id}
                  dia={consulta.dia}
                  hora={consulta.hora}
                  mes={consulta.mes}
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
