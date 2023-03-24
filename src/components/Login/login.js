import { Fragment, useState } from "react";
import styles from "./loginContainer.module.css";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Head from "next/head";

import { loginSchema } from "../../../utils/schemas/schemas";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const [createAcc, setCreateAcc] = useState(true);

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
            <a className={styles.usr_btn}>
              {createAcc
                ? "Já possui uma conta? Faça Login"
                : "Esqueceu a senha?"}
            </a>

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
