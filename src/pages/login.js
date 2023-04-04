import Login from "@/components/Login";
import Navbar from "@/components/Navbar/Navbar";
import { Fragment } from "react";
const LoginPage = () => {
  return (
    <Fragment>
      <Login register={false}></Login>
    </Fragment>
  );
};

export default LoginPage;
