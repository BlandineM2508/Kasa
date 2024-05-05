import LOGO_FOOTER from '/assets/LOGO_FOOTER.svg'
import '../style/footer.scss'

export default function Footer() {
  return (
    <div className="Background_Footer">
      <img className="Logo_Footer" src={LOGO_FOOTER} alt="logo du site" />
      <p className="Texte_Footer">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
