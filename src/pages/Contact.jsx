import styled from "styled-components";
import Heading from "../ui/Heading";
import FormContainer from "../ui/FormContainer";
import Section from "../ui/Section";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import SectionDescription from "../ui/SectionDescription";

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const SocialLinkContainer = styled.a`
  font-size: 5rem;
  color: var(--secundary-color);
  transition: all 0.3s;
  line-height: 0;

  &:hover {
    transform: scale(1.1);
    color: var(--terciary-color);
  }
`;

function Contact() {
  return (
    <Section>
      <Heading as="h1">Contact</Heading>

      <FormContainer></FormContainer>

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
      </SocialLinks>
    </Section>
  );
}

export default Contact;
