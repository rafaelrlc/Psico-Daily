import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import useConfig from "../../../utils/functions/useConfig";
import api from "@/services/api";
import { useEffect } from "react";
import { useAuth } from "@/context/auth/authProvider";
import ConsultaCard from "@/components/ConsultaCard";
import PrivateRoute from "@/components/Routes/PrivateRoute";
const Consulta = () => {
  const { accessToken } = useAuth();
  const config = useConfig(accessToken);
  const [consultas, setConsultas] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await api.get("/consulta", config);
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
      <Navbar type="patient" />
      <PrivateRoute allowedRoute={"Paciente"}>
        <div className="m-10">
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
      </PrivateRoute>
    </div>
  );
};

export default Consulta;
