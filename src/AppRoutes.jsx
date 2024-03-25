import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About Me</div>} />
      <Route path="/skills" element={<div>Skills</div>} />
      <Route path="/projects" element={<div>Projects</div>} />
      <Route path="/contact" element={<div>Contact Me</div>} />
    </Routes>
  );
};

export default AppRoutes;
