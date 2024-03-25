import RoundedPicture from "../components/utils/RoundedPicture";
import RedirectLinkButton from "../components/utils/RedirectLinkButton";
import { motion } from "framer-motion";
import Header from "../components/utils/Home/Header";
import Socials from "../components/utils/Home/Socials";

const Home = () => {
  return (
    <motion.div
      className="flex justify-center flex-col min-h-screen py-6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {/* main title */}
      <Header />

      <motion.div
        className="container my-0 mx-auto w-80 h-80 md:w-96 md:h-96"
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

      {/* Socials */}

      <Socials />

      {/* Go To "About Me" Page */}

      <div className="flex justify-center mt-5">
        <RedirectLinkButton text={"About Me"} link={"/about"} />
      </div>
    </motion.div>
  );
};

export default Home;
