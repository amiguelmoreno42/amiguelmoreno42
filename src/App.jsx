//import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./pages/Education";
import AppLayout from "./ui/AppLayout";
import Presentation from "./pages/Presentation";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
//import "./App.css";
//import { ScrollToTop } from "./styles/FramerMotionHelpers";

function App() {
  return (
    <>
      {/* <ScrollToTop></ScrollToTop> */}
      <GlobalStyles></GlobalStyles>
      <AppLayout></AppLayout>
    </>
  );
}

export default App;
