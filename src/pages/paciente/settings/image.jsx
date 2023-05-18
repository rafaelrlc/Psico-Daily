import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsImage = () => {
  return (
    <div>
      <Navbar type="patient" />
      <Settings settingsType="image" />
    </div>
  );
};

export default SettingsImage;
