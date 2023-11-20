import { NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/LOGO.png'

function Header() {
    const title = 'Kasa'
    const linkHome = 'Accueil'
    const linkAbout = 'A propos'
    return (
        <header>
            <img src={logo} alt='kasa' className='banner-logo' />
            <h1 className='sr-only'>{title}</h1>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "" : "noline"
                    }
                >
                    {linkHome}
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "" : "noline"
                    }
                >
                    {linkAbout}
                </NavLink>
            </nav>
        </header>
    )
}

export default Header