import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsSupport = () => {
  return (
    <div>
      <Settings settingsType="support" userType={"patient"} />
    </div>
  );
};

export default SettingsSupport;
