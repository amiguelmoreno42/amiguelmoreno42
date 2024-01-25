import styled from "styled-components";

const StyledProjectDetails = styled.div`
  background-color: var(--primary-color-light);
  border-radius: 5px;
  width: 120rem;
  display: grid;
  position: relative;

  grid-template-columns: repeat(3, 1fr);
`;
const ImageContainer = styled.div`
  border-radius: 5px;
  grid-column: span 2;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
const Technologies = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem;
`;
const Title = styled.h3`
  font-size: 4.2rem;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  line-height: 2.5;
  color: var(--secundary-color);
`;
const DeploymentButton = styled.a`
  position: absolute;

  bottom: 4rem;
  right: 0;
  margin: 1rem;
  background-color: var(--primary-color);
  color: var(--terciary-color);
  padding: 0.2rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.8rem;
  transition: all 0.3s;
  width: 25rem;

  &:hover {
    background-color: var(--secundary-color);
    color: var(--primary-color);
  }
`;

const GitHubtButton = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25rem;
  text-decoration: none;
  margin: 1rem;
  background-color: var(--primary-color);
  color: var(--terciary-color);
  padding: 0.2rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.8rem;
  transition: all 0.3s;

  &:hover {
    background-color: var(--secundary-color);
    color: var(--primary-color);
  }
`;
const TechEl = styled.div`
  background-color: var(--secundary-color);
  color: var(--primary-color);
  font-size: 1.8rem;
  padding: 0.2rem 0.6rem;
  font-weight: 600;
  border-radius: 5px;
`;

const Description = styled.div`
  text-align: justify;
  margin: 2rem 0 4rem;
  color: var(--secundary-color);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
`;

function ProjectDetails({ project }) {
  return (
    <StyledProjectDetails>
      <ImageContainer>
        <Image src={project.cover}></Image>
      </ImageContainer>
      <InfoContainer>
        <Title>{project.title}</Title>
        <Technologies>
          {project.technologies.map((tech, index) => (
            <TechEl key={index}>{tech}</TechEl>
          ))}
        </Technologies>
        <Description>{project.description}</Description>{" "}
        {project.deployLink && (
          <DeploymentButton href={project.deployLink} target="_blank">
            Go to Deployment Page
          </DeploymentButton>
        )}
        {project.repoLink && (
          <GitHubtButton href={project.repoLink} target="_blank">
            GitHub Repo
          </GitHubtButton>
        )}
      </InfoContainer>
    </StyledProjectDetails>
  );
}

export default ProjectDetails;