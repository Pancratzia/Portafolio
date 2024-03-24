import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About Me</div>} />
      <Route path="/skills" element={<div>Skills</div>} />
      <Route path="/projects" element={<div>Projects</div>} />
      <Route path="/contact" element={<div>Contact Me</div>} />
    </Routes>
  );
};

export default AppRoutes;
