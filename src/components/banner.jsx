import '../style/banner.scss'
import PropTypes from 'prop-types'

const Banner = ({ texte, photo }) => {
  return (
    <div className="Banner">
      <div className="Texte">{texte}</div>
      <img src={photo} alt="photo de la bannière du site" className="Photo" />
    </div>
  )
}

Banner.propTypes = {
  texte: PropTypes.string,
  photo: PropTypes.string,
}

export default Banner
