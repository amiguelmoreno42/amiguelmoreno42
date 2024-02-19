import { useEffect } from "react";
import logo from "../assets/img/utils/favicon.png";
import styled from "styled-components";
import LogoM from "./LogoM";
import { Opacity } from "../styles/Animations";

const StyledIntro = styled.div`
  background-color: var(--primary-color);
  border-bottom: 1rem solid var(--terciary-color);
  height: 100dvh;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 9999;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s;

  img {
    opacity: 0;
    width: 20rem;
    border-radius: 10px;
    animation: ${Opacity} 0.5s forwards;
    animation-delay: 0.5s;

    @media only screen and (max-width: 800px) {
      width: 30rem;
    }
  }
`;

function Intro() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      let intro = document.querySelector(".intro");
      intro.style.top = "-100vh";
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledIntro className="intro">
      <LogoM></LogoM>
    </StyledIntro>
  );
}

export default Intro;
