import React from "react";
import { BiPencil, BiPhotoAlbum, BiHelpCircle, BiBell } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";
import { useAuth } from "@/context/auth/authProvider";
const ConfigSidebar = () => {
  const auth = useAuth();
  return (
    <ul className="hidden md:flex flex-col gap-11 items-start justify-start w-[15vw] md:border-r-2 border-gray-400 2xl:text-lg text-base">
      <li>
        <h1 className="font-bold text-xl">Configurações</h1>
      </li>

      <li>
        <Link className="flex items-center gap-3" href={"profile"}>
          <BiPencil size={20} />
          <h2 className="font-bold">Editar Dados</h2>
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-3" href={"alerts"}>
          <BiBell size={20} />
          <h2>Notificações</h2>
        </Link>
      </li>
      <li>
        {" "}
        <Link className="flex items-center gap-3" href={"image"}>
          <BiPhotoAlbum size={20} />
          <h2>Foto de Perfil</h2>
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-3" href={"support"}>
          <BiHelpCircle size={20} className="font-bold" />
          <h2>Suporte</h2>
        </Link>
      </li>
      <li>
        <button className="flex items-center gap-3">
          <RiLogoutBoxRLine size={20} className="font-bold" />
          <h2
            className="font-bold hover:text-red-600 hover:cursor-pointer"
            onClick={() => auth.logout()}
          >
            Logout
          </h2>
        </button>
      </li>
    </ul>
  );
};

export default ConfigSidebar;
