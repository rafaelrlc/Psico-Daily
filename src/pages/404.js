import Link from "next/link";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: white;
  flex-direction: column;
  margin: 0;

  & img {
    margin: 0;
    height: 75%;
  }

  & button {
    padding: 2rem;
    background-color: #655dbb;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  & button:hover {
    background-color: #554da6;
    cursor: pointer;
  }

  & h1 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  /* 1344px (Smaller desktops) */

  @media (max-width: 84em) {
    & button {
      padding: 1.6rem;
      border-radius: 9px;
      font-size: 1.25;
    }

    & h3 {
      font-size: 1.45rem;
    }
  }
`;

export default function Custom404() {
  return (
    <ErrorContainer>
      <img
        src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/59d728a2bedef958a3162c0e3778c97eeb4f3d33/utils/images/404-image.svg"
        alt="404page_img"
      />
      <h1>Oops! Página não encontrada</h1>
      <Link href="/">
        <button color="blue">Ir para homepage</button>
      </Link>
    </ErrorContainer>
  );
}
