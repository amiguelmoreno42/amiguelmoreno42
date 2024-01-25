import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi2";
import Heading from "./Heading";

const CourseContainer = styled(motion.div)`
  background-color: var(--primary-color-light);
  color: var(--secundary-color);
  border-radius: 5px;
  margin: 2rem;
  padding: 1rem;
  padding-left: 3rem;
  width: 100%;
  position: relative;
  max-width: 120rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
  align-self: flex-start;
  text-align: justify;
`;

const CoverImage = styled.img`
  ${(props) =>
    props.typeItem === "work" &&
    css`
      background-color: white;
      padding: 2rem;
    `}

  align-self: center;
  border-radius: 5px;
  width: 100%;
  min-width: 18rem;
  max-width: 18rem;
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

const Date = styled.div`
  position: absolute;
  right: 0;
  font-weight: 500;
  color: var(--secundary-color);
  padding: 1rem 2rem;
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
  display: flex;
  align-items: center;
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
    font-weight: 500;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.6rem;
  }
`;

const CourseCard = ({ course, onToggleDetails, isVisible, typeItem }) => {
  const handleToggleDetails = () => {
    onToggleDetails(!isVisible);
  };

  return (
    <CourseContainer>
      <CourseHeader>
        <CoverImage
          typeItem={typeItem}
          src={
            typeItem === "education"
              ? course.imageEducation
              : course.imageCompany
          }
          alt={course.title}
        />
        {typeItem === "education" && (
          <InstitutionImage
            src={course.imageInstitution}
            alt={course.institution}
          />
        )}

        {typeItem === "work" && (
          <Date>
            {course.date} ({course.duration})
          </Date>
        )}
        <CourseInfo>
          <Heading as="h2">{course.title}</Heading>
          <CourseDescription>{course.description}</CourseDescription>
        </CourseInfo>
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
            {course.duration && typeItem === "education" && (
              <Duration>Duration: {course.duration}</Duration>
            )}
            <StyledList>
              {typeItem === "education" ? (
                <p>I learned...</p>
              ) : (
                <p>What did I do?</p>
              )}
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
