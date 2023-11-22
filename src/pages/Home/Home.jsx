import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.jsx';
import image from '../../assets/banner/banner-home.jpg'
import useFetch from '../../utils/hooks'
import { useState, useEffect } from 'react'
import './Home.css';
import logementsList from '../../data/logements.json';

function Home() {
    // const { logementsList, isLoading, error } = useFetch("../../data/logements.json")
    // console.log(logementsList)
    // await fetchJSON()
    // getData();
    // const defaultValue = []
    // // Store list of all users
    // const [users, setUsers] = useState(defaultValue);

    // // Function to collect data
    // const getApiData = async () => {
    //     const response = await fetch(
    //         "../data/logements.json"
    //     ).then((response) => response.json());

    //     // update the state
    //     setUsers(response);
    // };

    // useEffect(() => {
    //     getApiData();
    // }, []);


    // console.log(users)
    document.title = "Accueil"
    return (
        <main>
            {/* <ul>{this.state.data.map(item => <li>{item.title}</li>)} </ul> */}
            <div id='banner-container'>
                <h2 id='banner-text'>
                    Chez vous, partout et ailleurs
                </h2>
                <Banner
                    image={image}
                    alt='Falaise face à la mer'
                />
            </div>
            <section className='container'>
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


async function getData() {
    const res = await fetch('../../data/logements.json');
    const data = await res.json();
    return this.setState({ data });
}
/**
 * Récupération des logements depuis le fichier JSON
 */
async function fetchJSON() {
    fetch('./logements.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    // fetch('../../data/logements.json')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));


    // const response = await fetch('../../data/logements.json')
    // await console.log(response)
    // const logementsList = await response.json()
    // await console.log(logementsList)




}

