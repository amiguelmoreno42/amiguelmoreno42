import { workInfo } from "../data/work-info";
import CourseCard from "../ui/CourseCard";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import SectionDescription from "../ui/SectionDescription";

function Work() {
  const workInfoSorted = workInfo.slice().reverse();

  return (
    <Section id="work">
      <Heading as="h1">Work Experience</Heading>
      <SectionDescription>
        Though my current work experience may not be directly related to web
        development, it has given me a unique perspective.I&apos;m very excited
        to take on new challenges and put my energy into learning and growing in
        this dynamic field. I&apos;m ready for any opportunity that comes my way
        and committed to making my mark in this exciting industry.
      </SectionDescription>

      {workInfoSorted.map((course) => (
        <CourseCard
          course={course}
          key={course.id}
          $typeItem="work"
        ></CourseCard>
      ))}
    </Section>
  );
}

export default Work;
