import styles from "./sidebar.module.css";
import Link from "next/link";
import Head from "next/head";
import { ImUsers } from "react-icons/im";
import { BiCalendar } from "react-icons/bi";
import { FaClinicMedical } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.usr_info}>
        <h2>Dr. Eduardo Marques</h2>
        <img src="https://cdn.discordapp.com/attachments/886688342345924608/1090054438808457226/328070513_163106936125070_8886121869692264273_n.jpg" />
      </div>
      <div className={styles.options}>
        {" "}
        <ul>
          <li className={styles.optionChoose}>
            <ImUsers size={"25px"}></ImUsers>
            <Link href="/" className={styles.fas}>
              Exibir Pacientes
            </Link>
          </li>
          <li className={styles.optionChoose}>
            <BiCalendar size={"25px"}></BiCalendar>
            <Link href="/" className={styles.fas}>
              Consultas
            </Link>
          </li>
          <li className={styles.optionChoose}>
            <FaClinicMedical size={"25px"}></FaClinicMedical>
            <Link href="/" className={styles.fas}>
              Registro de Pacientes
            </Link>
          </li>
          <li className={styles.optionChoose}>
            <FiSettings size={"25px"}></FiSettings>
            <Link href="/" className={styles.fas}>
              Configurações
            </Link>
          </li>
          <li className={styles.optionChoose}>
            <RiLogoutBoxRLine size={"25px"}></RiLogoutBoxRLine>
            <Link href="/" className={styles.fas}>
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
