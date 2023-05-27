import React, { useEffect, useState } from "react";
import AxiosApi from "@/services/api";
import IndividualMessage from "./MessageComponents/IndividualMessage";
import NewRegistro from "./MessageComponents/NewRegistro";

const PacienteRegistros = () => {
  const [registros, setRegistros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { privateApi } = AxiosApi();

  const fetchItems = async () => {
    try {
      const response = await privateApi.get("/registro");
      console.log(response);
      setRegistros(response.data.registers);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addRegistro = async (data) => {
    const { title, description, date } = data;
    const newRegistro = { titulo: title, text: description, data: date };
    try {
      await privateApi.post("/registro", newRegistro);
    } catch (error) {
      console.log(error);
    } finally {
      fetchItems();
    }
  };

  const removeRegistro = async (id) => {
    try {
      await privateApi.delete(`/registro/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      fetchItems();
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(90vh-65px)]  flex flex-col items-center justify-center">
      <div className="flex md:gap-10">
        <div className="flex flex-col items-center">
          <h1 className="py-5 text-base text-gray-800">Seus Registros</h1>

          <div className="flex flex-col gap-4 h-[70vh] md:w-[65vw] w-[80vw] md:overflow-y-auto custom-scrollbar-mobile">
            {isLoading ? (
              <div className="flex animate-pulse">
                <div className="w-full ">
                  <ul className="space-y-4">
                    {Array.from({ length: 5 }, (_, index) => (
                      <li
                        key={index}
                        className="w-full h-[11vh] bg-gray-100 rounded-md"
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              registros.map((register) => (
                <IndividualMessage
                  key={register._id}
                  title={register.titulo}
                  description={register.text}
                  date={register.data}
                  id={register._id}
                  removeRegistro={removeRegistro}
                />
              ))
            )}
          </div>
        </div>

        <div className="items-center justify-center flex-col text-xl hidden md:flex">
          <h1 className="py-4 text-base text-gray-800">Novo Registro</h1>
          <NewRegistro addRegistro={addRegistro}></NewRegistro>
        </div>
      </div>
    </div>
  );
};

export default PacienteRegistros;
