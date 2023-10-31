import styles from './Banner.css'
import stylesAbout from './BannerAbout.css'
import logo from '../../assets/LOGO.png'

function Banner({ image, alt, page }) {
    // let selectedStyles = page === 'about' ? stylesAbout : styles;

    return (
        <div id='banner'>
            {page === 'home' && (
                <div>
                    <h2>
                        Chez vous,partout et ailleurs
                    </h2>
                </div>
            )}
            <div>
                <img src={image} alt={alt} />
            </div>
        </div>
    );
}

export default Banner