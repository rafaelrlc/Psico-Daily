import Login from "@/components/Home/Login";
import { Fragment } from "react";
import { registerPsicologoSchema } from "../../utils/schemas/schemas";
const LoginPage = () => {
  return (
    <Fragment>
      <Login
        register={true}
        type="psico"
        schema={registerPsicologoSchema}
      ></Login>
    </Fragment>
  );
};

export default LoginPage;
