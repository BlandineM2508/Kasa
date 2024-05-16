// Logement_Page.js
import Gallery from '../components/gallery'
import Logements from '../components/logements'

export default function Logement_Page() {
  return (
    <div className="layout">
      <div>
        <Gallery />
        <Logements />
      </div>
    </div>
  )
}
