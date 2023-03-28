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

  & h3 {
    font-size: 1.75rem;
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

  /*  1200px (Landscape Tablets) */

  @media (max-width: 75em) {
  }

  /* 944px (Tablets) */

  @media (max-width: 59em) {
  }
`;

export default function Custom404() {
  return (
    <ErrorContainer>
      <img
        src="https://raw.githubusercontent.com/rafaelrlc/Psico-Daily/59d728a2bedef958a3162c0e3778c97eeb4f3d33/utils/images/404-image.svg"
        alt="404page_img"
      />
      <h3>Oops! Página não encontrada</h3>
      <Link href="/">
        <button color="blue">Ir para homepage</button>
      </Link>
    </ErrorContainer>
  );
}
