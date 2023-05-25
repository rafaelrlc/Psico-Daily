import React from "react";
import Navbar from "@/components/Navbar";
import PsicologoMessages from "@/components/PsicologoMessages";
import PrivateRoute from "@/components/Routes/PrivateRoute";
const psicologo = () => {
  return (
    <div>
      <Navbar type="patient" />
      <PsicologoMessages />
    </div>
  );
};

export default psicologo;
