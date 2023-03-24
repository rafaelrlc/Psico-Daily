import Link from "next/link";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: white;
  flex-direction: column;
  margin: 0;
  & img {
    margin: 0;
  }

  & button {
    padding: 1rem;
    background-color: #655dbb;
    color: white;
    border: none;
    border-radius: 10px;
  }

  & button:hover {
    background-color: #554da6;
    cursor: pointer;
  }
`;

export default function Custom404() {
  return (
    <ErrorContainer>
      <img src="https://svgur.com/i/rSd.svg" alt="404page_img" height={"80%"} />
      <h3>Oops! Página não encontrada</h3>
      <Link href="/login">
        <button color="blue">Ir para homepage</button>
      </Link>
    </ErrorContainer>
  );
}
