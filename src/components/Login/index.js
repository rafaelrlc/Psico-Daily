import { Fragment, useState } from "react";
import styles from "./loginContainer.module.css";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";

import { loginSchema } from "../../../utils/schemas/schemas";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const router = useRouter();

  const [createAcc, setCreateAcc] = useState(props.register);

  const onSubmit = async (data) => {
    console.log(data);
    if (
      data.confirmPassword !== data.password &&
      data.email !== data.confirmEmail
    ) {
      console.log("inavlidlo");
      return;
    }
    reset();
  };

  const handleForgotPassword = () => {
    router.push("/404");
  };

  return (
    <>
      <Head>
        <title>PsicoDaily</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.right_login}>
          <div className={styles.card_login}>
            <h1>Psicodaily</h1>

            {createAcc && (
              <div className={styles.textfield}>
                <input
                  type="text"
                  placeholder="Nome completo"
                  {...register("fullname")}
                ></input>
                <span className={styles.input_error}>
                  {errors?.fullname?.message}
                </span>
              </div>
            )}
            <div className={styles.textfield}>
              <input
                type="text"
                placeholder="E-mail"
                {...register("email")}
              ></input>
              <span className={styles.input_error}>
                {errors?.email?.message}
              </span>
            </div>
            {createAcc && (
              <div className={styles.textfield}>
                <input
                  type="text"
                  placeholder="Repetir E-mail"
                  {...register("confirmEmail")}
                ></input>
                <span className={styles.input_error}>
                  {errors?.confirmEmail?.message}
                </span>
              </div>
            )}
            <div className={styles.textfield}>
              <input
                type="password"
                placeholder="Senha"
                {...register("password")}
              ></input>
              <span className={styles.input_error}>
                {errors?.password?.message}
              </span>
            </div>
            {createAcc && (
              <div className={styles.textfield}>
                <input
                  type="password"
                  placeholder="Repetir Senha"
                  {...register("confirmPassword")}
                ></input>
                <span className={styles.input_error}>
                  {errors?.confirmPassword?.message}
                </span>
              </div>
            )}
            <div className={styles.usr_buttons}>
              {!createAcc && (
                <a className={styles.usr_btn2} onClick={handleForgotPassword}>
                  Esqueceu a senha?
                </a>
              )}
              <div className={styles.usr_btn}>
                {createAcc ? (
                  <a>
                    Já possui uma conta?{" "}
                    <span
                      className={styles.last_word}
                      onClick={() => {
                        if (createAcc) router.push("/login");
                        else router.push("/register");
                      }}
                    >
                      Faça Login
                    </span>
                  </a>
                ) : (
                  <a>
                    Não possui uma conta?{" "}
                    <span
                      className={styles.last_word}
                      onClick={() => {
                        if (createAcc) router.push("/login");
                        else router.push("/register");
                      }}
                    >
                      Criar Conta
                    </span>
                  </a>
                )}
              </div>
            </div>

            <button className={styles.btn_login}>
              {!createAcc ? "Login" : "Registrar"}
            </button>
          </div>
        </div>
        <div className={styles.left_login}>
          <img
            src="https://svgur.com/i/rRj.svgs"
            alt="login_page_img"
            className={styles.left_login_img}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
