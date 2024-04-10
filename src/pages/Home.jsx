import RoundedPicture from "../components/utils/RoundedPicture";
import RedirectLinkButton from "../components/utils/RedirectLinkButton";
import { motion } from "framer-motion";
import Header from "../components/Home/Header";
import Socials from "../components/utils/Socials";
import ChangeLangBTN from "../components/utils/ChangeLangBTN";
import { useTranslation } from "react-i18next";

const Home = () => {

  const [t] = useTranslation("global");
  return (
    <motion.div
      className="flex justify-center flex-col min-h-screen py-2 md:py-6 relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-0 h-0">
        <ChangeLangBTN />
      </div>
      {/* main title */}
      <Header />

      <motion.div
        className="container w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
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
        <RedirectLinkButton text={t("buttons.about_me")} link={"/about"} />
      </div>
    </motion.div>
  );
};

export default Home;
