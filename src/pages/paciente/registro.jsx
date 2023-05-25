import React from "react";
import Navbar from "@/components/Navbar";
import PacienteRegistros from "@/components/PacienteRegistros";
import PrivateRoute from "@/components/Routes/PrivateRoute";
const registro = () => {
  return (
    <div className="">
      <Navbar type="patient" />

      <PacienteRegistros />
    </div>
  );
};

export default registro;
