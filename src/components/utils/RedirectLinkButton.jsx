import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const RedirectLinkButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="flex justify-center items-center w-[max-content] rounded-full gap-1 px-4 py-2 fluid-xl border-2 border-indigo-100 transition duration-300 font-bold hover:border-purple-200 text-indigo-100 hover:text-purple-200"
    >
      {text}
    </Link>
  );
};

export default RedirectLinkButton;

RedirectLinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
