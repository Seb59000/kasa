import './Footer.css'
import logo from '../../assets/LOGO-white.png'

function Footer() {
    return (
        <footer>
            <img src={logo} alt='logo-kasa' className='footer-logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>

    )
}

export default Footer