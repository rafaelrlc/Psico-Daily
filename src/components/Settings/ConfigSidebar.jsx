import React from "react";
import { BiPencil, BiPhotoAlbum, BiHelpCircle, BiBell } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
const ConfigSidebar = () => {
  const { logout } = useAuth();
  return (
    <ul className="hidden md:flex flex-col gap-12 items-start justify-start w-[15vw] md:border-r border-gray-400 2xl:text-lg">
      <li>
        <h1 className="font-semibold text-xl">Configurações</h1>
      </li>

      <li>
        <Link className="flex items-center gap-3 text-base" href={"profile"}>
          <BiPencil size={20} />
          <h2 className="">Editar Dados</h2>
        </Link>
      </li>

      <li>
        <Link className="flex items-center gap-3 text-base" href={"alerts"}>
          <BiBell size={20} />
          <h2>Notificações</h2>
        </Link>
      </li>

      <li>
        {" "}
        <Link className="flex items-center gap-3 text-base" href={"image"}>
          <BiPhotoAlbum size={20} />
          <h2>Perfil</h2>
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-3 text-base" href={"support"}>
          <BiHelpCircle size={20} className="font-bold" />
          <h2>Suporte</h2>
        </Link>
      </li>
      <li>
        <button className="flex items-center gap-3 text-base">
          <RiLogoutBoxRLine size={20} className="text-base" />
          <h2
            className="hover:text-red-600 hover:cursor-pointer"
            onClick={() => logout()}
          >
            Logout
          </h2>
        </button>
      </li>
    </ul>
  );
};

export default ConfigSidebar;
