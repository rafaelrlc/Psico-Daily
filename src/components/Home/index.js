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
      <section className={styles.about}>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
      </section>
    </div>
  );
};

export default Homepage;
