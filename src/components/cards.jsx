import '../style/cards.scss'
import data from '../../public/logements.json'
import { Link } from 'react-router-dom'

export default function Cards() {
  return (
    <div className="Background_Card">
      <article className="Link_Card ">
        {data.map((item) => (
          <Link to={`/logements/${item.id}`} className="Card" key={item.id}>
            <img className="Cover" src={item.cover} alt={item.title} />
            <p className="Title">{item.title}</p>
          </Link>
        ))}
      </article>
    </div>
  )
}
