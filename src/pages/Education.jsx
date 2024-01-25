import { educationInfo } from "../data/education-info";
import CourseCard from "../ui/CourseCard";
import { useState } from "react";
import SectionDescription from "../ui/SectionDescription";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

function Education() {
  const [visibleDetailsIndex, setVisibleDetailsIndex] = useState(null);

  const handleToggleDetails = (index) => {
    setVisibleDetailsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const educationInfoSorted = educationInfo.slice().reverse();

  return (
    <Section>
      <Heading as="h1">Education</Heading>
      <SectionDescription>
        Explore through my web development courses and trainings. Discover the
        skills and knowledge I&apos;ve gained in this exciting learning
        adventure.
      </SectionDescription>
      {educationInfoSorted.map((course, index) => (
        <CourseCard
          course={course}
          key={course.id}
          onToggleDetails={() => handleToggleDetails(index)}
          isVisible={visibleDetailsIndex === index}
          $typeItem="education"
        ></CourseCard>
      ))}
    </Section>
  );
}

export default Education;
