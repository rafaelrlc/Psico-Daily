import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/auth/authProvider";
import api from "@/services/api";
import IndividualMessage from "./MessageComponents/IndividualMessage";
import useConfig from "../../utils/functions/useConfig";
const PsicologoMessages = () => {
  const [registros, setRegistros] = useState([]);
  const { accessToken } = useAuth();
  const config = useConfig(accessToken);

  const fetchItems = async () => {
    try {
      const response = await api.get("/registro", config);
      console.log(response);
      setRegistros(response.data.registers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const removeRegistro = async (id) => {
    const removeRegistroData = {
      registroId: id,
    };

    try {
      await fetch("http://localhost:3005/registro", {
        method: "DELETE",
        headers,
        body: JSON.stringify(removeRegistroData),
      });

      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const changeCheckMark = (messageId, active) => {};

  return (
    <div className="h-full mt-10 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-5">Mensagens de (nome_psicologo)</h1>
      <div className="flex sm:gap-5 md:gap-10 gap-0 ">
        <div className="flex flex-col gap-4 h-[70vh]  w-[90vw] md:overflow-y-auto custom-scrollbar-mobile">
          {registros.map((register) => (
            <IndividualMessage
              title={register.titulo}
              description={register.text}
              date={register.data}
              id={register._id}
              key={register._id}
              removeRegistro={removeRegistro}
              aviso={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PsicologoMessages;
