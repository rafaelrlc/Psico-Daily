import React, { useEffect, useState } from "react";
import AxiosApi from "@/services/api";
import IndividualMessage from "./MessageComponents/IndividualMessage";
import NewRegistro from "./MessageComponents/NewRegistro";
import { BsPencilSquare } from "react-icons/bs";
import { Divider } from "@mui/material";
const PacienteRegistros = () => {
  const [registros, setRegistros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const [newRegister, setNewRegister] = useState(false);

  const { privateApi } = AxiosApi();

  const fetchItems = async () => {
    try {
      const response = await privateApi.get("/registro");
      setRegistros(response.data.registers);
      if (response.data.registers.length > 0) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
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

  console.log(registros.length);
  return (
    <div>
      <div
        onClick={() => setNewRegister(!newRegister)}
        className="md:hidden p-4 bg-[#574dc1] hover:bg-[#40379f] hover:cursor-pointer rounded-3xl fixed text-white bottom-5 right-6 z-[99]"
      >
        <BsPencilSquare />
      </div>
      <div className="md:h-[calc(100vh-80px)] h-[calc(90vh-65px)]  flex flex-col items-center justify-center">
        <div className={`flex md:gap-10`}>
          {!isEmpty && (
            <div
              className={`flex flex-col items-center ${
                newRegister && "hidden md:block"
              }`}
            >
              <Divider style={{ width: "80%" }}>
                <h1 className="text-xl mb-3 font-light text-gray-500 text-center">
                  Registros
                </h1>
              </Divider>

              <div className="flex flex-col gap-4 h-[70vh] md:w-[65vw] w-[80vw] md:overflow-y-auto custom-scrollbar-mobile">
                {isLoading ? (
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
          )}

          <div
            className={`items-center justify-center flex-col text-xl ${
              !newRegister && "hidden md:flex"
            }`}
          >
            <Divider style={{ width: "80%" }}>
              <h1 className="text-xl mb-3 font-light text-gray-500 text-center">
                Novo Registro
              </h1>
            </Divider>
            <div
              className={`${
                isEmpty ? "sm:w-[60vw] w-[90vw]" : "md:w-[25vw]"
              } w-[90vw]`}
            >
              <NewRegistro
                addRegistro={addRegistro}
                registroLength={registros.length}
              ></NewRegistro>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteRegistros;
