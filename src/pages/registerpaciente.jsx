import Login from "@/components/Home/Login";
import { Fragment } from "react";
import { registerPacienteSchema } from "../../utils/schemas/schemas";
const LoginPage = () => {
  return (
    <Fragment>
      <Login
        register={true}
        type="patient"
        schema={registerPacienteSchema}
      ></Login>
    </Fragment>
  );
};

export default LoginPage;
