import styled from "styled-components";
import { WaveAnimation } from "../styles/Animations";

const HelloText = styled.p`
  right: 0;
  top: 0;
  position: absolute;
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem 4rem;
  justify-self: self-start;
  align-self: flex-end;

  .wave {
    padding-left: 2rem;
    font-size: 4rem;
    animation-name: ${WaveAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }
`;

function Hello() {
  return (
    <HelloText>
      {"Hello, World!"} <span className="wave">👋</span>
    </HelloText>
  );
}

export default Hello;
