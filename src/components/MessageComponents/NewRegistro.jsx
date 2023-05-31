import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newRegistroSchema } from "../../../utils/schemas/schemas";
const NewRegistro = ({ addRegistro }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newRegistroSchema),
  });

  const onSubmit = (data) => {
    const { title, description } = data;
    const new_data = { title, description, date: new Date() };
    addRegistro(new_data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-start gap-3 ">
        <input
          className={`rounded-lg w-full py-3 px-3 h-[6vh] text-black text-base border-[1px]  ${
            errors.title ? "border-red-500" : "border-gray-400"
          } outline-none box-border shadow-sm`}
          placeholder="Título"
          id="confirmPassword"
          {...register("title")}
        ></input>

        <textarea
          id="message"
          className={`block p-3 w-full h-[54vh] text-gray-900 rounded-lg border-[1px] ${
            errors.description ? "border-red-500" : "border-gray-400"
          }   text-base shadow-sm`}
          placeholder="Faça um novo registro..."
          style={{ whiteSpace: "pre-wrap" }}
          {...register("description")}
        ></textarea>
      </div>
      <div className="text-center mt-4">
        <button
          type="submit"
          className="focus:outline-none  text-white bg-[#574dc1] hover:bg-[#40379f] focus:ring-2  focus:ring-indigo-900 text-base rounded-lg px-12 py-2 w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default NewRegistro;
