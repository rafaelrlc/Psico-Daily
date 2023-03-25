import styles from "./home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Homepage = () => {
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <div className={styles.navbar_container}>
        <h1 className={styles.main_logo}>PsicoDaily</h1>
        <div className={styles.rightSide_options}>
          <h2
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </h2>
          <h2
            onClick={() => {
              router.push("/register");
            }}
          >
            Registro
          </h2>
          <h2>Sobre</h2>
        </div>
      </div>
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
          <img
            src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-ansiedade_114360-8054.jpg?w=1060&t=st=1679718132~exp=1679718732~hmac=099f929d29cf4571fd5bb202fad768be0c3cce433b22771f6d7c8b4cb7c761ca"
            alt="homepage_page_img"
            className={styles.right_login_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
