import Banner_Img from '../../public/assets/Banner_Img.svg'
import '../style/banner.scss'

export default function Banner() {
  return (
    <div className="Banner">
      <img className="Photo" src={Banner_Img} alt="banniere du site" />
      <p className="Texte">Chez vous, partout et ailleurs</p>
    </div>
  )
}
