import { educationInfo } from "../data/education-info";
import CourseCard from "../ui/CourseCard";

import SectionDescription from "../ui/SectionDescription";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

function Education() {
  const educationInfoSorted = educationInfo.slice().reverse();

  return (
    <Section id="education">
      <Heading as="h1">Education</Heading>
      <SectionDescription>
        Explore through my web development courses and trainings. Discover the
        skills and knowledge I&apos;ve gained in this exciting learning
        adventure.
      </SectionDescription>
      {educationInfoSorted.map((course) => (
        <CourseCard
          course={course}
          key={course.id}
          $typeItem="education"
        ></CourseCard>
      ))}
    </Section>
  );
}

export default Education;
