import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import logementsList from '../../data/logements.json';
import Collapse from '../../components/Collapse/Collapse.jsx'
import Slideshow from '../../components/Slideshow/Slideshow.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import './Appartement.css'

function Appartement() {
    document.title = "Showroom"

    const { id } = useParams()
    // const { logementsList, isLoading, error } = useFetch("/datas/logements.json");
    const logementData = logementsList.find(item => item.id === id);

    if (logementData === undefined) {
        return <Navigate to="/error" />;
    }

    const { title, pictures, host, description, rating, location, equipments, tags } = logementData;
    const nameParts = host.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts[1];

    return (
        <main>
            <section>
                <Slideshow pictures={pictures} title={title} />
            </section>
            <section id="infos">
                <div className="containerTitleTagsProfilRating">
                    <div className="containerTitleTags">
                        <div className="containerTitle">
                            <h2>{title}</h2>
                            <h3 className="location">{location}</h3>
                        </div>
                        <div className="containerTags">
                            <Tag tags={tags} />
                        </div>
                    </div>
                    <div className="containerRatingProfil">
                        <div className="containerRating">
                            {/* <Rating rating={rating} /> */}
                        </div>
                        <div className="containerProfil">
                            <h3 className="name" ><span>{firstName} </span><span>{lastName}</span></h3>
                            <img className="photo" src={host.picture} alt={host.name} />
                        </div>
                    </div>
                </div>
                <div className="containerDescriptionEquipments">
                    <div className="containerDescription">
                        <Collapse page="logement" label="Description" text={description} />
                    </div>
                    <div className="containerEquipments">
                        <Collapse page="logement" label="Équipements" text={equipments} />
                    </div>
                </div>
            </section >
        </main >
    )
}

export default Appartement