import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./pages/Education";
import AppLayout from "./ui/AppLayout";
import Presentation from "./pages/Presentation";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
//import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollToTop, pageVariants } from "./styles/FramerMotionHelpers";

const pageStyle = {
  width: "100%", // Establecer el ancho al 100%
};

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route
              index
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="presentation"
                    variants={pageVariants}
                    style={pageStyle}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Presentation />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="presentation"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="presentation"
                    variants={pageVariants}
                    initial="initial"
                    style={pageStyle}
                    animate="animate"
                    exit="exit"
                  >
                    <Presentation />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="education"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="education"
                    variants={pageVariants}
                    initial="initial"
                    style={pageStyle}
                    animate="animate"
                    exit="exit"
                  >
                    <Education />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="work"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="work"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    style={pageStyle}
                    exit="exit"
                  >
                    <Work />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="projects"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="projects"
                    variants={pageVariants}
                    initial="initial"
                    style={pageStyle}
                    animate="animate"
                    exit="exit"
                  >
                    <Projects />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="contact"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="contact"
                    variants={pageVariants}
                    style={pageStyle}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Contact />
                  </motion.div>
                </AnimatePresence>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
