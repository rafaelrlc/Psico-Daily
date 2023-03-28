import Head from "next/head";
import Image from "next/image";
import Homepage from "@/components/Home";
import Patients from "@/components/Patients";
export default function Home() {
  return (
    <>
      <Head>
        <title>PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage></Homepage>
    </>
  );
}
