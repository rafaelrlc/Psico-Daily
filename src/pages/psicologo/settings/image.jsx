import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsImage = () => {
  return (
    <div>
      <Navbar type="psico" />
      <PrivateRoute allowedRoute={"Psicologo"}>
        <Settings settingsType="image" userType={"psico"} />
      </PrivateRoute>
    </div>
  );
};

export default SettingsImage;
