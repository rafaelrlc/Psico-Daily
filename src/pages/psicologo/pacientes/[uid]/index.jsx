import React from "react";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import Aviso from "@/components/Aviso";
import { useState, useEffect } from "react";
import AxiosApi from "@/services/api";
import ConsultaCard from "@/components/ConsultaCard";
const PacientePage = () => {
  const router = useRouter();
  const { privateApi } = AxiosApi();
  const [registros, setRegistros] = useState([]);
  const [consultas, setConsultas] = useState([]);

  const fetchItems = async () => {
    const userId = router.query.uid;
    if (userId) {
      try {
        const response = await privateApi.get(`/registro/${userId}`);
        console.log(response.data);
        setRegistros(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const response = await privateApi.get(`/consulta/${userId}`);
      console.log(response);
      setConsultas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [router.query.uid]); // Include router.query.uid as a dependency

  return (
    <div>
      <div className="md:h-full h-[calc(90vh-65px)] flex items-center mx-10 justify-start md:gap-14 mt-10">
        <div className="flex flex-col">
          <Divider style={{ width: "100%" }}>
            <h1
              className={`text-xl md:block  font-light text-gray-500 text-center`}
            >
              Registros
            </h1>
          </Divider>

          <div
            className={`flex sm:gap-5 md:gap-10 gap-0 justify-center items-center`}
          >
            <ul className="flex flex-col gap-4 h-[75vh]  w-[70vw] md:overflow-y-auto custom-scrollbar-mobile divide-y divide-gray-100">
              {registros.map((aviso) => (
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
          <div className="md:hidden block">
            <Divider style={{ width: "100%" }}>
              <h1 className="text-xl   font-light text-gray-500 text-center">
                Consultas
              </h1>
            </Divider>
          </div>

          <div className={`md:flex flex-col  md:w-[20vw] w-[70vw] h-[80vh]`}>
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
    </div>
  );
};

export default PacientePage;
