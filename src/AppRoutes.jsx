import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";
import About from "./pages/About";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/contact" element={<div>Contact Me</div>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
