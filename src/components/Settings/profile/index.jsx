import { useState } from "react";

import { useForm } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import AxiosApi from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaPassword } from "../../../../utils/schemas/schemas";

const EditData = () => {
  const { privateApi } = AxiosApi();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "all",
    resolver: zodResolver(schemaPassword),
    defaultValues: async () => {
      try {
        const response = await privateApi.get("/user");
        console.log(response);
        return {
          nome: response.data.name,
          userEmail: response.data.email,
          cpf: response.data.cpf,
        };
      } catch (error) {
        console.log(error);
      }
      return {
        nome: "",
        userEmail: "",
        cpf: "",
      };
    },
  });

  const [showPassowrdCurrent, setShowPasswordCurrent] = useState(false);
  const [showPassowrdNew, setShowPasswordNew] = useState(false);

  const onSubmit = async (data) => {
    const { nome, userEmail, cpf, currentPassword, newPassword } = data;
    console.log(data);
    console.log(currentPassword, newPassword);

    const newCredentials = {
      newName: nome,
      newEmail: userEmail,
      cpf: cpf,
    };

    const passwordChange = {
      password: currentPassword,
      newPassword: newPassword,
    };

    if (currentPassword !== "" && newPassword !== "") {
      try {
        const response = await privateApi.put(
          "/change_password",
          passwordChange
        );
        console.log(response);
        toast.success("Senha alterada com sucesso.");
        //auth.logout();
      } catch (error) {
        toast.error("Erro ao alterar senha.");
        console.log(error);
      }
    } else {
      try {
        const response = await privateApi.put("/user", newCredentials);
        toast.success("Credenciais alteradas com sucesso.");
        console.log(response);
      } catch (error) {
        console.log(error);
        toast.error("Erro ao alterar os dados.");
      }
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <div className={`mb-4 basis-1/2`}>
              <label className="block text-gray-700 text-sm mb-2">Nome</label>
              <input
                className="appearance-none border-[1px] border-gray-300 rounded-md w-full shadow-sm py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:outline sm:text-[0.9rem] sm:leading-6 "
                type="text"
                placeholder="Seu nome"
                {...register("nome")}
              />
              <span className="text-red-600 text-sm">
                {errors.nome?.message}
              </span>
            </div>
          </Grid>
          <Grid xs={6}>
            <div className={`mb-4 basis-1/2`}>
              <label className="block text-gray-700 text-sm mb-2 w-full">
                CPF
              </label>
              <input
                className="appearance-none border-[1px] border-gray-300 rounded-md w-full shadow-sm py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:outline sm:text-[0.9rem] sm:leading-6"
                type="text"
                placeholder="CPF"
                disabled
                {...register("cpf")}
              />
              <span className="text-red-600 text-sm">
                {errors.cpf?.message}
              </span>
            </div>
          </Grid>
          <Grid xs={12}>
            <div className={`mb-4`}>
              <label className="block text-gray-700 text-sm mb-2 w-full">
                E-mail
              </label>
              <input
                className="appearance-none border-[1px] border-gray-300 rounded-md w-full shadow-sm py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:outline sm:text-[0.9rem] sm:leading-6"
                type="email"
                placeholder="E-mail"
                {...register("userEmail")}
              />
              <span className="text-red-600 text-sm">
                {errors.userEmail?.message}
              </span>
            </div>
          </Grid>

          <Grid xs={12}>
            <div className={`mb-4`}>
              <label className="block text-gray-700 text-sm mb-2 w-full">
                Senha Atual
              </label>
              <div className="relative">
                <input
                  className="appearance-none border-[1px] border-gray-300 rounded-md w-full shadow-sm py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:outline sm:text-[0.9rem] sm:leading-6"
                  type={showPassowrdCurrent ? "text" : "password"}
                  placeholder="Senha Atual"
                  {...register("currentPassword")}
                />
                {showPassowrdCurrent ? (
                  <AiOutlineEye
                    onClick={() => setShowPasswordCurrent(!showPassowrdCurrent)}
                    size={20}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPasswordCurrent(!showPassowrdCurrent)}
                    size={20}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                )}
              </div>

              <span className="text-red-600 text-sm">
                {errors.currentPassword?.message}
              </span>
            </div>
          </Grid>
          <Grid xs={12}>
            <div className={`mb-4`}>
              <label className="block text-gray-700 text-sm mb-2 w-full">
                Senha Nova{" "}
              </label>
              <div className="relative">
                <input
                  className="appearance-none border-[1px] border-gray-300 rounded-md w-full shadow-sm py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:outline sm:text-[0.9rem] sm:leading-6"
                  type={showPassowrdNew ? "text" : "password"}
                  placeholder="Senha Nova"
                  {...register("newPassword")}
                />
                {showPassowrdNew ? (
                  <AiOutlineEye
                    onClick={() => setShowPasswordNew(!showPassowrdNew)}
                    size={20}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500  cursor-pointer"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPasswordNew(!showPassowrdNew)}
                    size={20}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                )}
              </div>
              <span className="text-red-600 text-sm">
                {errors.newPassword?.message}
              </span>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div className="flex md:flex-row  flex-col-reverse gap-3 ">
        <button
          type="button"
          onClick={() => reset()}
          className="w-[100%] md:w-[100px] h-[45px] hover:text-gray-800 bg-gray-100 rounded-xl hover:bg-gray-200"
        >
          Cancelar
        </button>
        <Toaster />
        <button
          type="submit"
          className="w-[100%] md:w-[100px] h-[45px] py-2 rounded-xl bg-[#574dc1] hover:bg-[#41389d] text-white"
        >
          Salvar
        </button>
        <Toaster />
      </div>
    </form>
  );
};

export default EditData;
