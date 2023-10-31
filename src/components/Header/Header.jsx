import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/LOGO.png'

function Header() {
    const title = 'Kasa'
    const linkHome = 'Accueil'
    const linkAbout = 'A propos'
    return (
        <header>
            <img src={logo} alt='kasa' className='banner-logo' />
            <div>

            </div>
            <h1 className='sr-only'>{title}</h1>
            <nav>
                <Link to="/">{linkHome}</Link>
                <Link to="/about">{linkAbout}</Link>
            </nav>
        </header>
    )
}

export default Header