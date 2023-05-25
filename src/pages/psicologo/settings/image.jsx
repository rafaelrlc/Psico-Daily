import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsImage = () => {
  return (
    <div>
      <Navbar type="psico" />

      <Settings settingsType="image" userType={"psico"} />
    </div>
  );
};

export default SettingsImage;
