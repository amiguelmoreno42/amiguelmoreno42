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
        Though my current work experience may not be directly tied to web
        development, it has granted me a unique perspective. Despite coming from
        different fields, I&apos;m really keen on jumping into web development.
        I&apos;m excited to take on new challenges and put my energy into
        learning and growing in this dynamic field. I&apos;m ready for any
        opportunity that comes my way and committed to making my mark in this
        exciting industry.
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
