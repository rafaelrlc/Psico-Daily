import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsProfile = () => {
  return (
    <div>
      <Navbar type="patient" />
      <Settings settingsType="profile" />
    </div>
  );
};

export default SettingsProfile;
