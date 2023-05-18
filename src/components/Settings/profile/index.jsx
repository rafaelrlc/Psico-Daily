import { useForm } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useAuth } from "@/context/auth/authProvider";
import api from "@/services/api";

const schema = z.object({
  currentPassword: z.string().nonempty("Campo Obrigatório"),
  newPassword: z.string(),
  username: z.string().nonempty("Campo Obrigatório"),
  nome: z.string().nonempty("Campo Obrigatório"),
  userEmail: z.string().nonempty("Campo Obrigatório"),
});

const EditData = () => {
  const auth = useAuth();

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": auth.accessToken,
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: async () => {
      try {
        const response = await api.get("/userinfo", config);
        return {
          nome: response.data.name,
          userEmail: response.data.email,
          username: "@" + response.data.name,
        };
      } catch (error) {
        console.log(error);
      }
      return {
        nome: "",
        userEmail: "",
        username: "",
      };
    },
  });

  const [showPassowrdCurrent, setShowPasswordCurrent] = useState(false);
  const [showPassowrdNew, setShowPasswordNew] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <div className={`mb-4 basis-1/2`}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nome
              </label>
              <input
                className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
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
              <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                Username
              </label>
              <input
                className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="@username"
                {...register("username")}
              />
              <span className="text-red-600 text-sm">
                {errors.username?.message}
              </span>
            </div>
          </Grid>
          <Grid xs={12}>
            <div className={`mb-4`}>
              <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                E-mail
              </label>
              <input
                className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
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
              <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                Senha Atual
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
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
              <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                Senha Nova{" "}
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border-[1px] border-gray-500 rounded-md w-full py-2 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
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

      <div className="flex md:flex-row  flex-col-reverse gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="w-[100%] md:w-[100px] h-[45px] border-[2px] border-indigo-600  py-2 rounded-xl bg-[#ffffff] hover:bg-[#574dc1] hover:text-white text-indigo-700"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-[100%] md:w-[100px] h-[45px] shadow py-2 rounded-xl bg-[#574dc1] hover:bg-[#41389d] text-white"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default EditData;
