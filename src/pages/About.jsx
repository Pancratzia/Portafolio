import Header from "../components/Layouts/Header";
import { motion } from "framer-motion";
import AboutMe from "../components/About/AboutMe";
import { Link } from "react-router-dom";

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

      <div className="w-full flex justify-center bg-indigo-500 my-5 py-2">
        <Link className="font-bold uppercase text-indigo-100" to={"https://drive.google.com/file/d/1WLwEsZ-HxfsULa-ulTUeLAwWk9sYMwou/view"} target="_blank"> Read My CV </Link>
      </div>
    </motion.div>
  );
};

export default About;
