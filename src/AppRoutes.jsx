import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Error from "./pages/Error";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsPage /> }/>
        <Route path="/contact" element={<ContactPage />} />
        {/*Other routes redirect to error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
