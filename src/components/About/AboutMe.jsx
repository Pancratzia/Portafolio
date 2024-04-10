import { motion } from "framer-motion";
import RoundedPicture from "../utils/RoundedPicture";
import InfoCard from "./aboutme/InfoCard";
import Achievements from "./aboutme/Achievements";
import { useTranslation } from "react-i18next";

const AboutMe = () => {

  const [t] = useTranslation("global");

  return (
    <div className="container grid md:grid-cols-[repeat(1,1fr)] lg:grid-cols-[2fr_3fr] items-center gap-2 lg:gap-10">
      <motion.div
        className="w-64 h-64 my-5 mx-auto lg:w-96 lg:h-96"
        initial={{ rotate: 45, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RoundedPicture
          imageUrl="./img/personal/profile"
          description={t("alt.profile_picture")}
        />
      </motion.div>

      <section>
        <InfoCard />
        <Achievements />
        
      </section>
    </div>
  );
};

export default AboutMe;
