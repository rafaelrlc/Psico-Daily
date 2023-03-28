import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar_container}>
      <h1 className={styles.main_logo} onClick={() => router.push("/")}>
        PsicoDaily
      </h1>
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
        <h2>
          <Link href={"/#about"} className={styles.aboutName}>
            Sobre
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
