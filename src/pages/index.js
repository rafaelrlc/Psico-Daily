import Head from "next/head";
import Homepage from "@/components/Homepage";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";
import { useRouter } from "next/router";
export default function Home() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    console.log("rodou");
    if (auth.accessToken !== null) {
      router.push("/psicologo/");
    }
  }, []);
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
