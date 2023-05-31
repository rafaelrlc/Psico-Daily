import React from "react";
import ConfigSidebar from "./ConfigSidebar";
import EditData from "./profile";
import UserAlerts from "./alerts";
import UserImage from "./userImage";
import UserSupport from "./support";
import { useAuth } from "@/context/auth/authProvider";
const Settings = ({ settingsType, userType }) => {
  let componentToRender;
  switch (settingsType) {
    case "profile":
      componentToRender = <EditData />;
      break;
    case "alerts":
      componentToRender = <UserAlerts />;
      break;
    case "image":
      componentToRender = <UserImage />;
      break;
    case "support":
      componentToRender = <UserSupport />;
      break;
    default:
      componentToRender = null;
  }
  return (
    <div className="flex justify-center items-center mx-10 md:h-[calc(100vh-80px)] h-[90vh]">
      <div className="flex md:gap-20 md:w-full items-start justify-center ">
        <ConfigSidebar />
        <div className="md:w-[55vw] md:max-h-[380px] mx-10">
          {componentToRender}
        </div>
      </div>
    </div>
  );
};

export default Settings;
