import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";
import Footer from "./Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PsicoDaily</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
