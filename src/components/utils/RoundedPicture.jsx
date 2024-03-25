import PropTypes from 'prop-types'

const RoundedPicture = ({ imageUrl, description }) => {
  {
    /* image inside a circled picture with animated gradient */
  }
  return (
    <div className="rounded-full bg-[linear-gradient(to_right,theme(colors.purple.800),theme(colors.indigo.500),theme(colors.yellow.600),theme(colors.indigo.500),theme(colors.purple.800))] bg-[length:200%_auto] animate-gradient border-4 border-transparent">
      <picture>
        <source srcSet={`${imageUrl}.avif`} type="image/avif" />
        <source srcSet={`${imageUrl}.webp`} type="image/webp" />

        <img
          src={`${imageUrl}.png`}
          alt={description}
          className="rounded-full "
        />
      </picture>
    </div>
  );
};

export default RoundedPicture;

RoundedPicture.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string
}

RoundedPicture.defaultProps = {
  description: 'Picture with an animated gradient'
}
