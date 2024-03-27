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

      <main className="lg:mt-10">
        <AboutMe />
      </main>

      <div className="container grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] gap-5 items-center">
        <div className="rounded-xl p-5 text-slate-100 border-2 border-indigo-100">
          <h3 className="font-bold fluid-lg uppercase text-center mb-5">
            Interests
          </h3>

          <ul className="text-center grid grid-cols-2">
            <li>Music</li>
            <li>Reading</li>
            <li>TFT</li>
            <li>Dogs</li>
          </ul>
        </div>

        <div className="rounded-xl p-5 text-slate-100 border-2 border-indigo-100">
          <h3 className="font-bold fluid-lg uppercase text-center mb-5">
            Languages
          </h3>

          <p>
            Spanish: <span>Native</span>
          </p>

          <p>
            English: <span>Fluent</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
