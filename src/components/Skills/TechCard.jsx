import PropTypes from "prop-types";
import Skill from "./Skill";

const TechCard = ({ name, stack}) => {
  return (
    <div className="border-2 border-yellow-600 p-5 rounded-xl">
      <h3 className="font-bold fluid-lg uppercase text-center mb-5">{name}</h3>

      <div className="grid grid-cols-4 gap-4">
        {stack.map(({ name, Icon }, index) => (
          <Skill key={index} name={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default TechCard;

TechCard.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
}
