import styles from "./sidebar.module.css";
import Link from "next/link";
import Head from "next/head";
const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.usr_info}>
          <h2>Dr. Eduardo Marques</h2>
          <img src="https://cdn.discordapp.com/attachments/886688342345924608/1090054438808457226/328070513_163106936125070_8886121869692264273_n.jpg" />
        </div>
        <div>
          {" "}
          <ul>
            <li>
              <Link href="/" className={styles.fas}>
                Exibir Pacientes
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.fas}>
                Consultas
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.fas}>
                Registro de Pacientes
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.fas}>
                Configurações
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.fas}>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
