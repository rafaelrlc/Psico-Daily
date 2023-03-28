import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Patients from "@/components/Patients";
const MenuPsicologo = () => {
  return (
    <div>
      <Head>
        <title>Menu do Psicólogo - PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar></Sidebar>
      <Patients></Patients>
    </div>
  );
};

export default MenuPsicologo;
