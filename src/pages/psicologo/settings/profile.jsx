import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsProfile = () => {
  return (
    <div>
      <Navbar type="psico" />

      <Settings settingsType="profile" userType={"psico"} />
    </div>
  );
};

export default SettingsProfile;
