import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/LOGO.png'

function Header() {
    const title = 'Kasa'
    const link1 = 'Accueil'
    const link2 = 'A propos'
    return (
        <header className='lmj-banner'>
            <img src={logo} alt='kasa' className='banner-logo' />
            <div>

            </div>
            <h1 className='sr-only'>{title}</h1>
            <nav>
                <Link to="/">{link1}</Link>
                <Link to="/about">{link2}</Link>
            </nav>
        </header>
    )
}

export default Header