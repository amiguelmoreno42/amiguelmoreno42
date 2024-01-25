import styled from "styled-components";
import { FaBriefcase, FaCodeFork, FaSchool } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import LogoM from "./LogoM";
import { Link } from "react-router-dom";

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 14rem;
  position: fixed;
  background-color: var(--primary-color);
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-row: 1 / -1;
  //border-right: 1px dotted var(--secundary-color);
  z-index: 10;

  @media (width <= 800px) {
    height: 8rem;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    bottom: 0;
    background-color: var(--primary-color);
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  svg {
    fill: var(--secundary-color);
    width: 8rem;
    height: 8rem;
    transition: all 0.3s;

    @media (width <= 800px) {
      width: 7rem;
      height: 7rem;
      fill: var(--terciary-color);
    }

    &:hover {
      transform: scale(1.1);
      fill: var(--terciary-color);
    }
  }

  @media (width <= 800px) {
    background-color: var(--primary-color-light);
    margin-right: -2rem;
    border: 1px solid var(--terciary-color);
    padding: 0.2rem;
    padding-bottom: 1.8rem;
    padding-right: 1.8rem;
    border-radius: 5px;
  }
`;

const SectionsLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;

  @media (width <= 800px) {
    flex-direction: row;
    background-color: var(--primary-color-light);
    justify-content: space-evenly;
    width: 100%;
    gap: 0;
    height: 100%;
    border-top: 1px solid var(--terciary-color);
  }
`;

const SectionLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  position: relative;
  width: auto;
  padding: 1.2rem;
  background-color: var(--secundary-color);
  border-radius: 5px;
  color: var(--primary-color);
  font-size: 3.5rem;
  font-weight: 700;
  transition: color 0.4s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

  @media (width <= 800px) {
    background-color: unset;
    color: var(--terciary-color);
    box-shadow: unset;
    font-size: 3.2rem;

    width: 100%;
  }

  &:hover {
    color: var(--terciary-color);
    transition: all 0.6s;

    & p {
      transform: translateX(36rem);
    }
  }

  p {
    font-size: 2.3rem;
    color: var(--primary-color);
    background-color: var(--terciary-color);
    position: absolute;
    white-space: nowrap;
    padding: 1rem 2rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: -30rem;
    transition: all 0.5s;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
    z-index: -1;

    @media (width <= 800px) {
      display: none;
    }
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <LogoContainer to={"/"}>
        <LogoM />
      </LogoContainer>

      <SectionsLinks>
        <SectionLinkContainer to="/education">
          <FaSchool />
          <p>Education</p>
        </SectionLinkContainer>

        <SectionLinkContainer to="/work">
          <FaBriefcase />
          <p>Work Experience</p>
        </SectionLinkContainer>

        <SectionLinkContainer to="/projects">
          <FaCodeFork />
          <p>Projects</p>
        </SectionLinkContainer>

        <SectionLinkContainer to="/contact">
          <FaUser />
          <p>Contact</p>
        </SectionLinkContainer>
      </SectionsLinks>
    </StyledSidebar>
  );
}

export default Sidebar;
