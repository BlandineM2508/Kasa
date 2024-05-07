import '../style/banner.scss'
import PropTypes from 'prop-types'

const Banner = ({ texte, photo, alt, className }) => {
  return (
    <div className="Banner">
      <img src={photo} alt={alt} className={className} />
      <p className="Tagline_Banner">{texte}</p>
    </div>
  )
}

Banner.propTypes = {
  texte: PropTypes.string,
  photo: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
}

export default Banner
