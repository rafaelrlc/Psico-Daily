import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Patients from "@/components/Psicologo/patientsList";
import styles from "../../../styles/menupsicologo.module.css";
import { useState } from "react";

const MenuPsicologo = ({ optionValue }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu do Psicólogo - PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar menuPsicologo={true}></Sidebar>

      {optionValue == "patients" && <Patients></Patients>}
      {optionValue == "patientsReports" && <h1>patient report</h1>}
      {optionValue == "settings" && <h1>settings</h1>}
      {optionValue == "consultas" && <h1>consultas</h1>}
    </div>
  );
};

export default MenuPsicologo;
