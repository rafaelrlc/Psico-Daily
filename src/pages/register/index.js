import Login from "@/components/Login";
import Navbar from "@/components/Navbar/Navbar";
import { Fragment } from "react";
const LoginPage = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Login register={true}></Login>
    </Fragment>
  );
};

export default LoginPage;
