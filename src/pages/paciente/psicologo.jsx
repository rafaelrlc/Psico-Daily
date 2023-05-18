import React from "react";
import Navbar from "@/components/Navbar";
import PsicologoMessages from "@/components/PsicologoMessages";
const psicologo = () => {
  return (
    <div>
      <Navbar type="patient" />
      <PsicologoMessages />
    </div>
  );
};

export default psicologo;
