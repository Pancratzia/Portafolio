import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Skill = ({ name, Icon, delay }) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}
      viewport={{ once: true }}
      className="flex justify-center items-center flex-col gap-1"
    >
      <h5 className="sr-only md:not-sr-only fluid-md">{name}</h5>
      <Icon className="w-10 h-10" />
    </motion.div>
  );
};

export default Skill;

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  delay: PropTypes.string.isRequired
};
