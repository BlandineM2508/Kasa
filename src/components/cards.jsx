import '../style/cards.scss'
import data from '../../public/logements.json'
import { Link } from 'react-router-dom'

export default function Cards() {
  return (
    <div className="Background_Grid">
      <article className="Link_Card">
        {data.map((item) => (
          <Link className="Card" key={item.id}>
            <p className="Title">{item.title}</p>
            <img className="Cover" src={item.cover} alt={item.title} />
          </Link>
        ))}
      </article>
    </div>
  )
}
