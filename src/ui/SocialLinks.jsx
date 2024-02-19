import { FaFileDownload, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import cvPdf from "/cv.pdf";

const StyledSocialLinks = styled.div`
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
    left: 1rem;
    top: 1rem;
  }
`;

const SocialLinkContainer = styled.a`
  font-size: 5rem;
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

function SocialLinks() {
  return (
    <StyledSocialLinks>
      <SocialLinkContainer
        target="_blank"
        href="mailto: amiguelmoreno00@gmail.com"
        rel="noreferrer"
      >
        <IoMdMail />
      </SocialLinkContainer>

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
    </StyledSocialLinks>
  );
}

export default SocialLinks;
