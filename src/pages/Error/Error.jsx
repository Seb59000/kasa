import './Error.css';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <h2 id='error'>404</h2>
            <p id='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link id='error-link' to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error