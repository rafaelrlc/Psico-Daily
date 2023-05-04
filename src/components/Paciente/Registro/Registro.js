import React, { useEffect, useState } from "react";
import IndividualRegistro from "./IndividualRegistro";
import NewRegistro from "./NewRegistro";
import { FaSearch } from "react-icons/fa";
import { fake_registros } from "../../../../utils/ficData";
import api from "@/services/api";
import { useAuth } from "@/context/auth/authProvider";
import { assetPrefix } from "../../../../next.config";
const Registro = () => {
  const [registros, setRegistros] = useState([]);
  const auth = useAuth();

  console.log("role atual", auth.role);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": auth.accessToken,
    },
  };

  const fetchItems = async () => {
    try {
      const response = await api.get("/registro", config);
      setRegistros(response.data.registers);
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const removeRegistro = async (id) => {
    const removeRegistroData = {
      registroId: id,
    };

    console.log(removeRegistroData);

    try {
      const response = await fetch("http://localhost:3000/registro", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": auth.accessToken,
        },
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
      const response = await api.post("/registro", newRegistroData, config);
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[86vh] md:gap-0 gap-10 mx-10 mt-[3vh] flex items-center">
      <div className="flex sm:gap-5 md:gap-10 gap-0 ">
        <div className="flex flex-col gap-8  max-h-[550px] overflow-y-auto custom-scrollbar-mobile">
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
        <div>
          <NewRegistro addRegistro={addRegistro}></NewRegistro>
        </div>
      </div>
    </div>
  );
};

export default Registro;
