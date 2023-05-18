import { FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth/authProvider";
import { NavItem, NavItemIcon } from "./NavItem";
import { useEffect } from "react";

export const NavHelper = (props) => {
  const router = useRouter();
  const auth = useAuth();

  let icon_url =
    "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png";

  useEffect(() => {
    //get user icon
    icon_url =
      "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png";
  }, []);

  const menuNav = (
    <div className="flex space-x-8">
      <NavItem action={() => router.push("/login")} label="FAZER LOGIN" />
      <NavItem action={() => router.push("/register")} label="CRIAR CONTA" />
    </div>
  );
  const patientNav = (
    <div className="flex space-x-8 items-center">
      <NavItemIcon
        icon={HiOutlineNewspaper}
        label="Registro"
        action={() => router.push("/paciente/registro")}
      />
      <NavItemIcon
        icon={AiOutlinePaperClip}
        label="Consulta"
        action={() => router.push("/paciente/consultas")}
      />
      <NavItemIcon
        icon={GoPerson}
        label="Seu Psicólogo"
        action={() => router.push("/paciente/psicologo")}
      />
      <li className="hover:cursor-pointer hover:rotate-[-2deg]">
        <a
          className="block rounded hover:text-gray-300"
          onClick={() => router.push("/paciente/settings/profile")}
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
