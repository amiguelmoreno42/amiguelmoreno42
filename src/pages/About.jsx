import styled from "styled-components";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const Description = styled.div`
  font-size: 2rem;
  max-width: 100rem;

  p {
    margin: 4rem 0;
  }
`;

function About() {
  return (
    <Section id="about">
      <Heading as="h1">About</Heading>

      <Description>
        <p>
          I would like to point out that I have always been a curious person,
          who loves to discover how things really work. At the end of my degree
          in Administration and Finance, I decided to explore different career
          opportunities. I started learning Digital Marketing, established a
          small online business, learned and put into practice the basics of car
          mechanics, did a course in stock market investment and financial
          analysis, and took my first steps in the world of web development.
        </p>
        <p>
          After six months working as an administrative assistant, I had the
          great opportunity to take the admission tests to the programming
          campus of Telefonica called 42 Malaga. I spent a month doing projects
          and exams to finally be one of those selected among more than 300
          people and have the privilege of expanding my education in one of the
          most innovative campuses in the world, where I studied for more than a
          year.
        </p>
        <p>
          At the end of 2022, I co-founded a project as community manager for
          several influencers, achieving excellent results. At the end of that
          year I decided to leave the project aside in order to continue growing
          in what I really like, web development.
        </p>
        <p>
          Currently, I dedicate my time to the study of the German language and
          web development, focused on Front-End. In the medium term I want to
          learn Back-end and become a Full Stack programmer.
        </p>
        <p>
          My goal is to move to Switzerland, where I want to keep growing
          professionally and contribute to the success of innovative projects in
          the field of technology.
        </p>
      </Description>
    </Section>
  );
}

export default About;
