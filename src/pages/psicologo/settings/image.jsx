import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsImage = () => {
  return (
    <div>
      <Settings settingsType="image" userType={"psico"} />
    </div>
  );
};

export default SettingsImage;
