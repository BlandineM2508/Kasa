import Banner from '../components/banner'
import Cards from '../components/cards'
import Banner_Home from '../../public/assets/banner_home.webp'

export default function Home() {
  return (
    <div className="layout">
      <Banner
        texte="Chez vous, partout et ailleurs"
        photo={Banner_Home}
        alt="Photo de la bannière de la page d'accueil"
        className="Photo_BannerHome"
      />
      <Cards />
    </div>
  )
}
