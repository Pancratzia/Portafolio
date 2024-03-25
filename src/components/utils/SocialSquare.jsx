import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const SocialSquare = ({ Icon, text, links, color, hoverColor }) => {
  return (
    <Link
      to={links}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={`w-10 h-10 md:w-12 md:h-12 ${color} ${hoverColor} transition duration-300`} />
      <span className="sr-only">{text}</span>
    </Link>
  );
};

export default SocialSquare;

SocialSquare.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string
}

SocialSquare.defaultProps = {
  color: 'text-indigo-100',
  hoverColor: 'hover:text-yellow-100'
}
