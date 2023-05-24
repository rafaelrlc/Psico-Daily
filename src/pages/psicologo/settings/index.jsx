import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("settings/profile");
  }, []);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <p>Loading...</p>
    </div>
  );
};

export default Settings;
