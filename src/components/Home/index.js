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
      <section className={styles.about} id="about">
        <h1 className={styles.test}>Sobre</h1>
        <p className={styles.test_p}>
          Nossa ideia é ter um aplicativo para auxiliar o psicólogo a ter uma
          análise mais completa do quadro clínico do paciente através dos
          registros de pensamentos disfuncionais de situações que ocorreram na
          rotina do paciente. Com o objetivo de que conectar psicólogos com seus
          pacientes com o intuito de ter um maior controle do estado emocional
          do seu paciente a partir de registros diários de eventos
          emocionalmente marcantes para o paciente, estes serão catalogados,
          abortados e discutidos durante as sessões de terapia.
        </p>
      </section>
    </div>
  );
};

export default Homepage;
