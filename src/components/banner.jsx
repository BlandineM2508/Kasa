import '../style/banner.scss'
import PropTypes from 'prop-types'

const Banner = ({ texte, photo, homePage }) => {
  return (
    <div className="Banner">
      <img
        src={photo}
        alt="photo de la bannière du site"
        className={`Photo_Banner${homePage ? 'Home' : ''}`}
      />
      <p className="Texte_Banner">{texte}</p>
    </div>
  )
}

Banner.propTypes = {
  texte: PropTypes.string,
  photo: PropTypes.string,
  homePage: PropTypes.bool,
}

export default Banner
