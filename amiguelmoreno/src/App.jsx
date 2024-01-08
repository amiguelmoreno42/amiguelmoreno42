import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Education from "./pages/Education";
import AppLayout from "./ui/AppLayout";
import Presentation from "./pages/Presentation";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate replace to="presentation" />}
            ></Route>
            <Route
              path="presentation"
              element={<Presentation></Presentation>}
            ></Route>
            <Route path="education" element={<Education></Education>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
