import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsSupport = () => {
  return (
    <div>
      <Navbar type="patient" />
      <Settings settingsType="support" userType={"patient"} />
    </div>
  );
};

export default SettingsSupport;
