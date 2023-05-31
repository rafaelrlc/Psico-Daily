import { Fragment } from "react";
import Login from "@/components/Home/Login";
import { loginSchema } from "../../utils/schemas/schemas";
const LoginPage = () => {
  return (
    <Fragment>
      <Login register={false} schema={loginSchema}></Login>
    </Fragment>
  );
};

export default LoginPage;
