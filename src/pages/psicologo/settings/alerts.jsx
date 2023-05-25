import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsAlert = () => {
  return (
    <div>
      <Navbar type="psico" />

      <Settings settingsType="alerts" userType={"psico"} />
    </div>
  );
};

export default SettingsAlert;
