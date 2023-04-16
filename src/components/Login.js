import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import { loginSchema } from "../../utils/schemas/schemas";
import { registerSchema } from "../../utils/schemas/schemas";
import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";

let databaseLogins = [
  {
    uid: "2423423424928adapodkpoaskdaspo",
    email: "rafael@gmail.com",
    password: "Rafael123!",
  },
  {
    uid: "93904239048dsjojsdoifjsiofjsdo",
    email: "eduardo@gmail.com",
    password: "Eduardo123!",
  },
];

const Login = (props) => {
  const [createAcc, setCreateAcc] = useState(props.register);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createAcc ? registerSchema : loginSchema),
  });

  const router = useRouter();

  const auth = useContext(AuthContext);

  console.log(createAcc);

  const onSubmit = (data) => {
    console.log(data);
    if (createAcc) {
      reset();
      return;
    }

    const { email, password } = data;

    const user = databaseLogins.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("logado");
      auth.login(user.uid);
      router.push("/psicologo");
    } else {
      console.log("conta nao existe");
      router.push("/404");
    }
    reset();
  };

  return (
    <>
      <Navbar></Navbar>
      <form
        className="flex items-center h-[88vh] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex items-center justify-center">
          <div className=" w-[83%] md:w-[65%] flex justify-center items-center flex-col bg-white rounded-2xl">
            <h1 className="text-black text-[2.6rem] ">Psicodaily</h1>

            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-2xl p-3 bg-white text-black text-base border border-gray-300 outline-none box-border mt-2"
                  type="text"
                  {...register("fullname")}
                  placeholder="Nome completo"
                  id="fullname"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5">
                  {errors?.fullname?.message}
                </span>
              </div>
            )}
            <div className="w-full flex flex-col justify-center items-start">
              <input
                className="w-full rounded-2xl p-3 bg-white text-black text-base border border-gray-300 outline-none box-border mt-2"
                type="text"
                placeholder="E-mail"
                {...register("email")}
                id="email"
              ></input>
              <span className="text-red-600 mt-1.5 ml-1.5">
                {errors?.email?.message}
              </span>
            </div>
            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-2xl p-3 bg-white text-black text-base border border-gray-300 outline-none box-border mt-2"
                  type="text"
                  placeholder="Repetir E-mail"
                  {...register("confirmEmail")}
                  id="confirmEmail"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5">
                  {errors?.confirmEmail?.message}
                </span>
              </div>
            )}
            <div className="w-full flex flex-col justify-center items-start">
              <input
                className="w-full rounded-2xl p-3 bg-white text-black text-base border border-gray-300 outline-none box-border mt-2"
                type="password"
                placeholder="Senha"
                {...register("password")}
                id="password"
              ></input>
              <span className="text-red-600 mt-1.5 ml-1.5">
                {errors?.password?.message}
              </span>
            </div>
            {createAcc && (
              <div className="w-full flex flex-col justify-center items-start">
                <input
                  className="w-full rounded-2xl p-3 bg-white text-black text-base border border-gray-300 outline-none box-border mt-2"
                  type="password"
                  placeholder="Repetir Senha"
                  {...register("confirmPassword")}
                  id="confirmPassword"
                ></input>
                <span className="text-red-600 mt-1.5 ml-1.5">
                  {errors?.confirmPassword?.message}
                </span>
              </div>
            )}
            <div
              className="text-black self-end ml-1.5"
              onClick={() => {
                if (createAcc) router.push("/login");
                else router.push("/register");
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
                  <span className="text-indigo-700 font-medium hover:cursor-pointer">
                    Criar Conta
                  </span>
                </a>
              )}
            </div>

            <button className="w-full py-3 mx-6 my-4 rounded-2xl outline-none tracking-wider text-white bg-[#655dbb] hover:bg-[#514a9f] cursor-pointer border-none">
              {!createAcc ? "Login" : "Registrar"}
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
