import styled from "styled-components";
//import { HiArrowDown } from "react-icons/hi2";
import { Back, WaveAnimation } from "../styles/Animations";
import { NoSelect } from "../styles/StylesHelpers";
import backgroundImg from "../assets/img/utils/background-name.png";
import profileImg from "../assets/img/utils/profile-photo.jpeg";

const StyledPresentation = styled.div`
  ${NoSelect} // class to not let people select 
  
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--secundary-color);
  align-items: center;
  position: relative;

  @media (width <= 800px) {
    justify-content: start;
    padding-top: 16rem;
  }
`;

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

const ProfileImage = styled.img`
  border-radius: 100%;
  width: 40rem;
  border: 4px solid var(--terciary-color);
  margin-bottom: 5rem;

  @media (width <= 1200px) {
    width: 30rem;
  }

  @media (width <= 800px) {
    width: 20rem;
  }
`;

const Title = styled.h1`
  font-size: 12rem;
  color: transparent;
  line-height: 1.6;
  font-family: "Dangrek", cursive;
  -webkit-text-stroke: 0.1px var(--secundary-color);
  background-image: url(${backgroundImg});
  -webkit-background-clip: text;
  background-clip: text;
  background-position: 0 0;
  animation: ${Back} 30s linear infinite alternate;
  animation-timing-function: ease-in-out;

  @media (width <= 800px) {
    font-size: 6rem;
    background-image: none;
    color: white;
    font-weight: 500;
  }
`;

const JobPosition = styled.p`
  font-size: 5rem;
  color: var(--terciary-color);

  @media (width <= 800px) {
    font-size: 3rem;
  }
`;

function Presentation() {
  return (
    <StyledPresentation id="presentation">
      <HelloText>
        {"Hello, World!"} <span className="wave">👋</span>
      </HelloText>
      <ProfileImage src={profileImg} alt="profile image" />
      <Title>Miguel Moreno</Title>
      <JobPosition>Software Developer</JobPosition>
      {/*  <ArrowDownLink to="/education">
        <HiArrowDown />
      </ArrowDownLink> */}
    </StyledPresentation>
  );
}

export default Presentation;
