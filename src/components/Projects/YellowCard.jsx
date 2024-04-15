import PropTypes from "prop-types";

const YellowCard = ({ children, grid = true }) => {
  const styles = `${`container mt-2 border-yellow-600 border rounded-xl py-5 px-2 md:p-5`} ${ grid ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` : ""}`

  
  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default YellowCard;

YellowCard.propTypes = {
  children: PropTypes.node.isRequired,
  grid: PropTypes.bool
}
