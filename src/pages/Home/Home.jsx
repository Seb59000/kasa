import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.jsx';
import image from '../../assets/banner/banner-home.jpg'
// import useFetch from '../../utils/hooks'
import './Home.css';
import logementsList from '../../data/logements.json';

function Home() {
    // const { logementsList, isLoading, error } = useFetch("../../data/logements.json")
    // console.log(logementsList)
    // fetchJSON()
    document.title = "Accueil"
    return (
        <div>
            <div id='banner-container'>
                <h2 id='banner-text'>
                    Chez vous,partout et ailleurs
                </h2>
                <Banner
                    image={image}
                    alt='Falaise face à la mer'
                />
            </div>
            <div className='container'>
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
            </div>
        </div>
    )
}

export default Home

/**
 * Récupération des logements depuis le fichier JSON
 */
async function fetchJSON() {
    // fetch('../../data/logements.json')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    const response = await fetch('../../data/logements.json')
    console.log(response)
    const logementsList = await response.json()
    console.log(logementsList)
}