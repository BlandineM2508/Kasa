import { useParams } from 'react-router-dom'
import data from '../../public/logements.json'
import '../style/logement_infos.scss'
import '../style/toggle_collapse.scss'
import Rating from './rating'
import Arrow_Collapse from '../../public/assets/collapse_arrow.svg'
import CollapseSection from './collapse'

export default function Logements() {
  const { id } = useParams() // Récupérez l'ID du logement depuis les paramètres d'URL

  // Recherche de la carte correspondant à l'ID dans le fichier JSON
  const logement = data.find((logement) => logement.id === id)
  console.log(logement)

  return (
    <div className="Section_Logement_Infos">
      <div className="Logement_Infos">
        <h2 className="Logement_Title">{logement.title}</h2>
        <p className="Logement_Location">{logement.location}</p>
        <div className="Logement_Host">
          <p className="Host_Name">{logement.host.name}</p>
          <img
            className="Host_Picture"
            src={logement.host.picture}
            alt="photo de l'host du logement"
          />
        </div>
      </div>

      <div className="Logement_Tags">
        {logement.tags.map((tag, index) => (
          <div key={index} className="Tags">
            {tag}
          </div>
        ))}
      </div>

      <div>
        <Rating rating={logement.rating} />
      </div>
      <div className="Toggle_Collapse">
        <CollapseSection
          title="Description"
          initialCollapsed={true}
          icon={Arrow_Collapse}
        >
          {logement.description}
        </CollapseSection>

        <CollapseSection
          title="Équipements"
          initialCollapsed={true}
          icon={Arrow_Collapse}
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
