import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="">
      <Navbar type="menu" />
      <div className="flex md:flex-row flex-col justify-center  items-center h-[89vh] md:gap-0 gap-10">
        <div className="flex flex-col  mx-10 lg:mt-0 items-center lg:items-start justify-center ">
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
              router.push("/register");
            }}
          >
            Registre-se agora!
          </button>
        </div>
        <div className="hidden lg:block mt-24">
          <img
            src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/83cb506b50cb590ee0a9b2acfc2f218867534df0/utils/rS_.svg"
            alt="homepage_page_img"
            className="w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
