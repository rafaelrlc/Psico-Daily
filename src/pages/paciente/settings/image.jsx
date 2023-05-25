import React from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const SettingsImage = () => {
  return (
    <div>
      <Navbar type="patient" />{" "}
      <Settings settingsType="image" userType={"patient"} />
    </div>
  );
};

export default SettingsImage;
