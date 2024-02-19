import styled from "styled-components";
import SocialLinks from "../ui/SocialLinks";
import ProfileInfo from "../ui/ProfileInfo";
import Hello from "../ui/Hello";
import ArrowDownLink from "../ui/ArrowDownLink";

const StyledPresentation = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--secundary-color);
  align-items: center;
  position: relative;

  @media (width <= 800px) {
    justify-content: start;
    padding-top: 16rem;
  }
`;

function Presentation() {
  return (
    <StyledPresentation id="presentation">
      <Hello></Hello>
      <ProfileInfo></ProfileInfo>
      <SocialLinks></SocialLinks>
      <ArrowDownLink></ArrowDownLink>
    </StyledPresentation>
  );
}

export default Presentation;
