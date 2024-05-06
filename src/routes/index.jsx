import Banner from '../components/banner'
import Cards from '../components/cards'
import Banner_Accueil from '../../public/assets/Banner_Img.svg'

export default function Accueil() {
  return (
    <div>
      <Banner
        texte="Chez vous, partout et ailleurs"
        photo={Banner_Accueil}
        homePage={true}
      />
      <Cards />
    </div>
  )
}
