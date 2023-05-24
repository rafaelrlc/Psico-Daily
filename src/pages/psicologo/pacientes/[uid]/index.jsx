import React from "react";
import Navbar from "@/components/Navbar";
import PatientPage from "@/components/PacienteListing/PatientPage";
const PacientePage = () => {
  return (
    <div>
      <Navbar type="psico" />
      <PatientPage />
    </div>
  );
};

export default PacientePage;
