import LoginPage2 from "@/components/Login";
import Navbar from "@/components/Navbar/Navbar";
import { Fragment } from "react";
const LoginPage = () => {
  return (
    <Fragment>
      <LoginPage2 register={true}></LoginPage2>
    </Fragment>
  );
};

export default LoginPage;
