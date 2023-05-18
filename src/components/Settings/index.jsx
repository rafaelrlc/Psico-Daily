import React from "react";
import ConfigSidebar from "./ConfigSidebar";
import EditData from "./profile";
import UserAlerts from "./alerts";
import UserImage from "./userImage";
import UserSupport from "./support";

const Settings = ({ settingsType }) => {
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
    <div className="h-[calc(100vh-85px)] flex justify-center items-center mx-10">
      <div className="flex md:gap-20 md:w-full md:max-w-screen-xl items-center justify-center">
        <ConfigSidebar />
        <div className=" md:max-h-[380px] md:w-[55vw]">{componentToRender}</div>
      </div>
    </div>
  );
};

export default Settings;
