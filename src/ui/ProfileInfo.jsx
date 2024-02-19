import styled from "styled-components";
import profileImg from "../assets/img/utils/profile-photo.jpeg";

const ProfileImage = styled.img`
  border-radius: 100%;
  width: 40rem;
  border: 4px solid var(--terciary-color);
  margin-bottom: 5rem;

  @media (width <= 1200px) {
    width: 30rem;
  }

  @media (width <= 800px) {
    width: 20rem;
  }
`;

const Title = styled.h1`
  font-size: 12rem;
  color: transparent;
  line-height: 1.6;
  font-weight: 500;
  font-family: "Dangrek", cursive;
  color: white;

  @media (width <= 800px) {
    font-size: 6rem;
    background-image: none;
    color: white;
    font-weight: 500;
  }
`;

const JobPosition = styled.p`
  font-size: 5rem;
  color: var(--terciary-color);

  @media (width <= 800px) {
    font-size: 3rem;
  }
`;

function ProfileInfo() {
  return (
    <>
      <ProfileImage src={profileImg} alt="profile image" />
      <Title>Miguel Moreno</Title>
      <JobPosition>Software Developer</JobPosition>
    </>
  );
}

export default ProfileInfo;
