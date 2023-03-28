import styles from "./sidebar.module.css";
import Link from "next/link";
import Head from "next/head";
import { ImUsers } from "react-icons/im";
import { BiCalendar } from "react-icons/bi";
import { FaClinicMedical } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "@/context/auth/authProvider";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const auth = useAuth();
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <div className={styles.usr_info}>
        <h2>Dr. Eduardo Marques</h2>
        <img src="https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png?width=1024&height=1024" />
      </div>
      {props.menuPsicologo && (
        <div className={styles.options}>
          {" "}
          <ul>
            <li className={styles.optionChoose}>
              <ImUsers size={"25px"} className={styles.icon}></ImUsers>
              <Link href="/psicologo/pacientes" className={styles.fas}>
                Exibir Pacientes
              </Link>
            </li>
            <li className={styles.optionChoose}>
              <BiCalendar size={"25px"} className={styles.icon}></BiCalendar>
              <Link href="/psicologo/consultas" className={styles.fas}>
                Consultas
              </Link>
            </li>
            <li className={styles.optionChoose}>
              <FaClinicMedical
                size={"25px"}
                className={styles.icon}
              ></FaClinicMedical>
              <Link href="/psicologo/registros" className={styles.fas}>
                Registro de Pacientes
              </Link>
            </li>
            <li className={styles.optionChoose}>
              <FiSettings size={"25px"} className={styles.icon}></FiSettings>
              <Link href="/psicologo/settings" className={styles.fas}>
                Configurações
              </Link>
            </li>
            <li
              className={styles.optionChoose}
              onClick={() => {
                auth.logout();
                router.push("/");
              }}
            >
              <RiLogoutBoxRLine
                size={"25px"}
                className={styles.icon}
              ></RiLogoutBoxRLine>
              <Link href="#" className={styles.fas}>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      )}
      {!props.menuPsicologo && (
        <div className={styles.options}>
          {" "}
          <ul>
            <li className={styles.optionChoose}>
              <ImUsers size={"25px"} className={styles.icon}></ImUsers>
              <Link href="/" className={styles.fas}>
                Psicólogo Info
              </Link>
            </li>
            <li className={styles.optionChoose}>
              <BiCalendar size={"25px"} className={styles.icon}></BiCalendar>
              <Link href="/" className={styles.fas}>
                Próximas Sessões
              </Link>
            </li>
            <li className={styles.optionChoose}>
              <FaClinicMedical
                size={"25px"}
                className={styles.icon}
              ></FaClinicMedical>
              <Link href="/" className={styles.fas}>
                Seus Registros
              </Link>
            </li>
            <li className={styles.optionChoose}>
              <FiSettings size={"25px"} className={styles.icon}></FiSettings>
              <Link href="/" className={styles.fas}>
                Configurações
              </Link>
            </li>
            <li
              className={styles.optionChoose}
              onClick={() => {
                auth.logout();
                router.push("/");
              }}
            >
              <RiLogoutBoxRLine
                size={"25px"}
                className={styles.icon}
              ></RiLogoutBoxRLine>
              <Link href="#" className={styles.fas}>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
