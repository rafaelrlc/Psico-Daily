import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsAlert = () => {
  return (
    <div>
      <Navbar type="patient" />
      <PrivateRoute allowedRoute={"Paciente"}>
        <Settings settingsType="alerts" userType={"patient"} />
      </PrivateRoute>
    </div>
  );
};

export default SettingsAlert;
