import PropTypes from "prop-types";

const Skill = ({ name, Icon }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-1">
      <h5 className="sr-only md:not-sr-only fluid-md">{name}</h5>
      <Icon className="w-10 h-10" />
    </div>
  );
};

export default Skill;

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
}
