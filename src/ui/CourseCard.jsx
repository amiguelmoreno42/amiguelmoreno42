import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi2";
import Heading from "./Heading";
import { useState } from "react";

const CourseContainer = styled(motion.div)`
  background-color: var(--primary-color-light);
  color: var(--secundary-color);
  border-radius: 5px;
  margin: 2rem;
  padding: 1rem;
  width: 100%;
  position: relative;
  max-width: 120rem;
  box-sizing: border-box;
  overflow: hidden;
  transition: box-shadow 0.3s;
  //box-shadow: rgba(170, 170, 170, 0.35) 0px 5px 15px;

  &:hover {
    box-shadow: rgba(170, 170, 170, 0.35) 0px 5px 15px;
  }

  @media (width <= 1000px) {
    width: 100%;
  }

  @media (width <= 800px) {
    width: 90%;
    margin: 2rem 0rem;
  }

  @media (width <= 500px) {
    width: 95%;
  }
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (width <= 1000px) {
    margin-bottom: -2rem;
    margin-top: 1rem;
  }

  @media (width <= 800px) {
    margin-top: 0rem;
  }
`;

const CourseHeader = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  justify-content: space-between;

  /*   @media (width <= 1000px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 2rem;
  } */

  @media (width <= 800px) {
    flex-direction: row;
    align-items: flex-start;
    padding: unset;
    gap: 2rem;
    justify-content: space-between;
  }

  @media (width <= 500px) {
    gap: unset;
    h2 {
      font-size: 1.6rem;
      margin-left: 2rem;
    }
  }
`;

const CourseDescription = styled.p`
  font-size: 1.8rem;
  padding: 2rem 0 4rem;
  align-self: flex-start;

  padding-right: 14rem;

  @media (width <= 1000px) {
    padding-right: 2rem;
    margin-bottom: 4rem;
  }

  @media (width <= 800px) {
    display: none;
  }
`;

const CourseDescriptionMobile = styled.p`
  font-size: 1.8rem;
  padding: 4rem 2rem;
  align-self: flex-start;

  @media (width >= 800px) {
    display: none;
  }
`;

const CoverImage = styled.img`
  ${(props) =>
    props.$typeItem === "work" &&
    css`
      background-color: white;
      padding: 2rem;

      @media (width <= 500px) {
        padding: 1rem;
      }
    `}

  align-self: center;
  border-radius: 5px;
  width: 100%;
  min-width: 18rem;
  max-width: 18rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  /* @media (width <= 1000px) {
    min-width: 25rem;
    max-width: 25rem;
    margin-top: 3rem;
  } */

  @media (width <= 800px) {
    min-width: 15rem;
    max-width: 15rem;
    margin-top: unset;
  }

  @media (width <= 500px) {
    min-width: 10rem;
    max-width: 10rem;
    margin-top: unset;
  }
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

  @media (width <= 800px) {
    margin: -0.5rem;
    left: 0;
    width: 7rem;
  }

  @media (width <= 500px) {
    width: 7rem;
  }
`;

const Date = styled.div`
  position: absolute;
  right: 0;

  font-weight: 500;
  color: var(--secundary-color);
  padding: 1rem 2rem;

  @media (width <= 1000px) {
    padding: 1.3rem;
    top: -1rem;
  }

  @media (width <= 800px) {
    display: none;
  }
`;

const DateMobile = styled.div`
  font-weight: 600;
  font-size: 1.8rem;

  color: var(--secundary-color);
  padding: 4rem 2rem 0;

  @media (width >= 800px) {
    display: none;
  }
`;

const ButtonDetails = styled.button`
  min-width: 12rem;
  white-space: nowrap;
  font-size: 1.8rem;
  font-weight: 600;
  position: absolute;
  border-radius: 5px;
  bottom: 0;
  right: 0;
  border: none;
  background-color: transparent;
  color: var(--terciary-color);
  padding: 0.7rem;
  transition: all 0.4s;

  &:hover {
    background-color: var(--primary-color);
  }

  @media (width <= 800px) {
    position: relative;
    align-self: flex-end;
  }

  @media (width <= 500px) {
    font-size: 1.6rem;
    right: 0;
    padding: 0.3rem 0.7rem;
  }
`;

const CourseDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
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
  padding-bottom: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 2.3rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
  }
`;

const CourseCard = ({ course, $typeItem }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleDetails = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CourseContainer>
      <CourseHeader>
        <CoverImage
          $typeItem={$typeItem}
          src={
            $typeItem === "education"
              ? course.imageEducation
              : course.imageCompany
          }
          alt={course.title}
        />
        {$typeItem === "education" && (
          <InstitutionImage
            src={course.imageInstitution}
            alt={course.institution}
          />
        )}

        {$typeItem === "work" && (
          <Date>
            {course.date} ({course.duration})
          </Date>
        )}
        <CourseInfo>
          <Heading as="h2">{course.title}</Heading>{" "}
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
            {course.duration && $typeItem === "education" && (
              <Duration>Duration: {course.duration}</Duration>
            )}
            {$typeItem === "work" && (
              <DateMobile>
                {course.date} ({course.duration})
              </DateMobile>
            )}

            <CourseDescriptionMobile>
              {course.description}
            </CourseDescriptionMobile>
            <StyledList>
              {$typeItem === "education" ? (
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
