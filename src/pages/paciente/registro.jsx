import React from "react";
import Navbar from "@/components/Navbar";
import Registro from "@/components/PacienteMessages";
import PrivateRoute from "@/components/Routes/PrivateRoute";
const registro = () => {
  return (
    <div className="">
      <Navbar type="patient" />
      <PrivateRoute allowedRoute="Paciente">
        <Registro />
      </PrivateRoute>
    </div>
  );
};

export default registro;
