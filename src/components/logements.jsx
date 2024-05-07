import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react' // Importez useState
import data from '../../public/logements.json'
import '../style/logement_infos.scss'
import '../style/toggle_collapse.scss'
import Rating from './rating'
import Arrow_Collapse from '../../public/assets/collapse_arrow.svg'
import CollapseSection from './collapse'

export default function Logements() {
  const { id } = useParams() // Récupérez l'ID du logement depuis les paramètres d'URL
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null) // Utilisez useState pour stocker le logement

  useEffect(() => {
    // Recherche de la carte correspondant à l'ID dans le fichier JSON
    const foundLogement = data.find((logement) => logement.id === id)

    if (!foundLogement) {
      // Redirection vers la page d'erreur si le logement n'existe pas
      navigate('/error-page')
    } else {
      setLogement(foundLogement) // Définissez le logement trouvé s'il existe
    }
  }, [id, navigate])

  if (!logement) {
    // Retournez une indication de chargement ou autre si le logement n'est pas encore défini
    return <div>Chargement...</div>
  }

  // Rendu du composant avec le logement défini
  return (
    <div className="Section_Logement_Infos">
      <div className="Logement_Infos">
        <h2 className="Logement_Title">{logement.title}</h2>
        <p className="Logement_Location">{logement.location}</p>
      </div>

      <div className="Logement_Tags">
        {logement.tags.map((tag, index) => (
          <div key={index} className="Tags">
            {tag}
          </div>
        ))}
      </div>

      <div className="Host_and_Rating">
        <div className="Logement_Host">
          <p className="Host_Name">{logement.host.name}</p>
          <img
            className="Host_Picture"
            src={logement.host.picture}
            alt="photo de l'host du logement"
          />
        </div>
        <Rating rating={logement.rating} />
      </div>
      <div className="Container_Logement">
        <CollapseSection
          title="Description"
          initialCollapsed={true}
          icon={Arrow_Collapse}
          classNames={{
            Collapse_Title: 'Collapse_Title_Logement',
            Collapse_Arrow: 'Collapse_Arrow_Logement',
            Collapse_Content: 'Collapse_Content_Logement',
          }}
        >
          {logement.description}
        </CollapseSection>

        <CollapseSection
          title="Équipements"
          initialCollapsed={true}
          icon={Arrow_Collapse}
          classNames={{
            Collapse_Title: 'Collapse_Title_Logement',
            Collapse_Arrow: 'Collapse_Arrow_Logement',
            Collapse_Content: 'Collapse_Content_Logement',
          }}
        >
          <ul>
            <li>
              {logement.equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            </li>
          </ul>
        </CollapseSection>
      </div>
    </div>
  )
}
