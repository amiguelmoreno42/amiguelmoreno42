import { useState } from "react";
import { workInfo } from "../data/work-info";
import CourseCard from "../ui/CourseCard";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import SectionDescription from "../ui/SectionDescription";

function Work() {
  const [visibleDetailsIndex, setVisibleDetailsIndex] = useState(null);
  const workInfoSorted = workInfo.slice().reverse();

  const handleToggleDetails = (index) => {
    setVisibleDetailsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Section>
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

      {workInfoSorted.map((course, index) => (
        <CourseCard
          course={course}
          key={course.id}
          onToggleDetails={() => handleToggleDetails(index)}
          isVisible={visibleDetailsIndex === index}
          $typeItem="work"
        ></CourseCard>
      ))}
    </Section>
  );
}

export default Work;
