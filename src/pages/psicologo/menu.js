import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Patients from "@/components/Patients";
import styles from "./menupsicologo.module.css";
const MenuPsicologo = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu do Psicólogo - PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar></Sidebar>
      <Patients></Patients>
    </div>
  );
};

export default MenuPsicologo;
