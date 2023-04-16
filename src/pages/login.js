import Navbar from "@/components/Navbar/Navbar";
import { Fragment } from "react";
import LoginPage2 from "@/components/Login";
const LoginPage = () => {
  return (
    <Fragment>
      <LoginPage2 register={false}></LoginPage2>
    </Fragment>
  );
};

export default LoginPage;
