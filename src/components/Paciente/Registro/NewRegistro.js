import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newRegistroSchema } from "../../../../utils/schemas/schemas";
import { v4 as uuidv4 } from "uuid";

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
    const new_data = { title, description, id: uuidv4(), date: new Date() };
    addRegistro(new_data);
    reset();
  };

  return (
    <div className="sm:block hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="xl:w-[440px] md:w-[350px] w-[300px] flex flex-col justify-center items-start gap-3">
          <input
            className="rounded-lg w-full py-3 px-3   text-black text-base border-2 border-gray-300 outline-none box-border mt-2"
            placeholder="Título"
            id="confirmPassword"
            {...register("title")}
          ></input>
          <span className="text-red-600 mt-1 text-sm">
            {errors?.title?.message}
          </span>

          <textarea
            id="message"
            className="block p-3 w-full h-[50vh] text-gray-900  rounded-lg border-2 border-gray-300"
            placeholder="Faça seu registro..."
            {...register("description")}
          ></textarea>
          <span className="text-red-600 mt-1 text-sm">
            {errors?.description?.message}
          </span>
        </div>
        <div className="mt-5 text-center">
          <button
            type="submit"
            className="focus:outline-none text-white bg-[#574dc1] hover:bg-[#40379f] focus:ring-2  focus:ring-indigo-900 text-base rounded-2xl px-12 py-2 mb-2"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
  sdada;
};

export default NewRegistro;
