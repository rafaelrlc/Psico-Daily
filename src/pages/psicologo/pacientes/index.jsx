import React from "react";
import Navbar from "@/components/Navbar";
import PatientsList from "@/components/PacienteListing/PatientsList";
const Pacientes = () => {
  return (
    <div>
      <Navbar type="psico" />
      <PatientsList />
    </div>
  );
};

export default Pacientes;
