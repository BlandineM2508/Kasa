import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../public/logements.json'
import Right_Arrow from '../../public/assets/right_arrow.svg'
import Left_Arrow from '../../public/assets/left_arrow.svg'
import '../style/carrousel.scss'

const Gallery = () => {
  const { id } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    // Trouver le logement correspondant à l'ID dans les paramètres d'URL
    const selectedLogement = data.find((item) => item.id === id)
    if (selectedLogement) {
      setLogement(selectedLogement)
    }
  }, [id])

  const goToPrevious = () => {
    if (logement && logement.pictures) {
      const newIndex =
        currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    }
  }

  const goToNext = () => {
    if (logement && logement.pictures) {
      const newIndex =
        currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }
  }

  console.log(currentIndex)
  return (
    <div className="Carrousel">
      {logement && logement.pictures && logement.pictures.length > 1 && (
        <>
          <img
            onClick={goToPrevious}
            className="Left_Arrow"
            src={Left_Arrow}
            alt="fleche de gauche"
          />

          <img
            onClick={goToNext}
            className="Right_Arrow"
            src={Right_Arrow}
            alt="fleche de droite"
          />
        </>
      )}
      {logement && logement.pictures && (
        <img
          className="Photo_Carrousel"
          src={logement.pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      )}
    </div>
  )
}

export default Gallery
