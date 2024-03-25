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

      <motion.div
        className="w-64 h-64 my-5 mx-auto"
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

      <div className="">
        <p className="text-center text-white">
          Como DESARROLLADORA FULLSTACK, me impulsa una pasión inquebrantable
          por la PROGRAMACIÓN, un amor por la RESOLUCIÓN DE PROBLEMAS, y una
          curiosidad insaciable por la exploración. Vivo en la búsqueda
          constante de conocimiento, fijando un compromiso con el aprendizaje
          continuo. Gracias a mis estudios en INGENIERÍA TELEMÁTICA en la
          Universidad Centro Occidental Lisandro Alvarado en Barquisimeto,
          Venezuela, he llegado a entender que ser programador es un VIAJE DE
          APRENDIZAJE Y DESAPRENDIZAJE PERPETUO.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
