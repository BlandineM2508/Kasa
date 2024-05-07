import PropTypes from 'prop-types'
import Star_Filled from '/assets/star_filled.svg'
import Star_Empty from '/assets/star_empty.svg'

const Rating = ({ rating }) => {
  const maxRating = 5 // Nombre maximum d'étoiles
  const filledStars = rating // Nombre d'étoiles pleines
  const emptyStars = maxRating - filledStars // Nombre d'étoiles vides

  // Fonction pour générer les étoiles pleines
  const generateFilledStars = () => {
    const stars = []
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <div key={i}>
          <img className="Stars" src={Star_Filled} alt="etoile remplie" />
        </div>
      )
    }
    return stars
  }

  // Fonction pour générer les étoiles vides
  const generateEmptyStars = () => {
    const stars = []
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <div key={i + filledStars}>
          <img className="Stars" src={Star_Empty} alt="etoile vide" />
        </div>
      )
    }
    return stars
  }

  return (
    <div className="Logement_Rating">
      {generateFilledStars()}
      {generateEmptyStars()}
    </div>
  )
}

// Définir les PropTypes pour le composant Rating
Rating.propTypes = {
  rating: PropTypes.string,
}
export default Rating
