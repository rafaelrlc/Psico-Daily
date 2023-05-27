import React, { useState } from "react";

import { useAuth } from "@/context/auth/authProvider";
import AxiosApi from "@/services/api";

const AdicionarPacientes = () => {
  const { privateApi } = AxiosApi();

  const [email, setEmail] = useState("");
  const data = {
    pacEmail: email,
  };
  const submitHandle = async () => {
    console.log("Email:", email);
    try {
      const response = await privateApi.post("/notif", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-[80vh]">
      <h1 className="font-bold text-xl">Adicionar Paciente</h1>
      <div className="flex flex-col justify-center items-center gap-3 w-[80vw]">
        <input
          className="rounded-lg w-full py-3 px-3 text-black text-base border-[1px] border-gray-500 outline-none box-border shadow"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <button
          type="submit"
          className="focus:outline-none text-white bg-[#574dc1] hover:bg-[#40379f] focus:ring-2  focus:ring-indigo-900 text-base rounded-lg px-12 py-2"
          onClick={submitHandle}
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default AdicionarPacientes;
