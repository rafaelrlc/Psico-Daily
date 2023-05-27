import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newRegistroSchema } from "../../../utils/schemas/schemas";

const NewRegistro = ({ addRegistro, registroLength }) => {
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
    <div className="sm:block hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`${
            registroLength > 0 ? "w-[25vw]" : "w-[90vw]"
          } flex flex-col justify-center items-start gap-3 `}
        >
          <input
            className="rounded-lg w-full py-3 px-3 h-[6vh] text-black text-base border-[1px] border-gray-500 outline-none box-border shadow"
            placeholder="Título"
            id="confirmPassword"
            {...register("title")}
          ></input>
          <span className="text-red-600 mt-1 text-sm">
            {errors?.title?.message}
          </span>

          <textarea
            id="message"
            className="block p-3 w-full h-[52vh] text-gray-900 rounded-lg border-[1px] border-gray-500 shadow text-base"
            placeholder="Faça um novo registro..."
            style={{ whiteSpace: "pre-wrap" }}
            {...register("description")}
          ></textarea>
          <span className="text-red-600 mt-1 text-sm">
            {errors?.description?.message}
          </span>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="focus:outline-none text-white bg-[#574dc1] hover:bg-[#40379f] focus:ring-2  focus:ring-indigo-900 text-base rounded-lg px-12 py-2 w-full"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRegistro;
