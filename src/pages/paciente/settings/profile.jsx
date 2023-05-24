import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsProfile = () => {
  return (
    <div>
      <Navbar type="patient" />
      <PrivateRoute allowedRoute={"Paciente"}>
        <Settings settingsType="profile" userType={"patient"} />
      </PrivateRoute>
    </div>
  );
};

export default SettingsProfile;
