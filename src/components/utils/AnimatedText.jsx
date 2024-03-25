import PropTypes from 'prop-types'
const AnimatedText = ({ text }) => {
  return (
    <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.800),theme(colors.indigo.500),theme(colors.yellow.600),theme(colors.indigo.500),theme(colors.purple.800))] bg-[length:200%_auto] animate-gradient">{text}</span>
  )
}

export default AnimatedText;

AnimatedText.propTypes = {
  text: PropTypes.string
}