import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";

const Homepage = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex md:flex-row flex-col justify-center items-center md:h-[800px] h-1000px max-w-[1640px] mx-auto md:gap-0 gap-10">
        <div className="flex flex-col md:ml-20 mx-10 mt-[5rem] md:mt-0">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Para quem é o PsicoDaily?
          </h1>
          <h2 className="mt-5 text-center md:text-left  font-medium text-lg w-full">
            Caso esteja a procura de acompanhamento psicológico, ou deseja
            divulgar seu trabalho como profissional, o PsicoDaily é pra você!
          </h2>
          <button
            className="py-6 leading-none md:w-[280px] w-full  shadow-lg bg-black text-white rounded text-2xl hover:cursor-pointer hover:rotate-[-1deg] mt-5"
            onClick={() => {
              router.push("/register");
            }}
          >
            Registre-se agora!
          </button>
        </div>
        <div className="">
          <img
            src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/83cb506b50cb590ee0a9b2acfc2f218867534df0/utils/rS_.svg"
            alt="homepage_page_img"
            className="w-[750px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
