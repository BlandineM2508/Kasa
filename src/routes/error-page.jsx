import { Link } from 'react-router-dom'
import '../style/error.scss'

export default function ErrorPage() {
  return (
    <div className="Section_Error">
      <div className="Error">404</div>
      <div className="Error_Message">
        <p className="Error_Tagline">Oups! La page que</p>
        <p className="Span_Error">&nbsp;vous demandez n&#39;existe pas.</p>
      </div>

      <Link to={'/'} className="Error_Link">
        Retourner sur la page d&#39;accueil
      </Link>
    </div>
  )
}
