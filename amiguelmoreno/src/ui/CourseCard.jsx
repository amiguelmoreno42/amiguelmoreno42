import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi2";
import Heading from "./Heading";

const CourseContainer = styled(motion.div)`
  background-color: var(--primary-color-light);
  color: var(--secundary-color);
  border-radius: 5px;
  margin: 10px;
  padding: 1rem;
  width: 100%;
  position: relative;
  max-width: 100rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 3rem;
  justify-content: space-between;
`;

const CourseDescription = styled.p`
  font-size: 1.8rem;
  padding: 2rem 0;
  text-align: justify;
`;

const CoverImage = styled.img`
  align-self: center;
  border-radius: 5px;
  width: 100%;
  min-width: 35rem;
  max-width: 35rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const InstitutionImage = styled.img`
  width: 10rem;
  background-color: var(--secundary-color);
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 0;
`;

const ButtonDetails = styled.button`
  min-width: 12rem;
  font-size: 1.6rem;
  font-weight: 600;
  align-self: flex-end;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: var(--terciary-color);
  padding: 0.5rem;
  transition: all 0.4s;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const CourseDetails = styled(motion.div)`
  img {
    width: 10rem;
  }
`;

const Duration = styled.p`
  position: absolute;
  margin: 2rem;
  right: 0;
  bottom: 0;
`;

const StyledList = styled.ul`
  padding: 2rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 2.2rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.6rem;
  }
`;

const CourseCard = ({ course, onToggleDetails, isVisible }) => {
  const handleToggleDetails = () => {
    onToggleDetails(!isVisible);
  };

  return (
    <CourseContainer>
      <CourseHeader>
        <CoverImage src={course.imageEducation} alt={course.title} />
        <InstitutionImage
          src={course.imageInstitution}
          alt={course.institution}
        />
        <div>
          <Heading as="h2">{course.title}</Heading>
          <CourseDescription>{course.description}</CourseDescription>
        </div>
        <ButtonDetails onClick={handleToggleDetails}>
          {isVisible ? "Hide Details" : "Show Details"}
        </ButtonDetails>
      </CourseHeader>

      <AnimatePresence>
        {isVisible && (
          <CourseDetails
            isVisible={isVisible}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {course.duration && (
              <Duration>Duration: {course.duration}</Duration>
            )}
            <StyledList>
              <p>I learned...</p>
              {course.skills.map((skill) => (
                <li key={skill}>
                  <HiChevronRight />
                  {skill}
                </li>
              ))}
            </StyledList>
          </CourseDetails>
        )}
      </AnimatePresence>
    </CourseContainer>
  );
};

export default CourseCard;
