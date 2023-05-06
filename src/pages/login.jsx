import { Fragment } from "react";
import Login from "@/components/Login";
const LoginPage = () => {
  return (
    <Fragment>
      <Login register={false}></Login>
    </Fragment>
  );
};

export default LoginPage;
