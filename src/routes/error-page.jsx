import { Link } from 'react-router-dom'
import '../style/error.scss'

export default function ErrorPage() {
  return (
    <div className="Section_Error">
      <p className="Error">404</p>
      <p className="Error_Txt">
        Oups ! La page que vous demandez n&#39;existe pas
      </p>
      <Link to={'/'} className="Error_Link">
        Retourner sur la page d&#39;accueil
      </Link>
    </div>
  )
}
