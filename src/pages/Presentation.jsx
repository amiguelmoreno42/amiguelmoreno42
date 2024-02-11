import styled from "styled-components";
//import { HiArrowDown } from "react-icons/hi2";
import { WaveAnimation, ZoomInZoomOut } from "../styles/Animations";
import { NoSelect } from "../styles/StylesHelpers";
//import backgroundImg from "../assets/img/utils/background-name.png";
import profileImg from "../assets/img/utils/profile-photo.jpeg";
import { HiArrowDown } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileDownload, FaGithubSquare } from "react-icons/fa";
import cvPdf from "/cv.pdf";

const StyledPresentation = styled.div`
  //${NoSelect} // class to not let people select

  width: 100%;
  height: 100vh;
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
  font-weight: 500;
  font-family: "Dangrek", cursive;
  color: white;

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

const SocialLinks = styled.div`
  position: absolute;
  right: 5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  @media (width <= 1050px) {
    flex-direction: row;
    top: 7rem;
    left: 10rem;
    right: unset;
    transform: unset;
  }

  @media (width <= 800px) {
    flex-direction: column;
    left: 3rem;
    top: 3rem;
  }
`;

const SocialLinkContainer = styled.a`
  font-size: 6rem;
  color: var(--secundary-color);
  transition: all 0.5s;
  line-height: 0;

  @media (width <= 800px) {
    font-size: 4rem;
  }

  &:hover {
    color: var(--terciary-color);
  }
`;

const ArrowDownLink = styled.a`
  background-color: var(--terciary-color);
  font-size: 5rem;
  padding: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;

  color: var(--primary-color);
  border-radius: 5px;
  animation: ${ZoomInZoomOut} 2s ease infinite;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: var(--secundary-color);
  }

  @media (width <= 800px) {
    bottom: 10rem;
  }
`;

function Presentation() {
  return (
    <StyledPresentation id="presentation">
      <HelloText>
        {"Hello, World!"} <span className="wave">👋</span>
      </HelloText>
      <SocialLinks>
        <SocialLinkContainer
          target="_blank"
          href="https://www.linkedin.com/in/miguelmoreno00/"
          rel="noreferrer"
        >
          <FaLinkedin />
        </SocialLinkContainer>

        <SocialLinkContainer
          target="_blank"
          href="https://github.com/amiguelmoreno"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </SocialLinkContainer>

        <SocialLinkContainer
          target="_blank"
          href={cvPdf}
          download="MiguelMorenoCV"
          title="Click to download my CV"
          rel="noreferrer"
        >
          <FaFileDownload />
        </SocialLinkContainer>
      </SocialLinks>
      <ProfileImage src={profileImg} alt="profile image" />
      <Title>Miguel Moreno</Title>
      <JobPosition>Software Developer</JobPosition>
      <ArrowDownLink href="#work">
        <HiArrowDown />
      </ArrowDownLink>
    </StyledPresentation>
  );
}

export default Presentation;
