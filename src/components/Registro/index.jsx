import React, { useEffect, useState } from "react";
import IndividualRegistro from "./IndividualRegistro";
import NewRegistro from "./NewRegistro";
import { useAuth } from "@/context/auth/authProvider";
import api from "@/services/api";
const Registro = () => {
  const [registros, setRegistros] = useState([]);
  const auth = useAuth();

  const headers = {
    "Content-Type": "application/json",
    "x-access-token": auth.accessToken,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": auth.accessToken,
    },
  };

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

  const addRegistro = async (data) => {
    console.log(data);
    const newRegistroData = {
      titulo: data.title,
      text: data.description,
      data: data.date,
    };

    try {
      await fetch("http://localhost:3005/registro", {
        method: "POST",
        headers,
        body: JSON.stringify(newRegistroData),
      });

      await fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:h-[80vh] h-[calc(90vh-65px)]  flex flex-col items-center justify-center">
      <h1 className="py-10 text-xl font-bold text-gray-800">Seus Registros</h1>
      <div className="flex md:gap-10">
        <div className="flex flex-col gap-4 h-[70vh] md:w-[65vw] w-[80vw] md:overflow-y-auto custom-scrollbar-mobile">
          {registros.map((register) => (
            <IndividualRegistro
              title={register.titulo}
              description={register.text}
              date={register.data}
              id={register._id}
              key={register._id}
              removeRegistro={removeRegistro}
            />
          ))}
        </div>
        <div className="items-center justify-center flex-col  text-xl hidden md:flex">
          <NewRegistro addRegistro={addRegistro}></NewRegistro>
        </div>
      </div>
    </div>
  );
};

export default Registro;
