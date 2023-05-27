import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";

const SettingsProfile = () => {
  return (
    <div>
      <Settings settingsType="profile" userType={"patient"} />
    </div>
  );
};

export default SettingsProfile;
