import Header from "../components/Layouts/Header";
import { motion } from "framer-motion";
import AboutMe from "../components/About/AboutMe";
import useFetch from "../hooks/useFetch";

const About = () => {
  const { data, loading, error } = useFetch(
    "https://api.github.com/users/pancratzia"
  );

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

      <div className="mx-3 md:mx-0">
        <div className="container my-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div className="bg-slate-100 opacity-90 p-5 rounded text-center text-slate-950 inline-block border-8 border-slate-950 border-t-yellow-600">
            <h4 className="font-bold uppercase fluid-lg text-purple-800">
              GitHub Repositories
            </h4>
            <h3 className="font-bold fluid-4xl text-purple-800">
              {!loading && !error && data.public_repos}
              {loading && "Loading..."}
              {error && "Error"}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
