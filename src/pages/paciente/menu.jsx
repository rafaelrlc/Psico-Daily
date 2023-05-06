import Head from "next/head";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
const MenuPaciente = ({ optionValue }) => {
  return (
    <div>
      <Head>
        <title>Menu do Paciente - PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar type="patient"></Navbar>
    </div>
  );
};

export default MenuPaciente;
