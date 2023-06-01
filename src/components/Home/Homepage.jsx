import { useRouter } from "next/router";
import Footer from "./Footer";
import { Box } from "@mui/material";
import useAuth from "@/hooks/useAuth";

import { BiBrain } from "react-icons/bi";

import { AiOutlineMessage, AiFillPushpin } from "react-icons/ai";

import { VscCalendar } from "react-icons/vsc";

const Homepage = () => {
  const router = useRouter();
  const { setEasterEgg, easterEgg } = useAuth();
  return (
    <div className="">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex md:flex-row flex-col justify-center items-center 2xl:max-w-[1540px] max-w-[1240px]">
          <div className="flex flex-col mx-10  items-center lg:items-start justify-center">
            <h1 className="lg:text-4xl text-3xl font-semibold text-center lg:text-left">
              Para quem é o PsicoDaily?
            </h1>
            <h2 className="mt-5 text-center lg:text-left text-xl w-full">
              Caso esteja a procura de acompanhamento psicológico, ou deseja
              divulgar seu trabalho como profissional, o{" "}
              <span
                className="hover:text-indigo-600 hover:cursor-pointer"
                onClick={() => setEasterEgg(!easterEgg)}
              >
                PsicoDaily
              </span>{" "}
              é pra você!
            </h2>
            <button
              className="py-[1.15rem] md:w-[250px] w-full  shadow-lg bg-black text-white rounded text-2xl hover:cursor-pointer hover:rotate-[-1.25deg] mt-5 "
              onClick={() => {
                router.push("/registerpsicologo");
              }}
            >
              Registre-se agora!
            </button>
          </div>
          <div className="hidden lg:block mt-24">
            <img
              src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/83cb506b50cb590ee0a9b2acfc2f218867534df0/utils/rS_.svg"
              alt="homepage_page_img"
              className="w-[50vw]"
            />
          </div>
        </div>
      </div>
      <Box
        sx={{
          width: "80vw",
          mx: "auto",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          my: 0,
        }}
      />
      <div className="bg-transparent py-24 sm:py-24" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-700"></h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tudo que você precisa para seu dia a dia
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Com o Psicodaily, através do seu registro de experiências, você
              consegue receber um cuidado personalizado e conveniente para suas
              sessões terapêuticas.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <BiBrain color="white" size={20} />
                  </div>
                  Conexão terapêutica
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  Estabeleça uma conexão significativa entre você e seu
                  psicólogo, promovendo um ambiente de confiança e compreensão.
                </div>
              </div>
              <div className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <AiFillPushpin color="white" size={20} />
                  </div>
                  Registro de eventos
                </div>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Acompanhe o seu dia a dia, usando o método TCC, para
                  compreender suas experiências e emoções
                </dd>
              </div>
              <div className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <VscCalendar color="white" size={20} />
                  </div>
                  Marcar consultas
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  Agende facilmente consultas individuais com seu psicólogo,
                  garantindo um acompanhamento adequado.
                </div>
              </div>
              <div className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <AiOutlineMessage color="white" size={20} />
                  </div>
                  Mensagens e notificações
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  Receba mensagens e respostas do seu psicólgo aos seus
                  registros, obtendo suporte e orientação de forma rápida.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box
        sx={{
          width: "80vw",
          mx: "auto",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      />
      <Footer />
    </div>
  );
};

export default Homepage;
