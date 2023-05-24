import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { GoPerson } from "react-icons/go";
import { AiOutlinePaperClip, AiFillBell } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";

import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { NavItemIcon, NavItem } from "./NavItem";
import Notification from "../Notification";
import { fake_psico_notifications } from "../../../utils/ficData";

export const NavHelper = ({ type }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let icon_url =
    "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png";

  useEffect(() => {
    //get user icon
    icon_url =
      "https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png";

    // get notifications
    setNotifications(fake_psico_notifications);
  }, []);

  const patientNav = (
    <div className="flex items-center gap-4">
      <div className="flex gap-7">
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
      </div>

      <div className="flex gap-6">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <AiFillBell
            size={25}
            color="white"
            className="hover:rotate-[-6deg]"
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
              mt: 0.5,
              width: "400px",
              maxHeight: "300px",
              borderRadius: "20px",
              overflow: "",
              overflowY: "hidden",

              bgcolor: "#fdfdfd",
              "&:hover": {
                overflowY: "auto", // Show scrollbar only on hover
              },
              "&::-webkit-scrollbar": {
                width: "0.7rem",
                display: "none",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "4px",
                backgroundColor: "rgba(0,0,0,.1)",
              },
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 mt-2">
              {notifications.map((notif) => (
                <Notification
                  message={notif.message}
                  username={notif.username}
                  time={notif.time}
                />
              ))}
            </div>
          </div>
        </Menu>
        <div className="flex items-center gap-2">
          <NavItemIcon
            action={() => router.push("/paciente/settings/profile")}
            src={icon_url}
          />
        </div>
      </div>
    </div>
  );

  const psicoNav = (
    <div className="flex space-x-8 items-center">
      <NavItemIcon
        action={() => router.push("/psicologo/consultas")}
        icon={AiOutlinePaperClip}
        label="Sessões"
      />
      <NavItemIcon
        action={() => router.push("/psicologo/registros")}
        icon={HiOutlineNewspaper}
        label="Seus Registros"
      />

      <NavItemIcon
        action={() => router.push("/psicologo/pacientes")}
        icon={BsPeopleFill}
        label="Pacientes"
      />

      <div className="flex gap-6">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <AiFillBell
            size={25}
            color="white"
            className="hover:rotate-[-6deg]"
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
              mt: 0.5,
              width: "400px",
              maxHeight: "300px",
              borderRadius: "20px",
              overflow: "",
              overflowY: "hidden",

              bgcolor: "#fdfdfd",
              "&:hover": {
                overflowY: "auto", // Show scrollbar only on hover
              },
              "&::-webkit-scrollbar": {
                width: "0.7rem",
                display: "none",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "4px",
                backgroundColor: "rgba(0,0,0,.1)",
              },
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 mt-2">
              {notifications.map((notif) => (
                <Notification
                  message={notif.message}
                  username={notif.username}
                  time={notif.time}
                />
              ))}
            </div>
          </div>
        </Menu>
        <NavItemIcon
          action={() => router.push("/psicologo/settings/profile")}
          src={icon_url}
        />
      </div>
    </div>
  );

  const menuNav = (
    <div className="flex space-x-8">
      <NavItem action={() => router.push("/login")} label="Login" />
      <NavItem
        action={() => router.push("/registerpaciente")}
        label="Registrar"
      />
      <li className="hover:cursor-pointer hover:rotate-[-2deg] ">
        <a
          className="block rounded hover:text-gray-300 p-2 text-lg"
          href="#about"
        >
          Sobre
        </a>
      </li>
    </div>
  );

  return (
    <div>
      {type == "psico" && psicoNav}
      {type == "menu" && menuNav}
      {type == "patient" && patientNav}
    </div>
  );
};

export const MobileNavHelper = ({ setMobileNav, type }) => {
  const router = useRouter();

  const menuMobileNav = (
    <div className="flex flex-col gap-8">
      <li
        className={`p-4 cursor-pointer ease-in-out w-full hover:text-gray-400`}
      >
        <a
          onClick={() => {
            setMobileNav(false);
            router.push("/login");
          }}
        >
          Login
        </a>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            setMobileNav(false);
            router.push("/registerpaciente");
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
            setMobileNav(false);
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
            setMobileNav(false);
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
            setMobileNav(false);
            router.push("/paciente/settings");
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
            router.push("/login");
          }}
        >
          Info
        </a>
      </li>
      <li className="p-4 cursor-pointer  ease-in-out w-full hover:text-gray-400">
        <a
          onClick={() => {
            setMobileNav(false);
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
      {type == "menu" && menuMobileNav}
      {type == "patient" && patientMobileNav}
      {type == "psico" && psicoMobileNav}
    </div>
  );
};
