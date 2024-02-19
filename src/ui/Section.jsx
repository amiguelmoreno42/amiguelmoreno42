import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  display: flex;
  // min-height: 100vh;
  flex-direction: column;
  color: var(--secundary-color);
  align-items: center;
  position: relative;
  padding: 5rem;

  @media (width <= 800px) {
    padding: 2rem;
  }
`;

export default Section;
