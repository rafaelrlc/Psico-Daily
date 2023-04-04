import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Patients from "@/components/Psicologo/patientsList";
import styless from "../../../styles/menupaciente.module.css";
import { useState } from "react";

const MenuPaciente = ({ optionValue }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu do Paciente - PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar menuPsicologo={false}></Sidebar>
    </div>
  );
};

export default MenuPaciente;
