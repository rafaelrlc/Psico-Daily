import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";
import axiosApi from "@/services/api";

const Login = (props) => {
  const [createAcc, setCreateAcc] = useState(props.register);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(props.schema),
  });

  const { api } = axiosApi();
  const router = useRouter();
  const auth = useContext(AuthContext);

  const loginUser = async (email, password) => {
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await api.post("/login", data);
      auth.login(response.data.token, response.data.type);

      if (response.data.type == "Paciente") {
        router.push("/paciente/registro");
      }
      if (response.data.type == "Psicologo") {
        router.push("/psicologo/info");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        setWrongCredentials(true);
      }
    }
  };

  const onSubmit = async (data) => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: data?.name,
    //     email: data.email,
    //     password: data.password,
    //     cpf: data?.cpf,
    //     crp: data?.crp,
    //   }),
    // };

    const userData = {
      name: data?.name,
      email: data.email,
      password: data.password,
      cpf: data?.cpf,
      crp: data?.crp,
    };

    let req_url = "/pac_register";
    if (props.type == "psico") req_url = "/psic_register";

    if (createAcc) {
      try {
        const response = await api.post(req_url, userData);
        console.log(response);
        loginUser(data.email, data.password);
      } catch (error) {
        console.log(error);
      }
    } else {
      loginUser(data.email, data.password);
    }
  };

  return (
    <>
      <form
        className="flex items-center h-[100vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex items-center justify-center">
          <div className=" w-[83%] md:w-[65%] flex justify-center items-center flex-col bg-white ">
            <h1 className="text-black text-[2.2rem] ">Psicodaily</h1>

            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full   rounded-xl p-3 bg-white text-black text-sm border-[1.5px]  border-gray-300 outline-none box-border mt-2"
                  type="text"
                  {...register("name")}
                  placeholder="Nome completo"
                  id="name"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                  {errors?.name?.message}
                </span>
              </div>
            )}
            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-xl p-3 bg-white text-black text-sm border-[1.5px] border-gray-300 outline-none box-border mt-2"
                  type="text"
                  {...register("cpf")}
                  placeholder="CPF"
                  id="cpf"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                  {errors?.cpf?.message}
                </span>
              </div>
            )}
            {createAcc && props.type == "psico" && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-xl p-3 bg-white text-black text-sm border-[1.5px] border-gray-300 outline-none box-border mt-2"
                  type="text"
                  {...register("crp")}
                  placeholder="CRP"
                  id="CRP"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                  {errors?.crp?.message}
                </span>
              </div>
            )}
            <div className="w-full flex flex-col justify-center items-start">
              <input
                className="w-full rounded-xl p-3 bg-white text-black text-sm border-[1.5px]  border-gray-300 outline-none box-border mt-2"
                type="text"
                placeholder="E-mail"
                {...register("email")}
                id="email"
              ></input>
              <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                {errors?.email?.message}
              </span>
              {wrongCredentials && (
                <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                  Credenciais Inválidas
                </span>
              )}
            </div>
            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-xl p-3 bg-white text-black text-sm border-[1.5px] border-gray-300 outline-none box-border mt-2"
                  type="text"
                  placeholder="Repetir E-mail"
                  {...register("confirmEmail")}
                  id="confirmEmail"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                  {errors?.confirmEmail?.message}
                </span>
              </div>
            )}
            <div className="w-full flex flex-col justify-center items-start">
              <input
                className="w-full rounded-xl p-3 bg-white text-black text-sm border-[1.5px]  border-gray-300 outline-none box-border mt-2"
                type="password"
                placeholder="Senha"
                {...register("password")}
                id="password"
              ></input>
              <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                {errors?.password?.message}
              </span>
              {wrongCredentials && (
                <span className="text-red-600 mt-1.5 ml-1.5 text-xs">
                  Credenciais Inválidas
                </span>
              )}
            </div>
            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-xl p-3 bg-white text-black text-sm border-[1.5px] border-gray-300 outline-none box-border mt-2"
                  type="password"
                  placeholder="Repetir Senha"
                  {...register("confirmPassword")}
                  id="confirmPassword"
                ></input>
                <span className="text-red-600 mt-1.65 ml-1.5 text-xs">
                  {errors?.confirmPassword?.message}
                </span>
              </div>
            )}
            <div
              className="text-black self-end ml-1.5 mt-1.5"
              onClick={() => {
                if (createAcc) router.push("/login");
                else router.push("/registerpaciente");
              }}
            >
              {createAcc ? (
                <a>
                  Já possui uma conta?{" "}
                  <span className="text-indigo-700 font-bold hover:cursor-pointer">
                    Faça Login
                  </span>
                </a>
              ) : (
                <a>
                  Não possui uma conta?{" "}
                  <span className="text-indigo-700 font-bold hover:cursor-pointer">
                    Criar Conta
                  </span>
                </a>
              )}
            </div>

            <button className="w-full py-3 mx-6 my-4 rounded-xl outline-none tracking-wider text-white bg-[#574dc1] hover:bg-[#3b30b9] cursor-pointer border-none">
              {!createAcc ? "LOGIN" : "REGISTRAR"}
            </button>
          </div>
        </div>
        <div className="w-full h-full items-center justify-center flex-col md:flex hidden mb-8">
          <img
            src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/8c43b2e8e3d74720a8588b64a55d98597a73e55a/anxiety-animate.svg"
            alt="login_page_img"
            className="w-[550px]"
          />
        </div>
      </form>
    </>
  );
};

export default Login;
