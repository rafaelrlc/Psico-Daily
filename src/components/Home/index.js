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
          <h2>Para quem é o PsicoDaily?</h2>
          <h3>
            Caso esteja a procura de acompanhamento psicológico, ou deseja
            divulgar seu trabalho como profissional, o PsicoDaily é pra você!
          </h3>
          <button
            onClick={() => {
              router.push("/register");
            }}
          >
            Registre-se agora!
          </button>
        </div>
        <div className={styles.right_info}>
          <img src="https://svgur.com/i/rS_.svg" alt="homepage_page_img" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
