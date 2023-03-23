import { useState } from "react";
import classes from "./loginContainer.module.css";
import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
`;

const LoginForm = () => {
  const [createAcc, setCreateAcc] = useState(false);

  return <LoginContainer>
  </LoginContainer>;
};
export default LoginForm;
