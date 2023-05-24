import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsSupport = () => {
  return (
    <div>
      <Navbar type="patient" />
      <PrivateRoute allowedRoute={"Psicolgo"}>
        <Settings settingsType="support" userType={"psico"} />
      </PrivateRoute>
    </div>
  );
};

export default SettingsSupport;