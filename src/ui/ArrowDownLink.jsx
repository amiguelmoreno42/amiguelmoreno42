import { HiArrowDown } from "react-icons/hi2";
import styled from "styled-components";
import { ZoomInZoomOut } from "../styles/Animations";

const StyledArrowDownLink = styled.a`
  background-color: var(--terciary-color);
  font-size: 5rem;
  padding: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;

  color: var(--primary-color);
  border-radius: 5px;
  animation: ${ZoomInZoomOut} 2s ease infinite;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: var(--secundary-color);
  }

  @media (width <= 800px) {
    bottom: 22rem;
  }
`;

function ArrowDownLink() {
  return (
    <StyledArrowDownLink href="#work">
      <HiArrowDown />
    </StyledArrowDownLink>
  );
}

export default ArrowDownLink;
