import Banner from '../../components/Banner/Banner';
import image from '../../assets/banner/banner-home.jpg'
import './Home.css';

function Home() {
    return (
        <div id='banner-container'>
            <h2 id='banner-text'>
                Chez vous,partout et ailleurs
            </h2>
            <Banner
                image={image}
                alt='Littoral'
            />
        </div>
    )
}

export default Home