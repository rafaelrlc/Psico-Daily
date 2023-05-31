import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";
import Particles from "react-tsparticles";
import { among } from "../../../utils/backgrounds";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import useAuth from "@/hooks/useAuth";
const MainLayout = ({ children }) => {
  const { easterEgg } = useAuth();
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      {easterEgg && (
        <Particles
          className="z-[-100] fixed"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={among}
        />
      )}
      <Head>
        <title>PsicoDaily</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://media.discordapp.net/attachments/1025173249543393330/1112577069054951484/p-website-favicon-color.png?width=256&height=256"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
