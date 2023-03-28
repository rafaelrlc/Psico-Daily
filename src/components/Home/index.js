import styles from "./home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
const Homepage = () => {
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <Navbar></Navbar>
      <div className={styles.info}>
        <div className={styles.left_info}>
          <h1>Para quem é o PsicoDaily?</h1>
          <h2>
            Caso esteja a procura de acompanhamento psicológico, ou deseja
            divulgar seu trabalho como profissional, o PsicoDaily é pra você!
          </h2>
          <button
            onClick={() => {
              router.push("/register");
            }}
          >
            Registre-se agora!
          </button>
        </div>
        <div className={styles.right_info}>
          <img
            src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/83cb506b50cb590ee0a9b2acfc2f218867534df0/utils/rS_.svg"
            alt="homepage_page_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
