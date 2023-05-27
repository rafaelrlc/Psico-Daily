import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AxiosApi from "@/services/api";

import NotificationCard from "../Notifications/NotificationCard";

import { NavItemIcon, NavItem } from "./NavItem";
import { fake_psico_notifications } from "../../../utils/ficData";

import { GoPerson } from "react-icons/go";
import { AiOutlinePaperClip, AiFillBell } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";

export const NavHelper = ({ type }) => {
  const { push } = useRouter();
  const { privateApi } = AxiosApi();

  const [messageNotifications, setMessageNotifications] = useState([]);
  const [requestNotifications, setRequestNotifications] = useState([]);

  let icon_url =
    "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"; // vai sumir dps

  const fetchNotifs = async () => {
    try {
      const response = await privateApi.get("/notif");
      setRequestNotifications(response.data);
    } catch (error) {
      console.log(error);
    }

    // dar fetch nas mensagens
    setMessageNotifications(fake_psico_notifications);
  };

  useEffect(() => {
    fetchNotifs();

    //get user icon
    icon_url =
      "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png";
  }, []);

  const patientNav = (
    <div className="flex items-center gap-4">
      <div className="flex gap-7">
        <NavItemIcon
          icon={HiOutlineNewspaper}
          label="Registro"
          action={() => push("/paciente/registro")}
        />
        <NavItemIcon
          icon={AiOutlinePaperClip}
          label="Consulta"
          action={() => push("/paciente/consultas")}
        />
        <NavItemIcon
          icon={GoPerson}
          label="Seu Psicólogo"
          action={() => push("/paciente/psicologo")}
        />
      </div>

      <div className="flex gap-6 items-center">
        <NotificationCard
          icon={AiFillBell}
          requestNotifications={requestNotifications}
          messageNotifications={messageNotifications}
          fetchNotifs={fetchNotifs}
        />
        <div className="flex items-center gap-2">
          <NavItemIcon
            action={() => push("/paciente/settings/profile")}
            src={icon_url}
          />
        </div>
      </div>
    </div>
  );

  const psicoNav = (
    <div className="flex space-x-8 items-center">
      <NavItemIcon
        action={() => push("/psicologo/consultas")}
        icon={AiOutlinePaperClip}
        label="Sessões"
      />
      <NavItemIcon
        action={() => push("/psicologo/registros")}
        icon={HiOutlineNewspaper}
        label="Seus Registros"
      />

      <NavItemIcon
        action={() => push("/psicologo/pacientes")}
        icon={BsPeopleFill}
        label="Pacientes"
      />

      <NavItemIcon
        action={() => push("/psicologo/addpacientes")}
        icon={BsPeopleFill}
        label="Adicionar Pacientes"
      />

      <div className="flex gap-6 items-center">
        <NotificationCard
          icon={AiFillBell}
          requestNotifications={[]}
          messageNotifications={messageNotifications}
          fetchNotifs={fetchNotifs}
        />
        <NavItemIcon
          action={() => push("/psicologo/settings/profile")}
          src={icon_url}
        />
      </div>
    </div>
  );

  const menuNav = (
    <div className="flex space-x-8">
      <NavItem action={() => push("/login")} label="LOGIN" />
      <NavItem action={() => push("/registerpaciente")} label="REGISTRAR" />
      <li className="hover:cursor-pointer hover:rotate-[-2deg] ">
        <a
          className="block rounded hover:text-gray-300 p-2 text-base"
          href="#about"
        >
          SOBRE
        </a>
      </li>
    </div>
  );

  let navRender = patientNav;
  if (type == "Paciente") {
    navRender = patientNav;
  } else if (type == "Psicologo") {
    navRender = psicoNav;
  } else {
    navRender = menuNav;
  }

  return <div>{navRender}</div>;
};

export const MobileNavHelper = ({ setMobileNav, type }) => {
  const { push } = useRouter();

  const menuMobileNav = (
    <div className="flex flex-col gap-8">
      <li
        className={`p-4 cursor-pointer ease-in-out w-full hover:text-gray-400`}
      >
        <a
          onClick={() => {
            setMobileNav(false);
            push("/login");
          }}
        >
          Login
        </a>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            setMobileNav(false);
            push("/registerpaciente");
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
              setMobileNav(false);
              push("/paciente/registro");
            }}
          >
            Registros
          </a>
        </div>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            setMobileNav(false);
            push("/paciente/consultas");
          }}
        >
          Consultas
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          href="#about"
          onClick={() => {
            setMobileNav(false);
            push("/paciente/psicologo");
          }}
        >
          Seu Psicólgo
        </a>
      </li>
      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          href="#about"
          onClick={() => {
            setMobileNav(false);
            push("/paciente/settings");
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
            setMobileNav(false);
            push("/login");
          }}
        >
          Info
        </a>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            setMobileNav(false);
            push("/register");
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
      {type == "menu" && menuMobileNav}
      {type == "Paciente" && patientMobileNav}
      {type == "Psicologo" && psicoMobileNav}
    </div>
  );
};
