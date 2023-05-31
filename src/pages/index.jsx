import Head from "next/head";
import Homepage from "@/components/Home/Homepage";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";
import { useRouter } from "next/router";

export default function Home() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (auth.accessToken !== null) {
      if (auth.role == "Paciente") {
        router.push("/paciente/registro");
      } else if (auth.role == "Psicologo") {
        router.push("/psicologo/info");
      } else {
        router.push("/");
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>PsicoDaily</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://media.discordapp.net/attachments/1025173249543393330/1112577069054951484/p-website-favicon-color.png?width=256&height=256"
        />
      </Head>
      <Homepage></Homepage>
    </>
  );
}
