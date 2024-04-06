import PropTypes from "prop-types";

const YellowCard = ({ children }) => {
  return (
    <div className="mt-2 border-yellow-600 border rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  );
};

export default YellowCard;

YellowCard.propTypes = {
  children: PropTypes.node.isRequired
}
