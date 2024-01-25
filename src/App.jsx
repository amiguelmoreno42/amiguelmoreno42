import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Education from "./pages/Education";
import AppLayout from "./ui/AppLayout";
import Presentation from "./pages/Presentation";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

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
            <Route path="work" element={<Work></Work>}></Route>
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
