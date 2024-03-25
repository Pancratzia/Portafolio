import Header from "../components/Layouts/Header";
import { motion } from "framer-motion";
import RoundedPicture from "../components/utils/RoundedPicture";

const About = () => {
  return (
    <motion.div
      className="min-h-screen p-6 font-d"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Header title={"< About Me />"} pageName={"About Me"} />

      <div className="container my-0 mx-auto grid md:grid-cols-[repeat(1,1fr)] lg:grid-cols-[1fr_2fr] items-center gap-2 lg:gap-10">
        <motion.div
          className="w-64 h-64 my-5 mx-auto lg:w-96 lg:h-96"
          initial={{ rotate: 45, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RoundedPicture
            imageUrl="./img/personal/profile"
            description="Laura Ortega - FullStack Web Developer Picture"
          />
        </motion.div>

        <div className="border-2 border-yellow-500 p-5 rounded-xl text-indigo-100 ">
          <p className="text-center text-white fluid-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero quis explicabo possimus debitis, illo quo dignissimos perspiciatis sapiente cupiditate quos quibusdam, inventore voluptate quas officiis cum molestias atque vero eos. Vel, dolores saepe ipsum quisquam laudantium at veniam reiciendis minima optio distinctio culpa pariatur dolorum quae soluta. Illo quos veritatis cumque asperiores, ut dolores dolor? Tempora blanditiis debitis consequuntur quis a officia unde aspernatur odit ad animi, necessitatibus doloribus.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
