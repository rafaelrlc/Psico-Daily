import { FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";

import { useRouter } from "next/router";
import { useAuth } from "@/context/auth/authProvider";

export const NavHelper = (props) => {
  const router = useRouter();
  const auth = useAuth();

  const menuNav = (
    <div className="flex space-x-8">
      <li
        onClick={() => router.push("/login")}
        className="hover:cursor-pointer hover:rotate-[-2deg] "
      >
        <a className="block rounded hover:text-gray-300 p-2">FAZER LOGIN</a>
      </li>
      <li
        onClick={() => router.push("/register")}
        className="hover:cursor-pointer hover:rotate-[-2deg]"
      >
        <a className="block rounded p-2 px-4">CRIAR CONTA</a>
      </li>
    </div>
  );

  const patientNav = (
    <div className="flex space-x-8 items-center">
      <li
        onClick={() => router.push("/paciente/registro")}
        className="hover:cursor-pointer hover:rotate-[-2deg] "
      >
        <div className="flex items-center gap-4">
          <HiOutlineNewspaper size={20} />
          <a className="block rounded hover:text-gray-300">Registro</a>
        </div>
      </li>
      <li
        onClick={() => router.push("/paciente/consultas")}
        className="hover:cursor-pointer hover:rotate-[-2deg]"
      >
        <div className="flex items-center gap-4">
          <AiOutlinePaperClip size={20} />
          <a className="block rounded hover:text-gray-300">Consulta</a>
        </div>
      </li>
      <li
        className="hover:cursor-pointer hover:rotate-[-2deg]"
        onClick={() => router.push("/paciente/psicologo")}
      >
        <div className="flex items-center gap-4">
          <GoPerson size={20} />
          <a className="block rounded hover:text-gray-300">Seu Psicólogo</a>
        </div>
      </li>
      <li
        onClick={() => router.push("/paciente/settings")}
        className="hover:cursor-pointer hover:rotate-[-2deg]"
      >
        <div className="flex items-center gap-3">
          <FiSettings size={20} />
          <a className="block rounded hover:text-gray-300">Configurações</a>
        </div>
      </li>
      <li className="hover:cursor-pointer hover:rotate-[-2deg]">
        <a
          className="block rounded hover:text-gray-300"
          onClick={() => auth.logout()}
        >
          <img
            src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
            className="w-[50px] text-white"
          />
        </a>
      </li>
    </div>
  );

  const psicoNav = (
    <div className="flex space-x-8 items-center">
      <li
        onClick={() => router.push("/psicologo/consultas")}
        className="hover:cursor-pointer hover:rotate-[-2deg]"
      >
        <div className="flex items-center gap-3">
          <AiOutlinePaperClip size={20} />
          <a className="block rounded hover:text-gray-300">Sessões</a>{" "}
        </div>
      </li>

      <li
        onClick={() => router.push("/psicologo/registros")}
        className="hover:cursor-pointer hover:rotate-[-2deg]"
      >
        <div className="flex items-center gap-3">
          <HiOutlineNewspaper size={20} />
          <a className="block rounded hover:text-gray-300">Registros</a>{" "}
        </div>
      </li>

      <li
        onClick={() => router.push("/psicologo/settings")}
        className="hover:cursor-pointer hover:rotate-[-2deg]"
      >
        <div className="flex items-center gap-3">
          <FiSettings size={20} />
          <a className="block rounded hover:text-gray-300">
            Configurações
          </a>{" "}
        </div>
      </li>

      <li className="hover:cursor-pointer hover:rotate-[-2deg]">
        <a
          className="block rounded hover:text-gray-300"
          onClick={() => auth.logout()}
        >
          <img
            src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
            className="w-[50px] text-white"
          />
        </a>
      </li>
    </div>
  );

  return (
    <div>
      {props.type == "psico" && psicoNav}
      {props.type == "menu" && menuNav}
      {props.type == "patient" && patientNav}
    </div>
  );
};

export const MobileNavHelper = (props) => {
  const router = useRouter();

  const menuMobileNav = (
    <div className="flex flex-col gap-8">
      <li
        className={`p-4 cursor-pointer ease-in-out w-full hover:text-gray-400`}
      >
        <a
          onClick={() => {
            props.setMobileNav(false);
            router.push("/login");
          }}
        >
          Login
        </a>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            props.setMobileNav(false);
            router.push("/register");
          }}
        >
          Registrar
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a href="#about" onClick={() => props.setMobileNav(false)}>
          Sobre
        </a>
      </li>
    </div>
  );

  const patientMobileNav = (
    <div className="flex flex-col gap-8">
      <li
        className={`p-4 cursor-pointer ease-in-out w-full hover:text-gray-400`}
      >
        <div>
          <a
            onClick={() => {
              props.setMobileNav(false);
              router.push("/paciente/registro");
            }}
          >
            Registros
          </a>
        </div>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            props.setMobileNav(false);
            router.push("/paciente/consultas");
          }}
        >
          Consultas
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          href="#about"
          onClick={() => {
            props.setMobileNav(false);
            router.push("/paciente/psicologo");
          }}
        >
          Seu Psicólgo
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          href="#about"
          onClick={() => {
            props.setMobileNav(false);
            router.push("/paciente/consultas");
          }}
        >
          Configurações
        </a>
      </li>
    </div>
  );

  const psicoMobileNav = (
    <div className="flex flex-col gap-8">
      <li
        className={`p-4 cursor-pointer ease-in-out w-full hover:text-gray-400`}
      >
        <a
          onClick={() => {
            props.setMobileNav(false);
            router.push("/login");
          }}
        >
          Info
        </a>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            props.setMobileNav(false);
            router.push("/register");
          }}
        >
          Próximas Sessões
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a href="#about" onClick={() => props.setMobileNav(false)}>
          Seus Registros
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a href="#about" onClick={() => props.setMobileNav(false)}>
          Novo Registros
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a href="#about" onClick={() => props.setMobileNav(false)}>
          Configurações
        </a>
      </li>
    </div>
  );
  return (
    <div>
      {props.type == "menu" && menuMobileNav}
      {props.type == "patient" && patientMobileNav}
      {props.type == "psico" && psicoMobileNav}
    </div>
  );
};
