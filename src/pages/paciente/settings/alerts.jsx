import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsAlert = () => {
  return (
    <div>
      <Navbar type="patient" />

      <Settings settingsType="alerts" userType={"patient"} />
    </div>
  );
};

export default SettingsAlert;
