import React from "react";
import InputBar from "./InputBar";
const EditData = () => {
  return (
    <form className="flex flex-col gap-4 md:w-[55vw] w-[75vw]">
      <div className="flex gap-8">
        <InputBar
          place={"Nome"}
          id={"c_password"}
          label={"Nome"}
          aditionalStyles={"basis-1/2"}
        />
        <InputBar
          place={"@username"}
          id={"newpassword"}
          label={"Username"}
          aditionalStyles={"basis-1/2"}
        />
      </div>

      <InputBar place={"Seu Email"} id={"useremail"} label={"Email"} />
      <InputBar place={"Senha Atual"} id={"c_password"} label={"Senha Atual"} />
      <InputBar place={"Nova Senha"} id={"newpassword"} label={"Nova Senha"} />

      <div className="flex gap-3 md:justify-start justify-between">
        <button
          type="submit"
          className="w-[100px] py-2 rounded-2xl bg-white border-[#574dc1] border-2 text-indigo-700 hover:bg-[#574dc1] hover:text-white"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-[100px] py-2 rounded-2xl bg-[#574dc1] hover:bg-[#41389d] text-white"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default EditData;
