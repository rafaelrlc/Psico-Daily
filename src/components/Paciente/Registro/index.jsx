import React, { useEffect, useState } from "react";
import IndividualRegistro from "./IndividualRegistro";
import NewRegistro from "./NewRegistro";
import { useAuth } from "@/context/auth/authProvider";

const Registro = () => {
  const [registros, setRegistros] = useState([]);
  const auth = useAuth();

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:3005/registro", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": auth.accessToken,
        },
      });

      const data = await response.json();
      console.log(data);
      setRegistros(data.registers);
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
      await fetch("http://localhost:3005/registro", {
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
      const response = await fetch("http://localhost:3005/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": auth.accessToken,
        },
        body: JSON.stringify(newRegistroData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:h-[calc(100vh-85px)] h-[calc(90vh-65px)]  flex flex-col items-center justify-center">
      <div className="flex sm:gap-5 md:gap-10 gap-0 ">
        <div className="flex flex-col gap-8  h-[80vh] md:w-[65vw] w-[80vw] md:overflow-y-auto custom-scrollbar-mobile">
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
