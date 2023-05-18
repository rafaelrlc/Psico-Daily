import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsAlert = () => {
  return (
    <div>
      <Navbar type="patient" />
      <Settings settingsType="alerts" />
    </div>
  );
};

export default SettingsAlert;
