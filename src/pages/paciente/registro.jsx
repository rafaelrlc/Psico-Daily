import React from "react";
import Navbar from "@/components/Navbar";
import Registro from "@/components/Registro";
import Head from "next/head";
const registro = () => {
  return (
    <div className="">
      <Navbar type="patient" />
      <Registro />
    </div>
  );
};

export default registro;
