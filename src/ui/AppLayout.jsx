import styled from "styled-components";
import Sidebar from "./Sidebar";
import Presentation from "../pages/Presentation";
import Education from "../pages/Education";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Intro from "./Intro";
//import Contact from "../pages/Contact";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: var(--primary-color);
  margin-left: 14rem;
  flex: 1;

  @media (width <= 800px) {
    margin-left: 0rem;
  }
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  //justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 3.2rem;

  @media (width <= 800px) {
    margin-bottom: 15rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Intro></Intro>
      <Sidebar></Sidebar>
      <Main>
        <Container>
          <Presentation />
          <About></About>
          <Work />
          <Projects />
          <Education />
          {/*  <Contact /> */}
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
