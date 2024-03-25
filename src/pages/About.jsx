import Header from "../components/Layouts/Header";
import { motion } from "framer-motion";
import AboutMe from "../components/About/AboutMe";

const About = () => {
  return (
    <motion.div
      className="min-h-screen py-6 font-d"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Header title={"< About Me />"} pageName={"About Me"} />

      <div className="mx-5">
        <AboutMe />
      </div>
    </motion.div>
  );
};

export default About;
