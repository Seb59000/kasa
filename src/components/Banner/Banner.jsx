import styles from './Banner.css'
import stylesAbout from './BannerAbout.css'
import logo from '../../assets/LOGO.png'

function Banner({ image, alt }) {
    // let selectedStyles = page === 'about' ? stylesAbout : styles;

    return (
        <div>
            <img id='banner-img' src={image} alt={alt} />
        </div>
    );
}

export default Banner