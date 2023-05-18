import { FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "@/context/auth/authProvider";

export const patientNavItems = [
  {
    icon: HiOutlineNewspaper,
    label: "Registro",
    path: "/paciente/registro",
  },
  {
    icon: AiOutlinePaperClip,
    label: "Consulta",
    path: "/paciente/consulta",
  },
  {
    icon: GoPerson,
    label: "Seu Psicologo",
    path: "/paciente/psicologo",
  },
  {
    icon: FiSettings,
    label: "Configurações",
    path: "/paciente/settings/profile",
  },
  {
    icon: RiLogoutBoxRLine,
    label: "Sair",
    action: auth.logout,
  },
];

export const psicoNavItems = [
  {
    icon: AiOutlinePaperClip,
    label: "Sessões",
    path: "/psicologo/consultas",
  },
  {
    icon: HiOutlineNewspaper,
    label: "Registros",
    path: "/psicologo/registros",
  },
  {
    icon: FiSettings,
    label: "Configurações",
    path: "/psicologo/settings",
  },
  {
    icon: RiLogoutBoxRLine,
    label: "Sair",
    action: auth.logout,
  },
];
