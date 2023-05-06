import React from "react";
import ConfigSidebar from "./ConfigSidebar";
import EditData from "./EditData";
const Settings = () => {
  return (
    <div className=" h-[calc(100vh-85px)]  flex justify-center items-center gap-20">
      <ConfigSidebar />
      <EditData />
    </div>
  );
};

export default Settings;
