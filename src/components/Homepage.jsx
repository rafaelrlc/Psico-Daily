import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="">
      <Navbar type="menu" />
      <div className="flex justify-center items-center h-[calc(100vh-85px)]">
        <div className="flex md:flex-row flex-col justify-center items-center 2xl:max-w-[1540px] max-w-[1240px]">
          <div className="flex flex-col mx-10  items-center lg:items-start justify-center">
            <h1 className="lg:text-4xl text-3xl font-bold text-center lg:text-left">
              Para quem é o PsicoDaily?
            </h1>
            <h2 className="mt-5 text-center lg:text-left  font-medium text-lg w-full">
              Caso esteja a procura de acompanhamento psicológico, ou deseja
              divulgar seu trabalho como profissional, o PsicoDaily é pra você!
            </h2>
            <button
              className="py-[1.15rem] md:w-[250px] w-full  shadow-lg bg-black text-white rounded text-2xl hover:cursor-pointer hover:rotate-[-1.25deg] mt-5"
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
              Navbaralt="homepage_page_img"
              classNamessName="w-[50vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
