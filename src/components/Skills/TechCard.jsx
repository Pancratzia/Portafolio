import PropTypes from "prop-types";
import Skill from "./Skill";
import { motion } from "framer-motion";

const TechCard = ({ name, stack, delay }) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: delay }}
      viewport={{ once: true }}
      className="border-2 border-yellow-600 p-5 rounded-xl"
    >
      <h3 className="font-bold fluid-lg uppercase text-center mb-5">{name}</h3>

      <div className="grid grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {stack.map(({ name, Icon }, index) => (
          <Skill key={index} name={name} Icon={Icon} delay={`.${index + 1}`} />
        ))}
      </div>
    </motion.div>
  );
};

export default TechCard;

TechCard.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  delay: PropTypes.string.isRequired
};
