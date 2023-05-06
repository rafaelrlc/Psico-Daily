import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Settings from "@/components/Settings";
const settings = () => {
  return (
    <div>
      <Navbar type="patient" />
      <Settings />
    </div>
  );
};

export default settings;
