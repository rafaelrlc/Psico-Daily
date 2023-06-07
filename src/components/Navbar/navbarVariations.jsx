import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AxiosApi from "@/services/api";

import NotificationCard from "../Notifications/NotificationCard";

import { NavItemIcon, NavItem } from "./NavItem";

import { GoPerson } from "react-icons/go";
import { AiFillBell, AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import AddPatientCard from "../Notifications/AddPatientCard";

export const NavHelper = ({ type }) => {
  const { push } = useRouter();
  const { privateApi } = AxiosApi();

  const [messageNotifications, setMessageNotifications] = useState([]);
  const [requestNotifications, setRequestNotifications] = useState([]);

  let icon_url =
    "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"; // vai sumir dps

  const fetchNotifs = async () => {
    console.log(type);
    if (type !== "Paciente") return;
    try {
      const response = await privateApi.get("/notif");
      setRequestNotifications(response.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await privateApi.get("/mensagem");
      console.log(response.data);
      setMessageNotifications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(type);
    fetchNotifs();

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
    <div className="flex gap-2 items-center">
      <div className="flex gap-5">
        {" "}
        <NavItemIcon
          action={() => push("/psicologo/pacientes")}
          icon={BsPeopleFill}
          label="Pacientes"
        />
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center">
          <AddPatientCard
            icon={AiOutlineUserAdd}
            requestNotifications={[]}
            messageNotifications={messageNotifications}
            fetchNotifs={fetchNotifs}
          />
        </div>

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
          className="block rounded hover:text-gray-300 p-2 text-base font-light"
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
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            setMobileNav(false);
            push("/psicologo/pacientes");
          }}
        >
          Pacientes
        </a>
      </li>

      <li className="p-4   cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          href="#about"
          onClick={() => {
            setMobileNav(false);
            push("/psicologo/settings/profile");
          }}
        >
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
