import React, { useState } from "react";
import { useEffect } from "react";
import ConsultaCard from "@/components/ConsultaCard";
import AxiosApi from "@/services/api";

const Consulta = () => {
  const { privateApi } = AxiosApi();
  const [consultas, setConsultas] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await privateApi.get("/consulta");
      console.log(response);

      const formattedData = response.data.map((item) => {
        const startDate = new Date(item.startDate);
        console.log(startDate);
        const hora = startDate.toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        const diaFormatado = startDate.toLocaleString("en-US", {
          day: "2-digit",
        });

        const mesFormatado = startDate.toLocaleString("en-US", {
          month: "2-digit",
        });

        const formattedItem = {
          ...item,
          startDate: `${diaFormatado}/${mesFormatado} às ${hora}`,
          dia: diaFormatado,
          hora: hora,
          mes: mesFormatado,
        };

        return formattedItem;
      });

      console.log(formattedData);

      setConsultas(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl pb-5">Consultas</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 items-center justify-center">
          {consultas.map((consulta) => (
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
  );
};

export default Consulta;
