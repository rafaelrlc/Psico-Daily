import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const LoadingSpinner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-weight: bold;
`;

const HomePsicologo = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/psicologo/pacientes");
  });
  return <LoadingSpinner>Loading...</LoadingSpinner>;
};

export default HomePsicologo;
