import styled from "styled-components";

const StyledProjectCard = styled.div`
  background-color: var(--primary-color-light);
  width: 35rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  padding: 1rem;
  transition: box-shadow 0.3s;
  //
  //border: 1px solid var(--terciary-color);

  &:hover {
    box-shadow: rgba(170, 170, 170, 0.35) 0px 5px 15px;
  }

  @media (width <= 800px) {
    width: 90vw;
    flex-direction: row;
    flex: 1;
    background-color: transparent;
    border-bottom: 2px solid var(--terciary-color);
    border-radius: 0px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
`;
const Image = styled.img`
  height: 20rem;
  width: 100%;
  border-radius: 5px;

  @media (width <= 880px) {
    height: unset;
    width: 12rem;
  }
`;
const Technologies = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  display: flex;
  gap: 1rem;
  margin-top: -1rem;

  @media (width <= 880px) {
    top: unset;
    bottom: -1.7rem;
    right: unset;
    left: 0;
  }
`;
const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 2.5;
  padding: 1rem;

  @media (width <= 880px) {
    padding-left: 2rem;
  }
`;
const MoreButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
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
  background-color: var(--primary-color);
  color: var(--terciary-color);
  font-size: 1.6rem;
  padding: 0.2rem 0.6rem;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <Technologies>
        {project.technologies.map((tech, index) => (
          <TechEl key={index}>{tech}</TechEl>
        ))}
      </Technologies>
      <ImageContainer>
        <Image src={project.cover}></Image>
      </ImageContainer>
      <div>
        <Title>{project.title}</Title>
        <MoreButton>See More</MoreButton>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
