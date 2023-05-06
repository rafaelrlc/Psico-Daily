import React from "react";
import { BiPencil } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const ConfigSidebar = () => {
  return (
    <ul className="flex flex-col gap-12 w-[15vw] md:border-r-2 border-gray-400 mb-12">
      <li>
        <h1 className="font-bold text-xl">Configurações</h1>
      </li>

      <li>
        <Link className="flex items-center gap-3" href={"paciente/settings"}>
          <BiPencil size={20} />
          <h2>Editar Dados</h2>
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-3" href={"paciente/settings"}>
          <MdOutlineNotificationsNone size={20} />
          <h2>Notificações</h2>
        </Link>
      </li>
      <li>
        {" "}
        <Link className="flex items-center gap-3" href={"paciente/settings"}>
          <CgProfile size={20} />
          <h2>Foto de Perfil</h2>
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-3" href={"paciente/settings"}>
          <RxQuestionMarkCircled size={20} className="font-bold" />
          <h2>Suporte</h2>
        </Link>
      </li>
    </ul>
  );
};

export default ConfigSidebar;
