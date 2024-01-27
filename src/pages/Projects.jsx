import Heading from "../ui/Heading";
import ProjectsSectContainer from "../ui/ProjectsSectContainer";
import Section from "../ui/Section";
import SectionDescription from "../ui/SectionDescription";

function Projects() {
  return (
    <Section id="projects">
      <Heading as="h1">Projects</Heading>
      <SectionDescription>
        Welcome to my projects section, each one reflects a step in my journey
        of learning and development. From web applications to more experimental
        projects, these works showcase my dedication to tackling diverse
        challenges and applying creative solutions.
      </SectionDescription>

      <ProjectsSectContainer></ProjectsSectContainer>
    </Section>
  );
}

export default Projects;
