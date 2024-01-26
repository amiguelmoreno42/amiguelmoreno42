import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

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
      <Sidebar></Sidebar>
      <Main>
        <Container>
          <Outlet></Outlet>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
