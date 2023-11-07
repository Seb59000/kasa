import { Link } from 'react-router-dom'
import './Card.css'

function Card({ id, title, cover }) {
    return (
        <article className='card'>
            <Link to={`/logement/${id}`} className='cardLink'>
                <div className='cardImage'>
                    <img src={cover} alt={title} className='image' />
                </div>

                <header className='cardTitle'>
                    <h2 className='title'>{title}</h2>
                </header>
            </Link>
        </article>
    )
}

export default Card