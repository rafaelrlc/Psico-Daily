import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsAlert = () => {
  return (
    <div>
      <Settings settingsType="alerts" userType={"patient"} />
    </div>
  );
};

export default SettingsAlert;
