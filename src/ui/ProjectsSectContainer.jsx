import styled from "styled-components";
import { projectsInfo } from "../data/projects-info";
import ProjectModal from "./ProjectModal";

const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;
const HeaderProyectSect = styled.h2`
  width: max-content;
  font-size: 2.8rem;
  margin-bottom: 6rem;
`;

const ProyectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 3rem;
  row-gap: 6rem;
`;

const StyledProjectsSectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

function ProjectsSectContainer() {
  return (
    <StyledProjectsSectContainer>
      <StyledProjectContainer>
        <HeaderProyectSect>Web Development</HeaderProyectSect>
        <ProyectsContainer>
          {projectsInfo
            .filter((project) => project.type === "web")
            .map((project) => (
              <ProjectModal project={project} key={project.id}></ProjectModal>
            ))}
        </ProyectsContainer>
      </StyledProjectContainer>
      <StyledProjectContainer>
        <HeaderProyectSect>Software (42 Malaga Projects)</HeaderProyectSect>
        <ProyectsContainer>
          {projectsInfo
            .filter((project) => project.type === "software")
            .map((project) => (
              <ProjectModal project={project} key={project.id}></ProjectModal>
            ))}
        </ProyectsContainer>
      </StyledProjectContainer>
    </StyledProjectsSectContainer>
  );
}

export default ProjectsSectContainer;
