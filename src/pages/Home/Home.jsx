import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.jsx';
import image from '../../assets/banner/banner-home.jpg'
import './Home.css';
import logementsList from '../../data/logements.json';

function Home() {
    document.title = "Accueil"
    return (
        <main>
            <div id='banner-container'>
                <h2 id='banner-text'>
                    Chez vous, partout et ailleurs
                </h2>
                <Banner
                    image={image}
                    alt='Falaise face à la mer'
                />
            </div>
            <section className='cards'>
                <div id='card-container'>
                    {logementsList.map((logement, index) => (
                        <Card
                            key={`${logement.name}-${index}`}
                            id={logement.id}
                            title={logement.title}
                            cover={logement.cover}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home